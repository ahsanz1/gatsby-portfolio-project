import { Link } from "gatsby"
import React from "react"
import "./styles.scss"

const MobileNav = () => {
  return (
    <div className="mobile-nav">
      <ul className="mobile-nav__list">
        <li className="mobile-nav__list--item">
          <Link>Home</Link>
        </li>
        <li className="mobile-nav__list--item">
          <Link>About</Link>
        </li>
        <li className="mobile-nav__list--item">
          <Link>Resume</Link>
        </li>
        <li className="mobile-nav__list--item">
          <Link>Portfolio</Link>
        </li>
        <li className="mobile-nav__list--item">
          <Link>Blog</Link>
        </li>
        <li className="mobile-nav__list--item">
          <Link>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default MobileNav
