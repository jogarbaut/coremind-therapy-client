import TwoGrid from "../components/ui/TwoGrid"
import image1 from "../../../public/specialties/image1.jpg"
import image2 from "../../../public/specialties/image2.jpg"
import image3 from "../../../public/specialties/image3.jpg"
import image4 from "../../../public/specialties/image4.jpg"
import image5 from "../../../public/specialties/image5.jpg"
import Image from "next/image"
import image from "../../../public/treatment-approaches.jpg"
import PageHeader from "../components/ui/PageHeader"

const specialties = [
  {
    id: 1,
    description: ["Adjustment", "Stress", "Anxiety"],
    image: image1,
    alt: "Person experiencing adjustment stress",
  },
  {
    id: 2,
    description: ["Depression"],
    image: image2,
    alt: "Person dealing with depression",
  },
  {
    id: 3,
    description: ["Identity Development"],
    image: image3,
    alt: "Person exploring identity",
  },
  {
    id: 4,
    description: ["Teens", "Young Adults", "Adults"],
    image: image4,
    alt: "Group of teenagers",
  },
  {
    id: 5,
    description: ["Asian American Mental Health"],
    image: image5,
    alt: "Asian American mental health support",
  },
]

const approaches = [
  "Acceptance and Commitment Therapy (ACT)",
  "Cognitive Behavioral Therapy (CBT)",
  "Compassion-Focused Therapy (CFT)",
  "Mindfulness",
  "Culturally-Informed Therapy",
  "Solution-Focused Therapy",
]

export default function Specialties() {
  return (
    <>
      <div className="mb-16">
        <PageHeader>Specialties</PageHeader>
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4">
          {specialties.map((specialty) => (
            <div key={specialty.id} className="flex flex-col items-center">
              {/* Circular Image */}
              <div className="relative w-24 h-24 md:w-36 md:h-42 mb-4 rounded-full overflow-hidden">
                <Image
                  src={specialty.image}
                  alt={specialty.alt}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Text Labels */}
              <div className="text-center">
                {specialty.description.map((description) => (
                  <h3 key={description} className="text-gray-900 leading-tight">
                    {description}
                  </h3>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mb-4 md:mb-12">
        <PageHeader>Treatment Approaches</PageHeader>
      </div>

      <TwoGrid>
        <div className="flex flex-col space-y-4 mx-auto items-center w-full">
          {approaches.map((approach) => (
            <div
              key={approach}
              className="bg-gray-100 rounded-lg shadow-sm py-3 px-4 text-gray-800 text-center max-w-sm w-full"
            >
              {approach}
            </div>
          ))}
        </div>
        <div className="relative h-full min-h-96 overflow-hidden">
          <Image
            src={image}
            alt="Open road symbolizing therapeutic journey"
            fill
            className="object-cover"
            sizes="(max-width:768px) 50vw, 100vw"
          />
        </div>
      </TwoGrid>
    </>
  )
}
