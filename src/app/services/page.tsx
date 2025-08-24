import TwoGrid from "../components/ui/TwoGrid"
import image from "../../../public/services.jpg"
import Image from "next/image"
import PageHeader from "../components/ui/PageHeader"

interface Service {
  id: number
  title: string
  description?: string
  duration?: string
  notes?: string
}

const services: Service[] = [
  {
    id: 1,
    title: "FREE INITIAL PHONE CONSULTATION",
    duration: "10-15 minutes",
  },
  {
    id: 2,
    title: "INDIVIDUAL THERAPY",
    duration: "50 minutes",
    description:
      "One-on-one therapy sessions focused on helping you address your personal needs and achieve your goals",
  },
  {
    id: 3,
    title: "THERAPY FOR YOUNG ADULTS",
    duration: "50 minutes",
    description:
      "Specialized therapy oriented toward supporting you in finding yourself and navigating life's challenges during a pivotal stage of life",
  },
  {
    id: 4,
    title: "THERAPY FOR TEENS",
    duration: "50 minutes",
    description:
      "Specialized and developmentally-appropriate therapy for teens working through challenges unique to adolesence",
  },
]

export default function Services() {
  return (
    <>
      <PageHeader>Services</PageHeader>

      <div className="flex flex-col text-sm text-gray-500 italic">
        <p>* Sessions are exclusively offered via telehealth at this time</p>
        <p>* Evening session times offered based on availability</p>
      </div>

      <TwoGrid>
        <div>
          {services.map((service) => (
            <div
              key={service.id}
              className="border-b border-gray-200 my-4 pb-4"
            >
              <h2 className="text-lg md:text-xl font-medium text-gray-900 mb-2">
                {service.title}
              </h2>
              {service.duration && (
                <span className="text-gray-700">({service.duration})</span>
              )}
              <p className="text-gray-700">{service.description}</p>
              {service.notes && (
                <p className="text-sm text-gray-700 italic">{service.notes}</p>
              )}
            </div>
          ))}
        </div>
        <div className="relative h-full min-h-96 overflow-hidden">
          <Image
            src={image}
            alt="Plant"
            fill
            className="object-cover"
            sizes="(max-width:768px) 50vw, 100vw"
          />
        </div>
      </TwoGrid>
    </>
  )
}
