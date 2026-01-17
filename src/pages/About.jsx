import React from 'react'

const About = () => {
  return (
    <div className="w-full text-gray-900">

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-28 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Built to endure.
        </h1>
        <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
          Resilient is more than training wear.  
          It’s a reminder of who you become every time you don’t quit.
        </p>
      </section>

      {/* Statement */}
      <section className="w-full bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl font-medium tracking-tight">
              Strength starts from within
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              We design premium training shirts for people who show up —
              even when motivation is gone.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Comfortable. Functional. Minimal.
              So nothing distracts you from your next rep,
              your next mile, your next breakthrough.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
              alt="Training mindset"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-6 py-28">
        <h2 className="text-3xl font-medium text-center tracking-tight">
          What we stand for
        </h2>

        <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-12">
          
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Resilience</h3>
            <p className="text-gray-600 leading-relaxed">
              Progress isn’t linear. Discipline beats motivation.
              We build for the days when it’s hard.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium">Comfort in motion</h3>
            <p className="text-gray-600 leading-relaxed">
              Soft, breathable fabrics that move with your body —
              not against it.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium">Premium simplicity</h3>
            <p className="text-gray-600 leading-relaxed">
              No noise. No excess.
              Just clean design and performance you can feel.
            </p>
          </div>

        </div>
      </section>

      {/* Mission */}
      <section className="w-full bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-28 text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
            Our mission
          </h2>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            To empower people through premium training wear —
            clothing that supports the body,
            strengthens the mindset,
            and reminds you why you started.
          </p>
        </div>
      </section>

      {/* Closing */}
      <section className="max-w-6xl mx-auto px-6 py-28 text-center">
        <h2 className="text-3xl font-medium tracking-tight">
          Wear your mindset
        </h2>
        <p className="mt-6 text-gray-500 max-w-2xl mx-auto">
          Resilient isn’t about looking strong.  
          It’s about becoming stronger — every single day.
        </p>
      </section>

    </div>
  )
}

export default About
