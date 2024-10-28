import React, { useState } from 'react'
import Link from './Link/Link';
import { RiMenu2Fill } from "react-icons/ri";
import { CgClose } from "react-icons/cg";

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/profile', name: 'Profile' }
      ];

  return (
    <nav className='bg-purple-500 p-5'> 
        <div className='md:hidden text-2xl' onClick={()=> setOpen(!open)} >
            {
                open===true?<CgClose  />:<RiMenu2Fill className='' />
            }
        </div>
      <ul className={`md:flex duration-1000 bg-purple-500 absolute md:static
      ${open? 'top-16' : '-top-60' }
        `}>
      {
            routes.map(route=> <Link key={route.id} route={route}></Link>)
        }
      </ul>

    </nav>
  )
}
