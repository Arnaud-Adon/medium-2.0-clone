import React, { ReactElement } from 'react'
import Link from 'next/link'

const Header = (): ReactElement => {
  return (
    <div className="flex">
      <Link href="/">
        <img
          className="w-44 cursor-pointer object-contain"
          src="https://links.papareact.com/yvf"
          alt="Medium logo"
        />
      </Link>
      <div className="hidden items-center space-x-5 md:inline-flex ">
        <h3>About</h3>
        <h3>Contact</h3>
        <h3>Follow</h3>
      </div>
    </div>
  )
}

export default Header
