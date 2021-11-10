import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home </Link>
      <Link to="/recipes">Recipes</Link>
      <Link to="/tags">Tags</Link>
      <Link to="/about">About</Link>
    </div>
  )
}

export default Navbar
