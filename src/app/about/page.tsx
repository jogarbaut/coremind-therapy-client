import Image from "next/image"
import headshot from "../../../public/kaylin-jones.png"
import PageHeader from "../components/ui/PageHeader"

export default function About() {
  return (
    <>
      <PageHeader>About</PageHeader>
      <div className="mb-12 grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4 items-center max-w-6xl mx-auto p-4">
        <div className="flex flex-col items-center">
          <div className="relative w-full h-auto md:h-[50vh]">
            <Image
              src={headshot}
              alt="Doctor Jones portrait"
              className="w-full h-auto md:h-full object-contain"
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
            It is an honor to support you on your mental health journey! I am a
            licensed clinical psychologist based in Walnut Creek, California. I
            specialize in helping teens and young adults navigate challenges
            with anxiety/stress, depression, relationships, identity,
            perfectionism, and big life transitions.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            With me, therapy isn&apos;t be about fixing symptoms — it&apos;s
            about exploring what is beneath them, honoring everything that makes
            you, you, and helping you to discover your strengths so that you can
            thrive! Your story — your background, your beliefs, your struggles —
            matters. Whether you&apos;re dealing with major life transitions,
            interpersonal issues, perfectionism, past traumas, or just wanting
            to develop more self-awareness, this is a place that supports you.
          </p>
        </div>
      </div>
      <section
        aria-labelledby="education-training"
        className="max-w-4xl mx-auto my-12 px-4"
      >
        <h2 id="education-training" className="sr-only">
          Education and Training
        </h2>

        <div className="grid grid-cols-2 gap-8 text-center">
          {/* Education */}
          <div>
            <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 text-center">
              EDUCATION
            </h3>
            <ul className="list-disc pl-6 space-y-4 text-gray-700 text-sm md:text-base text-left inline-block mx-auto">
              <li>
                <strong>Doctor of Philosophy (PhD)</strong> in Clinical
                Psychology
                <br />
                <span className="text-gray-600">Palo Alto University</span>
              </li>
              <li>
                <strong>Master of Science (MS)</strong> in Clinical Psychology
                <br />
                <span className="text-gray-600">Palo Alto University</span>
              </li>
              <li>
                <strong>Bachelor of Arts (BA)</strong> in Psychology and Social
                Behavior
                <br />
                <span className="text-gray-600">
                  University of California, Irvine
                </span>
              </li>
            </ul>
          </div>

          {/* Training */}
          <div>
            <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 text-center">
              TRAINING
            </h3>
            <ul className="list-disc pl-6 space-y-4 text-gray-700 text-sm md:text-base text-left inline-block mx-auto">
              <li>
                <strong>Postdoctoral Psychology Fellowship</strong>
                <br />
                <span className="text-gray-600">
                  UC Berkeley Student Mental Health Services
                </span>
              </li>
              <li>
                <strong>Predoctoral Psychology Internship</strong>
                <br />
                <span className="text-gray-600">
                  Washington State University, CAPS
                </span>
              </li>
              <li>
                <strong>
                  Behavioral Health Trainee — Child & Adolescent Track
                </strong>
                <br />
                <span className="text-gray-600">
                  Asian Americans for Community Involvement (AACI)
                </span>
              </li>
              <li>
                <strong>Mental Health Trainee</strong>
                <br />
                <span className="text-gray-600">
                  San Jose Job Corps, Student Mental Health
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
