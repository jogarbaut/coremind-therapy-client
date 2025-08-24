export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-light mb-4 tracking-wide">
              COREMIND THERAPY
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Where you will find the courage to embrace what makes you, you.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Phone: (925) 236-0295</p>
              <p>Email: kjones@coremind-therapy.com</p>
              <p>Telehealth sessions available</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 CoreMind Therapy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
