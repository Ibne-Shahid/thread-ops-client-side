import React from 'react'

const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-[200px]">
      <div className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}

export default Spinner
