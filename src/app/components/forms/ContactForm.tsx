"use client"

import { useState } from "react"

type Status =
  | { state: "idle" }
  | { state: "loading" }
  | { state: "success"; message: string }
  | { state: "error"; message: string }

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" })

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus({ state: "loading" })

    const form = e.currentTarget
    const fd = new FormData(form)

    // Required by Web3Forms
    const payload = {
      access_key: process.env.WEB3FORMS_ACCESS_KEY,
      subject: "New contact form submission",
      from_name: String(fd.get("name") || ""),
      // Your fields
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      message: String(fd.get("message") || ""),
      // Honeypot (must be empty)
      botcheck: String(fd.get("botcheck") || ""),
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      })

      const json = await res.json()

      if (res.ok && json?.success) {
        setStatus({
          state: "success",
          message: "Thanks. Your message was sent.",
        })
        form.reset()
      } else {
        setStatus({
          state: "error",
          message: json?.message || "Something went wrong. Please try again.",
        })
      }
    } catch (err) {
      setStatus({
        state: "error",
        message: `Network error: ${err}.`,
      })
    } finally {
      // Hide toast after a few seconds
      setTimeout(() => setStatus({ state: "idle" }), 4000)
    }
  }

  const isSubmitting = status.state === "loading"

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Required hidden access key is set via JSON payload, not here */}

      {/* Honeypot for spam */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Name *
        </label>
        <input
          type="text"
          name="name"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent text-base"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email *
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent text-base"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Phone (optional)
        </label>
        <input
          type="tel"
          name="phone"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent text-base"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          rows={5}
          name="message"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent text-base resize-none"
          placeholder="Tell me a bit about what brings you here today..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-gray-900 text-white py-4 px-6 rounded-md transition-colors text-lg hover:cursor-pointer
          ${
            isSubmitting ? "opacity-60 cursor-not-allowed" : "hover:bg-gray-800"
          }`}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {/* Simple toast area (accessible) */}
      <div aria-live="polite" className="sr-only">
        {status.state === "success" && status.message}
        {status.state === "error" && status.message}
      </div>

      {status.state === "success" && (
        <div className="mt-3 rounded-md bg-green-50 text-green-800 border border-green-200 px-4 py-3">
          {status.message}
        </div>
      )}
      {status.state === "error" && (
        <div className="mt-3 rounded-md bg-red-50 text-red-800 border border-red-200 px-4 py-3">
          {status.message}
        </div>
      )}
    </form>
  )
}
