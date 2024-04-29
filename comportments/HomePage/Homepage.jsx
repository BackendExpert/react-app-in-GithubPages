import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
        <h1 className="text-red-500 font-bold text-2xl">THis is the Home Pages</h1>
        <p>our Products</p>
        <Link to={'/Products'}>
            View our Products
        </Link>
    </div>
  )
}

export default Homepage