export default function Footer() {
  const phoneDisplay = "(925) 236-0295"
  const phoneE164 = "+19252360295"
  const email = "kjones@coremind-therapy.com"
  const siteUrl = "https://www.coremind-therapy.com"

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CoreMind Therapy",
    url: siteUrl,
    email: `mailto:${email}`,
    telephone: phoneE164,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: email,
        telephone: phoneE164,
        availableLanguage: ["en"],
      },
    ],
  }

  return (
    <footer className="bg-gray-900 text-white w-full" role="contentinfo">
      {/* JSON-LD for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="sr-only">Site Footer</h2>

        <div className="grid grid-cols-2 gap-8">
          {/* Brand / About */}
          <section aria-labelledby="footer-brand">
            <h3
              id="footer-brand"
              className="text-2xl font-light mb-4 tracking-wide"
            >
              COREMIND THERAPY
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Where you will find the courage to embrace what makes you, you.
            </p>
          </section>

          {/* Contact */}
          <section aria-labelledby="footer-contact">
            <h3 id="footer-contact" className="text-lg font-medium mb-4">
              Contact
            </h3>
            <address className="not-italic space-y-2 text-sm text-gray-300">
              <p>
                Phone:{" "}
                <a
                  href={`tel:${phoneE164}`}
                  className="underline decoration-gray-500 hover:decoration-gray-300"
                >
                  {phoneDisplay}
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href={`mailto:${email}`}
                  className="underline decoration-gray-500 hover:decoration-gray-300"
                >
                  {email}
                </a>
              </p>
              <p>Telehealth sessions available</p>
            </address>
          </section>
        </div>

        {/* Nav links */}
        <nav
          aria-label="Footer"
          className="mt-10 border-t border-gray-800 pt-6 flex justify-center"
        >
          <ul className="flex flex-wrap justify-center gap-6 text-xs text-gray-400">
            <li>
              <a href="/about" className="hover:text-gray-200">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-gray-200">
                Services
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-gray-200">
                FAQ
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-200">
                Contact
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-gray-200">
                Privacy
              </a>
            </li>
          </ul>
        </nav>

        <div className="border-t border-gray-800 mt-6 pt-6 text-center">
          <p className="text-sm text-gray-400">
            <small>
              © {new Date().getFullYear()} CoreMind Therapy. All rights
              reserved.
            </small>
          </p>
        </div>
      </div>
    </footer>
  )
}
