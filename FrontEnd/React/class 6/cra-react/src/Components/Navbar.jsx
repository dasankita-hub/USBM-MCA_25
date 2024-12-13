import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (

    <nav>
    <ul className='flex justify-around border-2 border-slate-1 p-2'>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
        <li>
            <Link to="/blog">Blog</Link>
        </li>
        <li>
            <Link to="/errorpage">ErrorPage</Link>
        </li>
    </ul>
    </nav>
  )
}

export default Navbar