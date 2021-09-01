import React from "react"
import "../assets/css/main.css"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Sidebar from "../components/Sidebar"
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
