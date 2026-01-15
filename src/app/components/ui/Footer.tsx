import Link from "next/link"

export default function Footer() {
  const phoneDisplay = "(925) 236-0295"
  const phoneE164 = "+19252360295"
  const email = "kjones@coremind-therapy.com"

  const siteUrl = "https://www.coremind-therapy.com"

  const businessName = "CoreMind Therapy"
  const address = {
    streetAddress: "1460 Maria Lane #300",
    addressLocality: "Walnut Creek",
    addressRegion: "CA",
    postalCode: "94553",
    addressCountry: "US",
  }

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness"],
    "@id": `${siteUrl}/#coremind-therapy`,
    name: businessName,
    url: siteUrl,
    email: `mailto:${email}`,
    telephone: phoneE164,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "California",
      },
    ],
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

  const year = new Date().getFullYear()

  return (
    <footer className="w-full bg-gray-900 text-white" role="contentinfo">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      <div className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="sr-only">Site Footer</h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Brand / About */}
          <section aria-labelledby="footer-brand">
            <h3
              id="footer-brand"
              className="mb-4 text-2xl font-light tracking-wide"
            >
              COREMIND THERAPY
            </h3>
            <p className="text-sm leading-relaxed text-gray-300">
              Based in Walnut Creek, California and serving clients statewide
              via telehealth.
            </p>
          </section>

          {/* Contact */}
          <section aria-labelledby="footer-contact">
            <h3 id="footer-contact" className="mb-4 text-lg font-medium">
              Contact
            </h3>

            <address className="space-y-2 not-italic text-sm text-gray-300">
              <p>
                Call or text:{" "}
                <a
                  href={`tel:${phoneE164}`}
                  aria-label={`Call or text ${phoneDisplay}`}
                  className="underline decoration-gray-500 hover:decoration-gray-300"
                >
                  {phoneDisplay}
                </a>
              </p>

              <p>
                Email:{" "}
                <a
                  href={`mailto:${email}`}
                  aria-label={`Email ${email}`}
                  className="underline decoration-gray-500 hover:decoration-gray-300"
                >
                  {email}
                </a>
              </p>

              <p>
                {address.streetAddress}, {address.addressLocality}, California
              </p>

              <p>Telehealth sessions only</p>
            </address>
          </section>
        </div>

        {/* Footer nav */}
        <nav
          aria-label="Footer"
          className="mt-10 flex justify-center border-t border-gray-800 pt-6"
        >
          <ul className="flex flex-wrap justify-center gap-6 text-xs text-gray-400">
            <li>
              <Link href="/about" className="hover:text-gray-200">
                About
              </Link>
            </li>
            <li>
              <Link href="/specialties" className="hover:text-gray-200">
                Specialties
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gray-200">
                Services
              </Link>
            </li>

            <li>
              <Link href="/faqs" className="hover:text-gray-200">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gray-200">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-200">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/california-therapy" className="hover:text-gray-200">
                California
              </Link>
            </li>
            <li>
              <Link href="/therapy" className="hover:text-gray-200">
                Regions
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mt-6 border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-400">
            <small>© {year} CoreMind Therapy. All rights reserved.</small>
          </p>
        </div>
      </div>
    </footer>
  )
}
