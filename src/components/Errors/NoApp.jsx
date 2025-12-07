import React from 'react'
import { Link } from 'react-router'

const NoApp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-5">
      <div className="text-6xl mb-5 animate-bounce">
        😔
      </div>
      <h2 className="text-3xl font-bold text-gray-800 mb-2">
        Oops! Nothing here
      </h2>
      <p className="text-gray-500 mb-4">
        We couldn't find any apps or products to show. Try refreshing or check back later.
      </p>
      <Link to="/"><button className="px-6 py-2 bg-primary text-white font-semibold rounded-lg shadow hover:bg-sky-700 transition-colors">
        Go Back Home
      </button></Link>
    </div>
  )
}

export default NoApp
