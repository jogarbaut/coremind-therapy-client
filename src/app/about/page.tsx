import Image from "next/image"
import headshot from "../../../public/kaylin-jones.png"
import PageHeader from "../components/ui/PageHeader"

export default function About() {
  return (
    <>
      <PageHeader>About</PageHeader>
      <div className="mb-12 grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4 items-start max-w-6xl mx-auto p-4">
        <div className="flex flex-col items-center">
          <div className="relative w-full h-auto">
            <Image
              src={headshot}
              alt="Doctor Jones portrait"
              className="w-full max-h-[40vh] object-contain"
            />
          </div>
          <div className="text-center mt-4">
            <p className="text-lg font-light text-gray-900">
              Kaylin Jones, PhD
            </p>
            <p className="text-gray-600 italic mb-1">she/her</p>
            <p className="text-gray-600">PSY35169</p>
          </div>
        </div>

        <div>
          <p className="text-gray-700 leading-relaxed mb-6">
            It is such an honor to support you on your mental health journey! I
            am a licensed clinical psychologist who works with a variety of
            concerns, including anxiety/stress, depression, relationship
            challenges, identity concerns, trauma, perfectionism, academic
            struggles, burnout, and more.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Though I work with individuals across the lifespan, I am
            particularly passionate about working with teens and young adults.
            As if life weren't hard enough, so much goes on during this time
            that can easily make your world feel like it's spinning out of
            control. If you're looking for a safe space to discover and express
            yourself while also building a strong foundation for your future,
            you're in the right place.
          </p>
          <p className="text-gray-700 leading-relaxed">
            As an Asian American woman, I get how hard it can be to reach out
            and ask for help. With me, therapy isn't be about fixing symptoms —
            it's about exploring what is beneath them, honoring everything that
            makes you, <span className="italic">you</span>, and helping you to
            discover your strengths so that you can thrive! Your story — your
            background, your beliefs, your struggles — matters. Whether you're
            dealing with life transitions, interpersonal issues, perfectionism,
            past traumas, or just wanting to develop more self-awareness, this
            is a place that supports you.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div>
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 text-center md:text-left">
            EDUCATION
          </h2>
          <ul className="list-disc pl-4 space-y-4 text-gray-700 text-sm md:text-base">
            <li>
              Doctor of Philosophy (PhD) in Clinical Psychology
              <br />
              <span className="text-gray-600">Palo Alto University</span>
            </li>
            <li>
              Master of Science (MS) in Clinical Psychology
              <br />
              <span className="text-gray-600">Palo Alto University</span>
            </li>
            <li>
              Bachelor of Arts (BA) in Psychology and Social Behavior
              <br />
              <span className="text-gray-600">
                University of California, Irvine
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 text-center md:text-left">
            TRAINING
          </h2>
          <ul className="list-disc pl-4 space-y-4 text-gray-700 text-sm md:text-base">
            <li>
              Postdoctoral Psychology Fellowship
              <br />
              <span className="text-gray-600">
                UC Berkeley Student Mental Health Services
              </span>
            </li>
            <li>
              Predoctoral Psychology Internship
              <br />
              <span className="text-gray-600">
                Washington State University, CAPS
              </span>
            </li>
            <li>
              Behavioral Health Trainee — Child & Adolescent Track
              <br />
              <span className="text-gray-600">
                Asian Americans for Community Involvement (AACI)
              </span>
            </li>
            <li>
              Mental Health Trainee
              <br />
              <span className="text-gray-600">
                San Jose Job Corps, Student Mental Health
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
