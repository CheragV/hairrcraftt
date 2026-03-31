import React, { useMemo, useState } from "react"

import Link from "./Link"

import styles from "../src/components/styles/footer.module.css"

export default function SlideMenu({ menuLinks }) {
  const [open, setOpen] = useState(false)

  const panelStyle = useMemo(
    () => ({
      position: "fixed",
      top: 0,
      left: 0,
      height: "100vh",
      width: 300,
      maxWidth: "90vw",
      background: "white",
      transform: open ? "translateX(0)" : "translateX(-110%)",
      transition: "transform 200ms ease",
      zIndex: 50,
      padding: "1rem",
      boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
      overflowY: "auto",
    }),
    [open]
  )

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
        style={{
          background: "transparent",
          border: 0,
          fontSize: 24,
          padding: "0.75rem 1rem",
          cursor: "pointer",
        }}
      >
        ☰
      </button>
      {open ? (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.35)",
            zIndex: 40,
          }}
        />
      ) : null}
      <div style={panelStyle}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            style={{
              background: "transparent",
              border: 0,
              fontSize: 24,
              padding: "0.25rem 0.5rem",
              cursor: "pointer",
            }}
          >
            ×
          </button>
        </div>
        <ul style={{ padding: 0, margin: 0 }}>
          {menuLinks.map(link => (
            <li key={link.name} style={{ padding: "0.75rem 0" }}>
              <Link to={link.link} onClick={() => setOpen(false)}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <hr />
        <div className={styles.hours}>
          <span className={styles.title}>Hours</span>
          <table>
            <tbody>
              <tr style={new Date().getDay() === 0 ? { fontWeight: 600 } : {}}>
                <td>Sunday</td>
                <td rowSpan={7} style={{ verticalAlign: `middle`, fontWeight: 600 }}>
                  Open Monday to Sunday
                  <br />
                  contact stylist to
                  <br />
                  make an appointment.
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
    </>
  )
}
