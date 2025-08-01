import React from 'react'
import { ButtonProps } from '@/interfaces'
function Button({size, shape} : ButtonProps) {
  return (
    <>
        <button className={size + " " + shape}>{size}</button>
    </>
  )
}

export default Button