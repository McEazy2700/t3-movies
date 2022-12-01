import Link from 'next/link'
import React from 'react'

const NavBrand = () => {
  return (
    <Link href='/' className='w-20 md:w-28 h-full max-h-20 object-cover flex items-center'>
      <img className='w-full h-12 object-cover' src='/default.svg' alt='vma logo' loading='lazy'/>
    </Link>
  )
}

export default NavBrand
