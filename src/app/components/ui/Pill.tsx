// Pill.tsx
type Props = {
  phone: string // e.g., "+19252360295"
  display?: string // e.g., "925-236-0295"
}

export default function Pill({ phone, display }: Props) {
  const formattedNumber = display || phone

  return (
    <a
      href={`tel:${phone}`}
      aria-label={`Call or text ${formattedNumber}`}
      className="inline-flex w-fit flex-col items-center justify-center gap-1 rounded-full bg-[#D4CFC6] px-12 py-3 text-black shadow-sm ring-1 ring-black/5 transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
    >
      <span className="uppercase tracking-[0.25em] text-xs sm:text-sm md:text-base">
        Call or Text:
      </span>
      <span className="font-medium tracking-[0.2em] text-xs sm:text-sm md:text-base">
        {formattedNumber}
      </span>
    </a>
  )
}
