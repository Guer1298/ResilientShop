import React from 'react'

const NewsletterBox = () => {

  const onSubmitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
          Stay in the loop
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-sm sm:text-base text-gray-500 leading-relaxed">
          Get product updates, early access, and exclusive offers — delivered
          straight to your inbox.
        </p>

        {/* Form */}
        <form
          onSubmit={onSubmitHandler}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="w-full sm:flex-1 rounded-full border border-gray-300 px-5 py-3 text-sm outline-none transition focus:border-gray-900"
          />

          <button
            type="submit"
            className="w-full sm:w-auto rounded-full bg-black px-8 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Subscribe
          </button>
        </form>

      </div>
    </section>
  )
}

export default NewsletterBox
