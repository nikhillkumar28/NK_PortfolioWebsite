import { NextResponse } from 'next/server'
import mongoose, { Schema } from 'mongoose'
import { connectToDatabase } from '@/lib/mongoose'

type Payload = {
  name: string
  email: string
  message: string
}

const ContactSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true }
)

const Contact =
  (mongoose.models.Contact as mongoose.Model<{ name: string; email: string; message: string }>) ||
  mongoose.model('Contact', ContactSchema)

type RateRecord = {
  lastRequestAt: number
  windowStartAt: number
  count: number
}

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_MIN_GAP_MS = 60 * 1000
const rateStore = new Map<string, RateRecord>()

const getClientIp = (req: Request) => {
  const forwarded = req.headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  return req.headers.get('x-real-ip') ?? 'unknown'
}

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req)
    const now = Date.now()
    const record = rateStore.get(ip)

    if (record) {
      if (now - record.lastRequestAt < RATE_LIMIT_MIN_GAP_MS) {
        return NextResponse.json({ error: 'Please wait before sending another message.' }, { status: 429 })
      }
      if (now - record.windowStartAt <= RATE_LIMIT_WINDOW_MS && record.count >= RATE_LIMIT_MAX) {
        return NextResponse.json({ error: 'Too many requests. Try again later.' }, { status: 429 })
      }
      if (now - record.windowStartAt > RATE_LIMIT_WINDOW_MS) {
        rateStore.set(ip, { lastRequestAt: now, windowStartAt: now, count: 1 })
      } else {
        rateStore.set(ip, {
          lastRequestAt: now,
          windowStartAt: record.windowStartAt,
          count: record.count + 1,
        })
      }
    } else {
      rateStore.set(ip, { lastRequestAt: now, windowStartAt: now, count: 1 })
    }

    const { name, email, message } = (await req.json()) as Payload

    if (!name || !name.trim()) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 })
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }
    if (!message || message.trim().length < 10) {
      return NextResponse.json({ error: 'Invalid message' }, { status: 400 })
    }

    await connectToDatabase()
    await Contact.create({ name: name.trim(), email: email.trim(), message: message.trim() })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
