import React from "react"

import SlideMenu from "./SlideMenu"
import Nav from "./Nav"

import Image from "next/image"

import styles from "../src/components/styles/header.module.css"

export default function Header({ menuLinks }) {
  return (
    <header className={styles.header}>
      <div className={styles.header__slide}>
        <SlideMenu menuLinks={menuLinks} />
      </div>
      <div className={styles.header__logo}>
        <a href="/">
          <Image
            src="/images/logo_hairrcraftt.webp"
            alt="HairrCraftt"
            width={200}
            height={60}
            priority
            style={{ height: "44px", width: "auto" }}
          />
        </a>
      </div>
      <div className={styles.header__menu}>
        <Nav menuLinks={menuLinks} />
      </div>
    </header>
  )
}
