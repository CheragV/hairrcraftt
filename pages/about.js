import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function AboutPage() {
  return (
    <Layout>
      <Seo
        title="About"
        description="HairrCraftt is a premium unisex salon in Siliguri with two locations (Bhanu Nagar and Punjabi Para). Explore our service philosophy, hygiene standards, and booking support."
      />

      <section className="section">
        <div className="container">
          <div className="hero">
            <div className="hero__grid" style={{ position: "relative", zIndex: 1 }}>
              <div>
                <h1 className="hero__title">About HairrCraftt</h1>
                <p className="muted">
                  HairrCraftt is a premium unisex salon in Siliguri focused on clean finishes, modern
                  techniques, and consistent results.
                </p>
              </div>
              <div className="surface" style={{ padding: "1rem" }}>
                <h2>Why clients choose us</h2>
                <div style={{ display: "grid", gap: "0.75rem" }}>
                  <div className="card" style={{ background: "white" }}>
                    <h3 style={{ marginBottom: "0.25rem" }}>Premium services</h3>
                    <p className="muted" style={{ margin: 0 }}>
                      Haircuts, hair treatments, keratin, color, facials, grooming, bridal-ready looks and
                      premium nail services.
                    </p>
                  </div>
                  <div className="card" style={{ background: "white" }}>
                    <h3 style={{ marginBottom: "0.25rem" }}>Hygiene & comfort</h3>
                    <p className="muted" style={{ margin: 0 }}>
                      A calm, minimal space with an emphasis on cleanliness, tools hygiene and client comfort.
                    </p>
                  </div>
                  <div className="card" style={{ background: "white" }}>
                    <h3 style={{ marginBottom: "0.25rem" }}>Easy booking</h3>
                    <p className="muted" style={{ margin: 0 }}>
                      Call or WhatsApp to book. Choose the right branch for directions and faster support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="surface" style={{ padding: "1rem", marginTop: "1rem" }}>
            <h2 style={{ marginBottom: "0.5rem" }}>Our locations</h2>
            <p className="muted" style={{ marginTop: 0 }}>
              We serve Siliguri from two convenient branches: Bhanu Nagar and Punjabi Para.
            </p>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              <a className="button" href="/locations/bhanu-nagar">
                Bhanu Nagar
              </a>
              <a className="button" href="/locations/punjabi-para">
                Punjabi Para
              </a>
              <a className="button" href="/services">
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
