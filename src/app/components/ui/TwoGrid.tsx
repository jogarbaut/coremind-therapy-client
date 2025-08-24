import type { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export default function TwoGrid({ children }: Props) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      {children}
    </section>
  )
}
