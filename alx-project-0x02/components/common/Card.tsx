import React from 'react'
// import {CardProps} from '@/interfaces'
import { type CardProps } from '@/interfaces'
function Card({title, content}: CardProps) {
  return (
    <>
    <div className="p-4 border rounded shadow-md bg-white">
      <h1 className="text-xl font-bold mb-2">Card</h1>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>

    </>
  )
}

export default Card