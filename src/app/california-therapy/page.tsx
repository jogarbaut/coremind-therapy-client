// app/california-therapy/page.tsx
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Online Therapy Across California | CoreMind Therapy",
  description:
    "CoreMind Therapy provides online therapy for individuals across California. Support for anxiety, stress, burnout, relationships, and life transitions via secure telehealth.",
  alternates: {
    canonical: "https://coremind-therapy.com/california-therapy",
  },
  openGraph: {
    title: "Online Therapy Across California | CoreMind Therapy",
    description:
      "Online therapy for individuals across California. Support for anxiety, stress, burnout, relationships, and life transitions via secure telehealth.",
    url: "https://coremind-therapy.com/california-therapy",
    type: "website",
  },
}

export default function CaliforniaTherapyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <header>
        <h1 className="text-3xl font-semibold">
          Online Therapy Services Across California
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          CoreMind Therapy provides online therapy for individuals throughout
          California. We work with individuals navigating anxiety, stress,
          burnout, relationship challenges, and major life transitions through
          secure telehealth sessions.
        </p>
      </header>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">
          Therapy for Individuals Across California
        </h2>
        <p className="text-gray-700">
          Many individuals reach out during periods of change. This might
          include starting or changing careers, managing increased
          responsibility, adjusting to new relationships, or feeling stuck
          despite outward success. Therapy offers a structured space to slow
          things down, understand what's going on beneath the surface, and
          develop practical tools for moving forward.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">
          Licensed to Provide Therapy Throughout California
        </h2>
        <p className="text-gray-700">
          CoreMind Therapy is licensed to provide mental health services to
          clients located anywhere in California. Because therapy is delivered
          via telehealth, you do not need to live near a physical office to
          receive care.
        </p>
        <p className="text-gray-700">
          Online therapy offers flexibility without compromising quality.
          Sessions take place through a secure, HIPAA-compliant platform and
          follow the same ethical and professional standards as in-person
          therapy. This approach works especially well for individuals balancing
          work, school, or other commitments.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">
          Common Reasons Individuals Seek Therapy
        </h2>
        <p className="text-gray-700">
          Clients often reach out for support with:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-gray-700">
          <li>Anxiety and chronic stress</li>
          <li>Burnout related to work or school</li>
          <li>Difficulty setting boundaries or managing expectations</li>
          <li>Relationship and communication challenges</li>
          <li>Low self-esteem or persistent self-doubt</li>
          <li>Navigating identity, independence, or life direction</li>
        </ul>
        <p className="text-gray-700">
          Therapy is not only for moments of crisis. Many clients use therapy
          proactively to gain clarity, improve emotional resilience, and build
          healthier patterns before stress becomes overwhelming.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">
          Regions We Commonly Serve in California
        </h2>
        <p className="text-gray-700">
          While we work with clients statewide, we frequently support
          individuals located in the following regions:
        </p>

        <ul className="list-disc space-y-2 pl-5 text-gray-700">
          <li>
            <Link
              className="underline underline-offset-4"
              href="/therapy/contra-costa-county"
            >
              Contra Costa County
            </Link>
          </li>
          <li>
            <Link
              className="underline underline-offset-4"
              href="/therapy/bay-area"
            >
              Bay Area
            </Link>
          </li>
          <li>
            <Link
              className="underline underline-offset-4"
              href="/therapy/los-angeles-county"
            >
              Los Angeles County
            </Link>
          </li>
          <li>
            <Link
              className="underline underline-offset-4"
              href="/therapy/san-diego-county"
            >
              San Diego County
            </Link>
          </li>
          <li>
            <Link
              className="underline underline-offset-4"
              href="/therapy/orange-county"
            >
              Orange County
            </Link>
          </li>
          <li>
            <Link
              className="underline underline-offset-4"
              href="/therapy/sacramento-metro"
            >
              Sacramento Metro Area
            </Link>
          </li>
          <li>
            <Link
              className="underline underline-offset-4"
              href="/therapy/inland-empire"
            >
              Inland Empire
            </Link>
          </li>
        </ul>

        <p className="text-gray-700">
          Each region page provides more detail about availability and common
          concerns we see among clients in that area. Regardless of location,
          all services are provided online and available to clients throughout
          California.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">
          What to Expect From Online Therapy
        </h2>
        <p className="text-gray-700">
          The first session focuses on understanding what brings you to therapy
          and what you hope to gain from the process. We’ll discuss your current
          challenges, relevant background, and any questions you may have about
          therapy itself.
        </p>
        <p className="text-gray-700">
          Ongoing sessions are collaborative and paced to your needs. Therapy
          may involve building coping strategies, identifying unhelpful
          patterns, improving emotional awareness, or working through specific
          situations in your life. Sessions are scheduled regularly and adjusted
          as your goals evolve.
        </p>
        <p className="text-gray-700">
          Privacy and confidentiality are taken seriously. Telehealth sessions
          are conducted through secure technology designed to protect your
          information and provide a comfortable, professional experience.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">
          Is Online Therapy Right for You?
        </h2>
        <p className="text-gray-700">
          Online therapy can be a good fit if you:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-gray-700">
          <li>Live anywhere in California and prefer remote sessions</li>
          <li>Want flexibility with scheduling</li>
          <li>Are comfortable meeting via video</li>
          <li>Are looking for consistent support without commuting</li>
        </ul>
        <p className="text-gray-700">
          If you’re unsure whether telehealth is the right option, we’re happy
          to talk through questions and help you decide.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">
          Get Started With Online Therapy in California
        </h2>
        <p className="text-gray-700">
          If you’re considering therapy and are located in California, we invite
          you to reach out. Taking the first step can feel intimidating, but
          it’s also a meaningful investment in your well-being.
        </p>
        <p className="text-gray-700">
          Contact CoreMind Therapy to ask questions or schedule a consultation.
          We’re here to help you determine whether therapy is the right next
          step and how we can best support you.
        </p>

        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-black px-5 py-3 font-medium text-white"
          >
            Contact CoreMind Therapy
          </Link>
        </div>

        <p className="pt-6 text-sm text-gray-600">
          Licensed to provide therapy to clients located in the state of
          California. Services are provided via secure telehealth.
        </p>
      </section>
    </main>
  )
}
