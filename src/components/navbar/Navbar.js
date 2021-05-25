import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import "./styles.scss"
import useWindowWidth from "../../utils/custom-hooks/window-width"
import MobileNav from "./mobile-nav/MobileNav"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false)
  const width = useWindowWidth()
  const onMobileMenuClick = () => {
    setShowMobileNav(!showMobileNav)
  }
  return (
    <div className="navbar">
      <div className="navbar__name-logo">
        <span className="navbar__name-logo--logo">
          <p>A</p>
        </span>
        <p className="navbar__name-logo--name">
          Ahsan <span>Zafar</span>
        </p>
      </div>
      {width >= 1024 ? (
        <ul
          className="navbar__list"
          style={{ display: width >= 1024 ? "flex" : "none" }}
        >
          <li className="navbar__list--item">
            <Link>Home</Link>
          </li>
          <li className="navbar__list--item">
            <Link>About</Link>
          </li>
          <li className="navbar__list--item">
            <Link>Resume</Link>
          </li>
          <li className="navbar__list--item">
            <Link>Portfolio</Link>
          </li>
          <li className="navbar__list--item">
            <Link>Blog</Link>
          </li>
          <li className="navbar__list--item">
            <Link>Contact</Link>
          </li>
        </ul>
      ) : (
        <>
          <FontAwesomeIcon
            icon={faBars}
            onClick={onMobileMenuClick}
            className="navbar__menu-icon"
          />
          <div className={showMobileNav ? "d-mobile-nav" : "d-none"}>
            <MobileNav />
          </div>
        </>
      )}
    </div>
  )
}

export default Navbar
