import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
           <ul class="nav nav-pills">
  <li class="nav-item">
    <Link class="nav-link" to="/home">Home</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/contact">Contact</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/blogs">Blogs</Link>
  </li>
</ul>
        </div>
    )
}
