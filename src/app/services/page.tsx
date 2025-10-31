import servicesImage from "../../../public/services.svg"
import expectImage from "../../../public/expect.svg"
import Image from "next/image"
import PageHeader from "../components/ui/PageHeader"
import Pill from "../components/ui/Pill"

export default function Services() {
  return (
    <>
      <section className="mb-6 grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 items-center max-w-6xl mx-auto p-4">
        {/* Left: Services text (slightly larger column) */}
        <div>
          <PageHeader>Services</PageHeader>

          <h2 className="text-lg md:text-xl font-light text-gray-900 mb-3">
            Free initial phone consultation (10-15 minutes)
          </h2>

          <h2 className="text-lg md:text-xl font-light text-gray-900 mt-6 mb-2">
            Individual therapy (50 minutes)
          </h2>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
            If you&apos;re looking for a safe space to discover and express
            yourself while also building a strong foundation for your future,
            you&apos;re in the right place.
          </p>

          <h3 className="uppercase tracking-wide text-gray-900 mb-3 text-sm md:text-base">
            Therapy may be helpful for those who:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-800 text-sm md:text-base">
            <li>Tend to get stuck in their head</li>
            <li>Feel easily overwhelmed or stressed</li>
            <li>Have difficulty identifying and managing emotions</li>
            <li>Show reduced interest/enjoyment in the things once loved</li>
            <li>Struggle to put themself out there</li>
            <li>Appear more persistently irritable, down, or upset</li>
            <li>Seem withdrawn or increasingly isolated from others</li>
          </ul>
        </div>

        {/* Right: Responsive image */}
        <div className="flex flex-col items-center">
          <div className="relative w-full">
            <Image
              src={servicesImage}
              alt="Therapy space with calming visuals"
              className="w-full max-h-[40vh] object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mb-6 grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 items-center max-w-6xl mx-auto p-4">
        {/* Left: Services text (slightly larger column) */}
        <div>
          <PageHeader>What to expect</PageHeader>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
            Many clients I work with are new to therapy or are starting to talk
            to someone about some pretty difficult things for the first time. As
            an Asian American woman, I get how hard it can be to reach out and
            ask for help.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
            From the very first session, I aim to create a space that feels safe
            for you to ask the scary and uncomfortable questions, set the pace,
            and provide feedback about your care. I take a warm, collaborative,
            and gentle approach to therapy focused on meeting you where you are
            at. This is your journey, and I am here to support you in reaching
            your destination.
          </p>
        </div>

        {/* Right: Responsive image */}
        <div className="flex flex-col items-center">
          <div className="relative w-full">
            <Image
              src={expectImage}
              alt="Client waving at camera"
              className="w-full max-h-[40vh] object-contain"
              priority
            />
          </div>
          <Pill phone="+19252360295" display="925-236-0295" />
        </div>
      </section>
    </>
  )
}
