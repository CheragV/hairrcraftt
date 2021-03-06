import React from "react"

import styles from "./styles/newsletter.module.css"

const Newsletter = ({ children }) => (
  <div className={styles.newsletter}>
    <p>Subscribe for updates and loyalty rewards with HairrCraftt!</p>
    <form
      name="newsletter"
      method="POST"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="newsletter" />
      <input type="hidden" name="bot-field" />
      <label htmlFor="email">Email address</label>
      <br />
      <div className={styles.newsletter__input}>
        <input
          className={styles.email}
          type="email"
          id="email"
          name="email"
          aria-label="Email address"
          required
          minLength="4"
          size="10"
          spellCheck="false"
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          title="Invalid email address"
        />
        <input
          type="submit"
          className={styles.button}
          aria-label="Sign Up"
          value="Sign Up"
        />
      </div>
    </form>
  </div>
)

export default Newsletter
