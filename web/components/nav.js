import React, { useState } from 'react'
import {NavLink} from './navLink'
import { useRouter } from "next/router";

export default function Nav () {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  const router = useRouter();

  return (
    <div className='
      absolute
      top-7
      left-5
      md:static
      w-3/4
      z-10
      mx-auto
      m-4
      md:flex
      md:justify-between
      md:px-4
      md:py-3
      md:items-center
    '>
      <div className='
        flex
        justify-between
        px-4
        py-3
        md:p-0
      '>
        <div className='md:hidden'>
          <button
            type='button'
            onClick={handleClick}
            className='
              block absolute
              left-0
              text-gray-700
              focus:outline-none
              focus:text-gray-500
              z-50'
            >
            <svg className='h-7 w-7' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                }
            </svg>
          </button>
        </div>
      </div>

      <div
        className={
          `bg-ghostwhite
            rounded-lg
            shadow-xl
            md:rounded-none
            md:shadow-none
            h-full
            md:h-auto
            -m-4
            flex
            justify-between
            flex-col
            md:flex
            md:flex-row
            md:mx-auto
            md:p-0 ` + (isOpen ? 'block' : 'hidden')}>
        <NavLink href="/home" exact>
          Home
        </NavLink>
        <NavLink href="/about" exact>
          About
        </NavLink>
        <NavLink href="/items">
          Item Pricing
        </NavLink>
        <NavLink href="/gallery">
          Gallery
        </NavLink>
        <NavLink href="/services" exact>
          Services
        </NavLink>
        <NavLink href="/packages" exact>
          Package Prices
        </NavLink>
        <NavLink href="/contact" exact>
          Contact
        </NavLink>
      </div>
    </div>
  )
}
