import React from 'react'

const Hero = () => {
  return (
    <section className="relative w-full md:h-[50vh] lg:h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('/hero.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-6 py-8 space-y-6">
        <h1 className="text-xl md:text-4xl font-extrabold tracking-tight uppercase md:mt-24">
          Effortless Garment Management at Your Fingertips
        </h1>
        <p className="md:text-xl max-w-lg">
          Streamline your garment production and inventory management with our advanced platform.
        </p>
        <div className="flex space-x-4">
          <a
            href="#get-started"
            className="btn btn-primary text-white py-3 px-6 text-lg font-semibold rounded-lg hover:bg-warning-focus transition-all duration-300"
          >
            Get Started
          </a>
          <a
            href="#sell"
            className="btn btn-secondary text-white py-3 px-6 text-lg font-semibold rounded-lg hover:bg-primary-focus transition-all duration-300"
          >
            View Collection
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
