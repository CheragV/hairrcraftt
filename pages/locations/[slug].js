import React from "react"

import Layout from "../../components/Layout"
import Seo from "../../components/Seo"

import siteMetadata from "../../siteMetadata"

export default function LocationPage({ location }) {
  const resolvedLocation = location

  if (!resolvedLocation) {
    return (
      <Layout>
        <Seo title="Location" noIndex />
        <section className="section">
          <div className="container">
            <div className="surface" style={{ padding: "1rem" }}>
              <h1>Location not found</h1>
              <p className="muted">Please choose a branch from the Contact page.</p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }

  const whatsappText = encodeURIComponent(
    `Hi HairrCraftt, I want to book an appointment at ${resolvedLocation.area}.`
  )

  return (
    <Layout>
      <Seo
        title={`${resolvedLocation.area} Salon`}
        description={`${resolvedLocation.name}. Call or WhatsApp to book, or get directions on Google Maps.`}
      />

      <section className="section">
        <div className="container">
          <div className="hero">
            <div className="hero__grid" style={{ position: "relative", zIndex: 1 }}>
              <div>
                <h1 className="hero__title">{resolvedLocation.area}</h1>
                <p className="muted">{resolvedLocation.name}</p>

                <div className="hero__cta">
                  <a className="button" href={`tel:${siteMetadata.phone}`}>
                    Call
                  </a>
                  <a
                    className="button"
                    href={`https://wa.me/${siteMetadata.whatsapp}?text=${whatsappText}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </a>
                  <a
                    className="button"
                    href={resolvedLocation.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Directions
                  </a>
                </div>

                <div style={{ marginTop: "1rem" }}>
                  <a
                    href={resolvedLocation.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      textDecoration: "none",
                      border: "1px solid var(--border)",
                      borderRadius: 999,
                      padding: "0.4rem 0.75rem",
                      background: "rgba(196, 139, 106, 0.12)",
                      fontWeight: 700,
                      color: "var(--text-color)",
                      display: "inline-block",
                    }}
                  >
                    {resolvedLocation.rating}★ ({resolvedLocation.ratingsCount} ratings) on Google
                  </a>
                </div>
              </div>

              <div className="surface" style={{ padding: "1rem" }}>
                <h2>Quick links</h2>
                <div style={{ display: "grid", gap: "0.5rem" }}>
                  <a href={resolvedLocation.mapUrl} target="_blank" rel="noreferrer">
                    Open in Google Maps
                  </a>
                  <a href="/services">View services</a>
                  <a href="/gallery">View work</a>
                  <a href="/contact">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  const slug = params?.slug

  const location = (siteMetadata.locations || []).find(l => l.slug === slug) || null

  return {
    props: {
      location,
    },
  }
}
