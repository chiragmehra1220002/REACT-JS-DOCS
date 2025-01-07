import React from 'react'
import { Outlet,Link } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
      {/* <h1>Nav</h1> */}
      <nav>
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About
            </Link></li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
        </ul>
      </nav>

      <center>
      <main>
        <Outlet />
      </main>
      </center>
    </div>
  )
}

export default RootLayout
