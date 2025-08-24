import { type ReactNode } from "react"

interface Props {
  children: ReactNode
}

export default function PageHeader({ children }: Props) {
  return (
    <header className="text-center pt-8 pb-12 lg:pt-12 lg:pb-16">
      <h1 className="text-5xl lg:text-6xl font-bold">{children}</h1>
    </header>
  )
}
