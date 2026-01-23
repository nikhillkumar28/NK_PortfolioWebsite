import { CaseStudyLayout } from "@/components/case-study/case-study-layout"

export default function ExampleCaseStudyPage() {
  return (
    <CaseStudyLayout
      meta={{
        title: "Full-Stack Blog Website",
        subtitle:
          "A production-ready blogging platform demonstrating end-to-end web development skills.",
        role: "Full-Stack Developer",
        timeline: "3 months",
        techSummary:
          "Next.js + React on the frontend, REST APIs on the backend, and PostgreSQL for persistent data.",
        tags: ["Full-Stack", "Authentication", "Performance", "Deployment"],
        links: [
          { label: "Live Demo", href: "#" },
          { label: "GitHub", href: "#" },
          { label: "Back to Portfolio", href: "/" },
        ],
      }}
      problem={
        <ul>
          <li>
            Many students and early-stage writers want a simple platform to
            publish content without managing complex CMS tools.
          </li>
          <li>
            Existing solutions are either too limited, not customizable, or
            difficult to self-host.
          </li>
        </ul>
      }
      importance={
        <ul>
          <li>
            Demonstrates ability to design and ship a complete real-world web
            product.
          </li>
          <li>
            Shows understanding of user experience, content workflows, and
            performance.
          </li>
          <li>
            Highlights experience with authentication, authorization, and data
            modeling.
          </li>
        </ul>
      }
      techAndArchitecture={
        <>
          <p>
            The application follows a classic full-stack architecture where the
            Next.js frontend communicates with a backend API layer and a
            relational database.
          </p>
          <ul>
            <li>Frontend: Next.js, React, TypeScript, Tailwind CSS.</li>
            <li>
              Backend: Node.js / API routes for CRUD operations, authentication,
              and authorization.
            </li>
            <li>
              Database: PostgreSQL with a normalized schema for users, posts,
              and comments.
            </li>
            <li>
              Auth: JWT / session-based authentication with role-based access
              for admins.
            </li>
          </ul>
        </>
      }
      implementation={
        <>
          <p>Key implementation details include:</p>
          <ul>
            <li>
              Built reusable UI components for posts, forms, and layout to keep
              the codebase maintainable.
            </li>
            <li>
              Implemented protected routes so only authenticated users can
              create, edit, and delete posts.
            </li>
            <li>
              Added server-side rendering for fast initial loads and better SEO.
            </li>
            <li>
              Handled form validation and error states for a smooth authoring
              experience.
            </li>
          </ul>
        </>
      }
      deployment={
        <>
          <p>The project is designed to be deployed on modern cloud platforms.</p>
          <ul>
            <li>
              Frontend + backend deployed on Vercel as a single Next.js
              application.
            </li>
            <li>Database hosted on a managed PostgreSQL service.</li>
            <li>
              Environment variables used for secrets and configuration (database
              URL, auth secrets, etc.).
            </li>
          </ul>
        </>
      }
      challenges={
        <>
          <p>Some of the main challenges were:</p>
          <ul>
            <li>
              Designing a flexible schema that supports tags, comments, and
              future features.
            </li>
            <li>
              Balancing server-side rendering with client-side interactivity.
            </li>
            <li>
              Ensuring that authentication and authorization logic remained
              secure and maintainable.
            </li>
          </ul>
        </>
      }
      learnings={
        <>
          <p>This project strengthened my understanding of:</p>
          <ul>
            <li>
              How to design and ship a production-ready full-stack web
              application.
            </li>
            <li>
              Best practices for structuring Next.js apps for scalability and
              performance.
            </li>
            <li>
              How to think from a user and recruiter perspective when showcasing
              technical work.
            </li>
          </ul>
          <p className="mt-2">
            Future improvements include adding analytics, richer editor
            features, and role-based admin tools.
          </p>
        </>
      }
    />
  )
}