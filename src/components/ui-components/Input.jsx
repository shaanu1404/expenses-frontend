import React from 'react'

const Input = ({ className, ...props }) => {
    return <input
        className={`w-full border border-gray-700/60 bg-gray-800 text-sm text-white px-3 py-2 rounded 
        focus:outline-none focus:border-blue-400 
        placeholder:text-gray-600 placeholder:text-sm 
        disabled:bg-gray-700 disabled:cursor-not-allowed ${className}`}
        {...props}
    />
}

export default Input