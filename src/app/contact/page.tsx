import ContactForm from "../components/forms/ContactForm"
import PageHeader from "../components/ui/PageHeader"

export default function Contact() {
  return (
    <>
      <PageHeader>Contact</PageHeader>
      <div className="max-w-2xl mx-auto">
        <div className="text-center md:text-left my-6">
          <p className="mt-3 text-gray-700 text-center">
            Ready to take the first step? We offer a free 10-15 minute initial
            phone consultation to help you get started and determine if
            we&apos;re the right fit for your needs.
          </p>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-6 text-center md:text-left">
            Send a Message
          </h3>
          <ContactForm />
        </div>
      </div>
    </>
  )
}
