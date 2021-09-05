import React from "react"
import "../assets/css/main.css"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Sidebar from "../components/Sidebar"
import { useGlobalContext } from "./Context"
const Layout = ({ children }) => {
  const { render } = useGlobalContext()
  return (
    <>
      {!render ? (
        <div className="preloader"></div>
      ) : (
        <>
          <Navbar />
          <Sidebar />
          {children}
          <Footer />
        </>
      )}
    </>
  )
}

export default Layout
