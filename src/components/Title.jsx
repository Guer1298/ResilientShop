import React from 'react'

const Title = ({ text1, text2 }) => {
  return (
    <div className="flex items-center justify-center gap-4 mb-4">
      
      {/* Text */}
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
        <span className="text-gray-400 font-normal">
          {text1}
        </span>{' '}
        {text2}
      </h2>

      {/* Divider */}
      <span className="hidden sm:block w-10 h-px bg-gray-300"></span>
    </div>
  )
}

export default Title
