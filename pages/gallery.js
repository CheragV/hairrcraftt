import Layout from "../components/Layout"
import Seo from "../components/Seo"

import { useState } from "react"
import Image from "next/image"
import styles from "../src/components/styles/gallery.module.css"

export default function Gallery() {
  const [option, setOption] = useState(1)

  const images =
    option === 1
      ? [
          "/images/ambience/image1.webp",
          "/images/ambience/image2.webp",
          "/images/ambience/image3.webp",
          "/images/ambience/image4.webp",
        ]
      : [
          "/images/insta-images/insta1.webp",
          "/images/insta-images/insta2.webp",
          "/images/insta-images/insta3.webp",
          "/images/insta-images/insta4.webp",
          "/images/insta-images/insta5.webp",
          "/images/insta-images/insta6.webp",
          "/images/insta-images/insta7.webp",
          "/images/insta-images/insta8.webp",
          "/images/insta-images/insta9.webp",
          "/images/insta-images/insta10.webp",
          "/images/insta-images/insta11.webp",
          "/images/insta-images/insta12.webp",
        ]

  return (
    <Layout>
      <Seo
        title="Gallery"
        description="Explore HairrCraftt salon ambience and hair & beauty work in Siliguri. View photos from Bhanu Nagar and Punjabi Para branches."
      />
      <section className="section">
        <div className="container">
          <div className="surface" style={{ padding: "1rem" }}>
            <div className={styles.container}>
              <div className={styles.options}>
                <button
                  type="button"
                  className={option === 1 ? styles.o_selected : undefined}
                  onClick={() => setOption(1)}
                >
                  Ambience
                </button>
                <button
                  type="button"
                  className={option === 2 ? styles.o_selected : undefined}
                  onClick={() => setOption(2)}
                >
                  Work
                </button>
              </div>
              <div className={styles.ambience}>
                {images.map(src => (
                  <div
                    key={src}
                    style={{
                      position: "relative",
                      width: "min(300px, calc(100vw - 3rem))",
                      aspectRatio: "2 / 3",
                      margin: 4,
                      borderRadius: 12,
                      overflow: "hidden",
                      border: "1px solid var(--border)",
                      background: "white",
                    }}
                  >
                    <Image
                      src={src}
                      alt="Gallery"
                      fill
                      sizes="(max-width: 720px) 100vw, 300px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
