import React from "react"

import Link from "./Link"

import siteMetadata from "../siteMetadata"

import styles from "../src/components/styles/footer.module.css"

export default function Footer({ menuLinks }) {
  return (
    <footer className={styles.footer}>
      <div className="frame_two_columns">
        <div>
          <p className={styles.address}>
            <span className={styles.title}>HairrCraftt</span>
            <br />
            {siteMetadata.locations?.map(location => (
              <React.Fragment key={location.name}>
                <a href={location.mapUrl} target="_blank" rel="noreferrer">
                  {location.name}
                </a>
                <br />
              </React.Fragment>
            ))}
            {siteMetadata.address?.locality}, {siteMetadata.address?.region}, {siteMetadata.address?.postalCode}
          </p>
          <div className={styles.contact}>
            <p>
              <span className={styles.title}>Contact HairrCraftt</span>
              <br />
              <span itemProp="telephone">
                <a href={`tel:${siteMetadata.phone}`}>{siteMetadata.phone?.replace(/^\+91/, "")}</a>
              </span>
              <br />
            </p>
          </div>
        </div>
        <div className={styles.hours}>
          <span className={styles.title}>Hours</span>
          <table>
            <tbody>
              <tr style={new Date().getDay() === 0 ? { fontWeight: 600 } : {}}>
                <td>Sunday</td>
                <td
                  rowSpan={7}
                  style={{ verticalAlign: `middle`, fontWeight: 600 }}
                >
                  Open Monday to Sunday
                  <br />
                  10:00 AM - 7:00 PM
                </td>
              </tr>
              <tr style={new Date().getDay() === 1 ? { fontWeight: 600 } : {}}>
                <td>Monday</td>
              </tr>
              <tr style={new Date().getDay() === 2 ? { fontWeight: 600 } : {}}>
                <td>Tuesday</td>
              </tr>
              <tr style={new Date().getDay() === 3 ? { fontWeight: 600 } : {}}>
                <td>Wednesday</td>
              </tr>
              <tr style={new Date().getDay() === 4 ? { fontWeight: 600 } : {}}>
                <td>Thursday</td>
              </tr>
              <tr style={new Date().getDay() === 5 ? { fontWeight: 600 } : {}}>
                <td>Friday</td>
              </tr>
              <tr style={new Date().getDay() === 6 ? { fontWeight: 600 } : {}}>
                <td>Saturday</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="frame_two_columns"></div>
      <div className="frame_one_column">
        <div className={styles.sitemap}>
          <ul>
            {menuLinks.map(link => (
              <li key={link.name}>
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
