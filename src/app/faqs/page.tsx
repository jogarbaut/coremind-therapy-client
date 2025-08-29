import Image from "next/image"
import TwoGrid from "../components/ui/TwoGrid"
import image from "../../../public/faqs.jpg"
import PageHeader from "../components/ui/PageHeader"

interface FAQ {
  id: number
  question: string
  answer: string
  category?: string
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "WHAT ARE YOUR FEES?",
    answer:
      "We offer a free 15-minute initial phone consultation to help get you started and figure out whether we are the best for you. During that phone consultation, fees will be discussed in greater detail. It is our hope that fees do not stand in the way of you getting the support you desire and need.",
    category: "Payment",
  },
  {
    id: 2,
    question: "DO YOU TAKE INSURANCE?",
    answer:
      "We do accept limited insurance carriers. However, many health insurance companies also provide partial reimbursement for services. For those we are not in-network with, we can offer a superbill to support your claim to your insurance. We encourage you to contact your insurance provider before we meet to ask: 1) Do I have out-of-network benefits for mental health services? 2) What is the rate of reimbursement? 3) How many sessions are covered? 4) Is there a deductible I must meet first?",
    category: "Payment",
  },
  {
    id: 3,
    question: "HOW IS PAYMENT ACCEPTED?",
    answer:
      "Payments are completed through Ivy Pay, a HIPAA-compliant app to protect your private information. Acceptable forms of payment include debit cards, credit cards, HSA's and FSA's.",
    category: "Payment",
  },
  {
    id: 4,
    question: "DO YOU OFFER EVENING SESSIONS?",
    answer:
      "Yes, we do offer evening session times. Please inquire for availability.",
    category: "Sessions",
  },
]

export default function FAQS() {
  return (
    <>
      <PageHeader>FAQ&apos;s</PageHeader>

      <TwoGrid>
        <div>
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b border-gray-200 my-4 pb-4">
              <h2 className="text-lg md:text-xl font-medium text-gray-900 mb-2 inline-block mr-2">
                {faq.question}
              </h2>
              {faq.category && (
                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                  {faq.category}
                </span>
              )}
              <p className="text-sm text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
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
