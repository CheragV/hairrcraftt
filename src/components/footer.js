import PropTypes from "prop-types"
import React from "react"

import Link from "./link"

import styles from "./styles/footer.module.css"

const Footer = ({ menuLinks }) => (
  <footer>
    <div className="frame_two_columns">
      <div>
        <p className={styles.address}>
          <a href="https://www.google.com/maps/dir//26.7333978,88.4286345/@26.7334948,88.4285332,21z/data=!4m2!4m1!3e0">
            <span className={styles.title}>HairrCraftt</span>
            <br />
            Green View Apartment
            <br />
            Bhanu Nagar
            <br />
            Siliguri, West Bengal, 734001
          </a>
        </p>
        <div className={styles.contact}>
          <p>
            <span className={styles.title}>Contact HairrCraftt</span>
            <br />
            <span itemProp="telephone">
              <a href="tel:+919832322844">9832322844</a>
            </span>
            <br />
            <a href="mailto:tisha@brujasalon.com">tisha@brujasalon.com</a>
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
              {/* <td>10:00 AM - 5:00 PM</td> */}
            </tr>
            <tr style={new Date().getDay() === 1 ? { fontWeight: 600 } : {}}>
              <td>Monday</td>
              {/* <td>Closed</td> */}
            </tr>
            <tr style={new Date().getDay() === 2 ? { fontWeight: 600 } : {}}>
              <td>Tuesday</td>
              {/* <td>Closed</td> */}
            </tr>
            <tr style={new Date().getDay() === 3 ? { fontWeight: 600 } : {}}>
              <td>Wednesday</td>
              {/* <td>10:00 AM - 8:00 PM</td> */}
            </tr>
            <tr style={new Date().getDay() === 4 ? { fontWeight: 600 } : {}}>
              <td>Thursday</td>
              {/* <td>12:00 PM - 8:00 PM</td> */}
            </tr>
            <tr style={new Date().getDay() === 5 ? { fontWeight: 600 } : {}}>
              <td>Friday</td>
              {/* <td>10:00 AM - 8:00 PM</td> */}
            </tr>
            <tr style={new Date().getDay() === 6 ? { fontWeight: 600 } : {}}>
              <td>Saturday</td>
              {/* <td>9:00 AM - 5:00 PM</td> */}
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

export default Footer
