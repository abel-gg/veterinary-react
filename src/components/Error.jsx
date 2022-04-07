import { React } from 'react'

function Error({ children }) {
  return (
    <div className="bg-red-800 text-white text-center p-3 uppercase text-bold rounded-md">
      {children}
    </div>
  )
}

export default Error
