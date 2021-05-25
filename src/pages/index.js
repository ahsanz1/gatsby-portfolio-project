import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout/Layout"
import "../styles/index.scss"

export default function Home() {
  return (
    <Layout>
      <div className="hero-component">
        <div className="hero-component__img-section">
          <div className="hero-component__img-section--img-container">
            <img src="img-1.jpg"></img>
          </div>
        </div>
        <div className="hero-component__text-section">
          <p>MERN Stack Developer</p>
          <p>Ahsan Zafar</p>
          <p>
            Aliquip eiusmod quis officia velit reprehenderit ex anim occaecat
            exercitation excepteur excepteur ad non. Reprehenderit deserunt
            culpa qui fugiat do. Fugiat elit fugiat nostrud laboris dolor cillum
            adipisicing adipisicing.
          </p>
          <div className="hero-component__text-section--btn-section">
            <Link>Download CV</Link>
            <Link>
              <span>Contact</span>
              <FontAwesomeIcon icon={faLinkedin} size="2x" />{" "}
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
