import Layout from "../components/Layout"
import Seo from "../components/Seo"

import Image from "next/image"

import siteMetadata from "../siteMetadata"
import { useBranchPicker } from "../components/BranchPickerContext"

export default function HomePage() {
  const branchPicker = useBranchPicker()

  return (
    <Layout>
      <Seo
        title="Hair Salon in Siliguri"
        description="HairrCraftt is a premium unisex & family salon in Siliguri with two locations (Bhanu Nagar and Punjabi Para). Call or WhatsApp to book, or get directions."
      />
      <section className="section">
        <div className="container">
          <div className="hero">
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 0,
                opacity: 0.18,
              }}
            >
              <Image
                src="/images/hero.png"
                alt="HairrCraftt Salon"
                fill
                sizes="100vw"
                priority
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="hero__grid" style={{ position: "relative", zIndex: 1 }}>
              <div>
                <h1 className="hero__title">HairrCraftt Unisex Salon</h1>
                <p className="muted">
                  Premium, minimal, and tailored hair & beauty services in Siliguri.
                </p>
                <div className="hero__cta">
                  <a className="button" href="tel:+919733309111">
                    Call Now
                  </a>
                  <a
                    className="button"
                    href="https://wa.me/919733309111"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </a>
                  <button
                    type="button"
                    className="button"
                    onClick={() => branchPicker.open("directions")}
                    style={{ cursor: "pointer" }}
                  >
                    Directions
                  </button>
                </div>
                <div style={{ marginTop: "1.25rem" }}>
                  <a
                    href="https://www.instagram.com/hairrcraftt/"
                    target="_blank"
                    rel="noreferrer"
                    className="muted"
                  >
                    Follow on Instagram
                  </a>
                </div>
              </div>
              <div className="hero__media">
                <Image
                  src="/images/logo_hairrcraftt.webp"
                  alt="HairrCraftt logo"
                  width={520}
                  height={520}
                  sizes="(max-width: 900px) 60vw, 420px"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="surface" style={{ padding: "1rem" }}>
            <h2 style={{ marginBottom: "0.25rem" }}>Areas of service</h2>
            <p className="muted" style={{ marginTop: 0 }}>
              HairrCraftt is a premium unisex salon in Siliguri. We specialise in hair, beauty, bridal and
              premium nail services.
            </p>

            <div className="cards" style={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
              <div className="card" style={{ background: "white" }}>
                <h3 style={{ marginBottom: "0.5rem" }}>Hair</h3>
                <p className="muted" style={{ margin: 0 }}>
                  Haircuts, styling, spa, treatments, keratin and color services.
                </p>
              </div>
              <div className="card" style={{ background: "white" }}>
                <h3 style={{ marginBottom: "0.5rem" }}>Beauty</h3>
                <p className="muted" style={{ margin: 0 }}>
                  Facials, cleanup, detan, waxing, manicure & pedicure.
                </p>
              </div>
              <div className="card" style={{ background: "white" }}>
                <h3 style={{ marginBottom: "0.5rem" }}>Makeup</h3>
                <p className="muted" style={{ margin: 0 }}>
                  Party makeup, bridal-ready looks and add-ons.
                </p>
              </div>
              <div className="card" style={{ background: "white" }}>
                <h3 style={{ marginBottom: "0.5rem" }}>Nail Art</h3>
                <p className="muted" style={{ margin: 0 }}>
                  Premium nail art, gel polish, nail extensions and related services.
                </p>
              </div>
            </div>

            <div style={{ marginTop: "1rem" }}>
              <p className="muted" style={{ margin: 0 }}>
                Looking for pricing? Explore the full service menu, or open Packages to view pre-bridal and
                grooming combos.
              </p>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.75rem" }}>
                <a className="button" href="/services">
                  View Services
                </a>
                <a className="button" href="/services?tab=packages">
                  View Packages
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cards">
            {(siteMetadata.locations || []).map(location => (
              <div key={location.slug} className="card" style={{ background: "white" }}>
                <h3 style={{ marginBottom: "0.4rem" }}>{location.area}</h3>
                <p className="muted" style={{ margin: 0 }}>
                  {location.rating}★ with {location.ratingsCount}+ ratings
                </p>

                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.75rem" }}>
                  <a className="button" href={`/locations/${location.slug}`}>
                    View Branch
                  </a>
                  <a className="button" href={location.mapUrl} target="_blank" rel="noreferrer">
                    Open in Maps
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cards">
            <div className="card">
              <h3>Hair</h3>
              <p className="muted">
                Cuts, color, texture, treatments, keratin and expert consultations.
              </p>
            </div>
            <div className="card">
              <h3>Beauty</h3>
              <p className="muted">
                Makeup, bridal looks, facials and grooming with a premium finish.
              </p>
            </div>
            <div className="card">
              <h3>Experience</h3>
              <p className="muted">
                Minimal, calm ambience. Clean results. Easy booking and quick support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="surface" style={{ padding: "1rem" }}>
              <Image
                src="/images/insta-single.webp"
                alt="HairrCraftt work"
                width={1100}
                height={800}
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ width: "100%", height: "auto", borderRadius: "12px" }}
              />
            </div>
            <div className="surface" style={{ padding: "1rem" }}>
              <Image
                src="/images/insta-single-2.webp"
                alt="HairrCraftt work"
                width={1100}
                height={800}
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ width: "100%", height: "auto", borderRadius: "12px" }}
              />
            </div>
          </div>
          <div className="button_p">
            <a className="button" href="/gallery">
              View Gallery
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
