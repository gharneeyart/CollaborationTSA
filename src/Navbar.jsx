import React from 'react'

const Navbar = () => {
  return (
    <div>
      <h1>LOGO</h1>

      <div>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Skills</Link>
        <Link>Contact</Link>
      </div>

      <div>
        <button>Sign In </button>
        <button>Sign Up </button>

      </div>
    </div>
  )
}

export default Navbar
