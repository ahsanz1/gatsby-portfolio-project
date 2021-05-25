import React from "react"
import "./styles.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__list">
        <li className="footer__list--item">Instagram</li>
        <li className="footer__list--item">Github</li>
        <li className="footer__list--item">LinkedIn</li>
      </ul>
      <p className="footer__bottom-text">© 2021 All rights reserved.</p>
    </footer>
  )
}

export default Footer
