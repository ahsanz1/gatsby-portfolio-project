import React from "react"
import Footer from "../footer/Footer"
import Navbar from "../navbar/Navbar"
import "./styles.scss"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar></Navbar>
      <div>{children}</div>
      <Footer></Footer>
    </div>
  )
}

export default Layout
