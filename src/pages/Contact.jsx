import React from 'react'

const Contact = () => {
  return (
    <div className="w-full text-gray-900">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-28 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Let’s talk.
        </h1>
        <p className="mt-6 text-lg text-gray-500 max-w-xl mx-auto">
          Whether you have a question, feedback, or just want to say hello —
          we’re here and listening.
        </p>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto px-6 pb-32">
        <div className="bg-gray-50 rounded-3xl p-10 md:p-14">

          <form className="space-y-8">

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First name"
                className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 focus:outline-none focus:border-black transition"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 focus:outline-none focus:border-black transition"
              />
            </div>

            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 focus:outline-none focus:border-black transition"
            />

            <textarea
              rows="4"
              placeholder="Your message"
              className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 focus:outline-none focus:border-black transition resize-none"
            />

            <div className="pt-6">
              <button
                type="submit"
                className="bg-black text-white px-10 py-3 rounded-full text-sm tracking-wide hover:bg-gray-900 transition"
              >
                Send message
              </button>
            </div>

          </form>

        </div>
      </section>

      {/* Contact Info */}
      <section className="max-w-5xl mx-auto px-6 pb-28 text-center">
        <p className="text-sm text-gray-500">
          Prefer email?
        </p>
        <p className="mt-2 text-lg font-medium">
          support@resilientwear.com
        </p>
      </section>

      {/* Closing */}
      <section className="w-full bg-black text-white">
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-medium tracking-tight">
            Built with care
          </h2>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Every message matters.  
            Every detail counts.
          </p>
        </div>
      </section>

    </div>
  )
}

export default Contact
