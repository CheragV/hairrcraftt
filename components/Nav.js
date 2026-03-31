import React from "react"

import Link from "./Link"

import { useBranchPicker } from "./BranchPickerContext"

import styles from "../src/components/styles/nav.module.css"

export default function Nav({ menuLinks }) {
  const branchPicker = useBranchPicker()

  return (
    <nav
      style={{
        display: `flex`,
        flexDirection: "flex-wrap",
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
          }
          return null
        })}
      </ul>
      <div className={styles.header__menu__book}>
        <button
          type="button"
          className="button"
          onClick={() => branchPicker.open("whatsapp")}
          style={{ cursor: "pointer" }}
        >
          WhatsApp
        </button>
        <button
          type="button"
          className="button"
          onClick={() => branchPicker.open("directions")}
          style={{ cursor: "pointer" }}
        >
          Directions
        </button>
        <a href="tel:+919733309111" className="button">
          Call
        </a>
      </div>
    </nav>
  )
}
