import Image from "next/image"
import image from "../../public/coremind-therapy-logo.svg"
import image2 from "../../public/therapy-chair.jpg"

export default function Home() {
  return (
    <>
      <h1 className="hidden">CoreMind Therapy</h1>
      <div className="grid grid-cols-2 items-center h-full mb-16">
        <div className="flex items-center justify-center text-center md:text-left">
          <Image
            src={image}
            alt="CoreMind Therapy Logo"
            className="object-cover"
          />
        </div>
        <div className="flex items-center justify-center text-center md:text-left">
          <Image
            src={image2}
            alt="CoreMind Therapy Logo"
            className="object-cover max-h-screen"
          />
        </div>
      </div>

      <section className="space-y-6 mx-auto text-center">
        <h2 className="text-xl sm:text-2xl font-light text-gray-900 tracking-wide text-center">
          Where you will find the courage to embrace what makes you,
          <span className="italic"> you</span>!
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Life can be hard. And sometimes, it can feel like you're drowning in
          responsibilities and expectations. Whether you are feeling lost,
          lonely, stuck, or unsure of your future, there{" "}
          <span className="italic">is</span> a path forward for you, one that
          you do not have to brave alone.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          It's easy to feel like you're losing yourself and become disconnected
          when everything around you gets loud and overwhelming. But what if it
          didn't have to be that way? What if you can find purpose in what you
          do and not just manage to get through the day? What if you can build
          resilience so the setbacks don't knock you down so hard? And what if
          you can find the courage to stay true to yourself even when it feels
          hard and scary?
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Rather than avoiding the chaos, let's help you take back control of
          your own life. Let's help you find your direction, discover your voice
          - who you are and what you stand for - and find ways to show up as
          your authentic self even when things gets tough.
        </p>
      </section>
    </>
  )
}
