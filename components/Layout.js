import React from "react"

import siteMetadata from "../siteMetadata"

import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <>
      <Header menuLinks={siteMetadata.siteMap} />
      <div
        style={{
          margin: `0 auto`,
          padding: `0px`,
          minHeight: "70vh",
        }}
      >
        <main>{children}</main>
      </div>
      <Footer menuLinks={siteMetadata.siteMap} />
    </>
  )
}
