import Layout from "../components/Layout"
import Seo from "../components/Seo"

import Image from "next/image"

import siteMetadata from "../siteMetadata"
import { useBranchPicker } from "../components/BranchPickerContext"

export default function Contact() {
  const branchPicker = useBranchPicker()

  return (
    <Layout>
      <Seo
        title="Contact"
        description="Call or WhatsApp HairrCraftt to book an appointment. Choose a branch (Bhanu Nagar or Punjabi Para) for directions in Siliguri."
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
                <h1 className="hero__title">Contact</h1>
                <p className="muted">
                  Book an appointment, get directions, or ask about services.
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

                <div style={{ marginTop: "1.5rem" }} className="muted">
                  {(siteMetadata.locations || []).map((location, idx) => (
                    <div key={location.name} style={idx ? { marginTop: "1rem" } : undefined}>
                      <div>
                        <strong>{location.name}</strong>
                      </div>
                      <div>
                        <a href={location.mapUrl} target="_blank" rel="noreferrer">
                          Open in Google Maps
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hero__media">
                <Image
                  src="/images/logo_hairrcraftt.webp"
                  alt="HairrCraftt"
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
    </Layout>
  )
}
