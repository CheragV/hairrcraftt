import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

import "typeface-josefin-sans"

import Header from "./header"
import Footer from "./footer"
import "./styles/layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            siteMap {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <meta name="apple-mobile-web-app-capable" content="yes" />
        </Helmet>
        <Header
          siteTitle={data.site.siteMetadata.title}
          menuLinks={data.site.siteMetadata.siteMap}
        />
        <div
          style={{
            margin: `0 auto`,
            padding: `0px`,
            minHeight: '70vh'
          }}
        >
          <main>{children}</main>
        </div>
        <Footer menuLinks={data.site.siteMetadata.siteMap} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
