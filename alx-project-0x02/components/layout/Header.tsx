import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <>
        <nav className='justify-between gap-1'>
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/posts">Posts</Link>
        </nav>
    </>
  )
}

export default Header