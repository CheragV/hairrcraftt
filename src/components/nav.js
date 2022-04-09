import React from "react"

import Link from "./link"

import styles from "./styles/nav.module.css"

const Nav = ({ menuLinks }) => (
  <nav
    style={{
      display: `flex`,
      flexDirection: "flex-wrap",
      // gridTemplateColumns: `auto min-content`,
      alignItems: `center`,
      justifyItems: `center`,
    }}
  >
    <ul className={styles.header__menu__links}>
      {menuLinks.map(link => {
        if (link.name !== "Home" && link.name !== "Book Now") {
          return (
            <li key={link.name}>
              <Link to={link.link}>{link.name}</Link>
            </li>
          )
        } else return null
      })}
    </ul>
    <div className={styles.header__menu__book}>
      <a href="tel:9733371666" className="button">
        📞<span className="call_text">HairrCraftt</span>
      </a>
    </div>
  </nav>
)

export default Nav
