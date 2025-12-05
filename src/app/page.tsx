import Image from "next/image"
import image from "../../public/coremind-therapy-logo.svg"
import image2 from "../../public/hero-image.svg"
import image3 from "../../public/hero-image-2.svg"
import image4 from "../../public/hero-image-3.svg"
import Pill from "./components/ui/Pill"

export default function Home() {
  return (
    <>
      <h1 className="hidden">CoreMind Therapy</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16 mb-16 md:mb-36">
        <section
          aria-labelledby="hero-title"
          className="flex flex-col items-center md:items-start justify-center text-center md:text-left space-y-4 md:space-y-6 px-4"
        >
          <header className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <Image
              src={image}
              alt="CoreMind Therapy logo"
              width={800}
              height={400}
              className="w-full h-auto object-contain"
              priority
            />
            <h2
              id="hero-title"
              className="uppercase tracking-wide font-semibold text-xs sm:text-base md:text-lg leading-relaxed"
            >
              Therapy for Teens and Twenty-Somethings
            </h2>
          </header>

          <p className="uppercase max-w-xl text-xs sm:text-base md:text-lg">
            You see so many amazing qualities in them — if only they can see it
            for themselves.
          </p>
        </section>
        <div className="flex items-center justify-center text-center md:text-left">
          <Image
            src={image2}
            alt="CoreMind Therapy Logo"
            className="object-cover max-h-screen"
          />
        </div>
      </div>

      <section className="space-y-6 mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16 mb-16 md:mb-36">
          <div className="order-2 md:order-1 flex items-center justify-center">
            <Image
              src={image3}
              alt="Therapist holding a dog"
              className="object-cover max-h-screen"
            />
          </div>
          <section className="order-1 md:order-2 flex flex-col items-center md:items-start justify-center text-center md:text-left space-y-4 md:space-y-6 px-4">
            <p className="uppercase max-w-xl text-xs sm:text-base md:text-lg leading-relaxed">
              I help teens and twenty-somethings overcome challenges with
              anxiety, depression, and adjustment.
            </p>
            <p className="max-w-xl text-xs sm:text-base md:text-lg leading-relaxed">
              Being a teen and in your twenties can be hard. One moment, you are
              so sure of yourself and your future and the next, you&apos;re
              drowning in overwhelm and doubt. Whether you are a teen or
              twenty-something yourself or a parent doing the big, important job
              of supporting one, you are not alone.
            </p>
          </section>
        </div>
      </section>

      <section className="space-y-6 mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16 mb-16 md:mb-36">
          <section className="flex flex-col items-center md:items-start justify-center text-center md:text-left space-y-4 md:space-y-6 px-4">
            <p className="max-w-xl text-2xl sm:text-3xl md:text-5xl leading-relaxed">
              How I can help
            </p>
            <p className="max-w-xl text-xs sm:text-base md:text-lg leading-relaxed">
              I work with teens and folx throughout their twenties to help them
              create a life worth living. Clients often come to therapy feeling
              lost, stuck, lonely, and overwhelmed. They are bright,
              strong-minded, and resilient. Yet somehow, life keeps managing to
              knock them down.
            </p>
            <p className="max-w-xl text-xs sm:text-base md:text-lg leading-relaxed">
              Therapy with me is focused on helping teens and young adults
              discover themselves - who they are and what they stand for - and
              find the courage and skills to embrace their fullest, most
              authentic selves.
            </p>
            <Pill phone="+19252360295" display="925-236-0295" />
          </section>
          <div className="flex items-center justify-center text-center md:text-left">
            <Image
              src={image4}
              alt="Therapist holding a dog"
              className="object-cover max-h-screen"
            />
          </div>
        </div>
      </section>
    </>
  )
}
