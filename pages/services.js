import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import Image from "next/image"
import { useRouter } from "next/router"

import servicesData from "../services.json"

import { useBranchPicker } from "../components/BranchPickerContext"

export default function Services() {
  const phone = "+919733309111"
  const whatsapp = "919733309111"

  const branchPicker = useBranchPicker()

  const router = useRouter()

  const [tab, setTab] = React.useState("women")
  const [query, setQuery] = React.useState("")

  React.useEffect(() => {
    if (!router?.isReady) return
    const nextTab = String(router.query?.tab || "").toLowerCase()
    if (nextTab === "women" || nextTab === "men" || nextTab === "packages") {
      setTab(nextTab)
    }
  }, [router?.isReady, router?.query?.tab])

  const setTabAndUrl = React.useCallback(
    nextTab => {
      setTab(nextTab)
      if (!router?.isReady) return
      const q = { ...router.query, tab: nextTab }
      router.push({ pathname: router.pathname, query: q }, undefined, { shallow: true })
    },
    [router]
  )

  const normalizedQuery = query.trim().toLowerCase()

  const tabModel = React.useMemo(() => {
    if (tab === "men") {
      return {
        title: "Men Services",
        notes: [],
        categories: servicesData.menServices.categories,
      }
    }

    if (tab === "packages") {
      return {
        title: "Pre‑Bridal Packages",
        notes: servicesData.preBridalPackages?.note ? [servicesData.preBridalPackages.note] : [],
        categories: [],
      }
    }

    return {
      title: "Women Services",
      notes: servicesData.womenServices.notes || [],
      categories: servicesData.womenServices.categories,
    }
  }, [tab])

  const filteredCategories = React.useMemo(() => {
    if (tab === "packages") return []
    if (!normalizedQuery) return tabModel.categories

    return tabModel.categories
      .map(category => {
        const categoryName = (category.name || "").toLowerCase()
        if (categoryName.includes(normalizedQuery)) {
          return { ...category, items: category.items || [] }
        }

        const items = (category.items || []).filter(item => {
          const name = (item.service || "").toLowerCase()
          const note = (item.nonMemberPriceNote || "").toLowerCase()
          const range = (item.nonMemberPriceRange || "").toLowerCase()
          return (
            name.includes(normalizedQuery) ||
            note.includes(normalizedQuery) ||
            range.includes(normalizedQuery)
          )
        })

        return { ...category, items }
      })
      .filter(category => {
        const categoryName = (category.name || "").toLowerCase()
        if (categoryName.includes(normalizedQuery)) return true
        return (category.items || []).length > 0
      })
  }, [normalizedQuery, tab, tabModel.categories])

  const categoryList = tab === "packages" ? [] : filteredCategories

  function toId(value) {
    return String(value)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  }

  function formatPrice(item) {
    if (item?.nonMemberPriceRange) return `₹${item.nonMemberPriceRange}`
    if (item?.nonMemberPriceNote) return item.nonMemberPriceNote
    if (typeof item?.nonMemberPrice === "number") return `₹${item.nonMemberPrice}`
    return "—"
  }

  function formatMember(item) {
    if (typeof item?.memberPrice === "number") return `₹${item.memberPrice}`
    return null
  }

  function onJumpToCategory(e) {
    const id = e.target.value
    if (!id) return
    const el = document.getElementById(id)
    if (el && typeof el.scrollIntoView === "function") {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <Layout>
      <Seo
        title="Services"
        description="Explore HairrCraftt services and pricing for women and men, plus pre-bridal packages. Call or WhatsApp to book and choose a branch for directions."
      />
      <section className="section">
        <div className="container">
          <div className="hero">
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 0,
                opacity: 0.22,
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
                <h1 className="hero__title">{tabModel.title}</h1>
                <p className="muted">Explore services, compare prices, and book instantly.</p>
                <div className="hero__cta">
                  <a className="button" href={`tel:${phone}`}>
                    Call to Book
                  </a>
                  <a
                    className="button"
                    href={`https://wa.me/${whatsapp}`}
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

      <section className="section">
        <div className="container">
          <div className="surface" style={{ padding: "1rem" }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                <button
                  type="button"
                  className="button"
                  onClick={() => {
                    setTabAndUrl("women")
                    setQuery("")
                  }}
                  style={{
                    borderColor: tab === "women" ? "var(--accent-strong)" : "var(--border)",
                    background: tab === "women" ? "rgba(196, 139, 106, 0.18)" : undefined,
                  }}
                >
                  Women
                </button>
                <button
                  type="button"
                  className="button"
                  onClick={() => {
                    setTabAndUrl("men")
                    setQuery("")
                  }}
                  style={{
                    borderColor: tab === "men" ? "var(--accent-strong)" : "var(--border)",
                    background: tab === "men" ? "rgba(196, 139, 106, 0.18)" : undefined,
                  }}
                >
                  Men
                </button>
                <button
                  type="button"
                  className="button"
                  onClick={() => {
                    setTabAndUrl("packages")
                    setQuery("")
                  }}
                  style={{
                    borderColor: tab === "packages" ? "var(--accent-strong)" : "var(--border)",
                    background: tab === "packages" ? "rgba(196, 139, 106, 0.18)" : undefined,
                  }}
                >
                  Packages
                </button>
              </div>

              {tab !== "packages" ? (
                <input
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search services…"
                  style={{
                    width: "min(420px, 100%)",
                    padding: "14px 14px",
                    borderRadius: 12,
                    border: "1px solid var(--border)",
                    background: "rgba(255, 255, 255, 0.9)",
                  }}
                />
              ) : null}
            </div>

            {tab !== "women" && tabModel.notes?.length ? (
              <div style={{ marginTop: "1rem" }}>
                {tabModel.notes.map(note => (
                  <p key={note} className="muted" style={{ margin: 0, padding: "0.25rem 0" }}>
                    {note}
                  </p>
                ))}
              </div>
            ) : null}

            {tab === "packages" ? (
              <div style={{ marginTop: "1.5rem", display: "grid", gap: "1rem" }}>
                <div className="card" style={{ background: "white" }}>
                  <h3>Women Packages</h3>
                  <div style={{ display: "grid", gap: "0.75rem" }}>
                    {(servicesData.preBridalPackages?.women || []).map(pkg => (
                      <details key={pkg.name} className="card" style={{ background: "rgba(255,255,255,0.72)" }}>
                        <summary style={{ cursor: "pointer", fontWeight: 600 }}>
                          {pkg.name} — Offer {pkg.offerPrice || pkg.specialOffer ? `₹${pkg.offerPrice || pkg.specialOffer}` : ""}
                        </summary>
                        <div style={{ marginTop: "0.75rem" }}>
                          <ul style={{ paddingLeft: "1rem", listStyle: "disc" }}>
                            {(pkg.items || []).map(item => (
                              <li key={item} style={{ marginBottom: "0.25rem" }}>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>

                <div className="card" style={{ background: "white" }}>
                  <h3>Men Packages</h3>
                  <div style={{ display: "grid", gap: "0.75rem" }}>
                    {(servicesData.preBridalPackages?.men || []).map(pkg => (
                      <details key={pkg.name} className="card" style={{ background: "rgba(255,255,255,0.72)" }}>
                        <summary style={{ cursor: "pointer", fontWeight: 600 }}>
                          {pkg.name} — Offer {pkg.specialOffer ? `₹${pkg.specialOffer}` : ""}
                        </summary>
                        <div style={{ marginTop: "0.75rem" }}>
                          <ul style={{ paddingLeft: "1rem", listStyle: "disc" }}>
                            {(pkg.items || []).map(item => (
                              <li key={item} style={{ marginBottom: "0.25rem" }}>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ marginTop: "1.5rem" }}>
                {tab === "women" ? (
                  <div className="card" style={{ background: "white", marginBottom: "0.75rem" }}>
                    <h3 style={{ marginBottom: "0.25rem" }}>Premium Nail Services</h3>
                    <p className="muted" style={{ margin: 0 }}>
                      We offer premium nail art, nail extensions, gel polish and related services with 200+
                      satisfied customers.
                    </p>
                  </div>
                ) : null}

                <div className="services__mobileJump" style={{ marginBottom: "0.75rem" }}>
                  <label className="muted" style={{ display: "block", marginBottom: "0.5rem" }}>
                    Jump to category
                  </label>
                  <select
                    onChange={onJumpToCategory}
                    defaultValue=""
                    style={{
                      width: "100%",
                      padding: "14px 14px",
                      borderRadius: 12,
                      border: "1px solid var(--border)",
                      background: "rgba(255, 255, 255, 0.9)",
                    }}
                  >
                    <option value="">Select…</option>
                    {categoryList.map(category => (
                      <option key={category.name} value={toId(category.name)}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="services__layout">
                  <aside
                    className="card"
                    style={{
                      position: "sticky",
                      top: 16,
                      alignSelf: "start",
                      background: "white",
                    }}
                  >
                    <h3 style={{ marginBottom: "0.75rem" }}>Categories</h3>
                    <div style={{ display: "grid", gap: "0.25rem" }}>
                      {categoryList.map(category => (
                        <a
                          key={category.name}
                          href={`#${toId(category.name)}`}
                          className="muted"
                          style={{ textDecoration: "none", padding: "0.35rem 0" }}
                        >
                          {category.name}
                        </a>
                      ))}
                    </div>
                    <div style={{ marginTop: "1rem" }} className="muted">
                      Prices shown are Non‑Member (Member when available).
                    </div>
                  </aside>

                  <div style={{ display: "grid", gap: "0.75rem", minWidth: 0 }}>
                  {categoryList.map(category => (
                    <details
                      key={category.name}
                      id={toId(category.name)}
                      className="card"
                      open
                      style={{ background: "white" }}
                    >
                      <summary style={{ cursor: "pointer", fontWeight: 700 }}>
                        {category.name}
                      </summary>
                      <div style={{ marginTop: "0.75rem" }}>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1fr auto",
                            gap: "0.5rem 1rem",
                            alignItems: "baseline",
                          }}
                        >
                          {(category.items || []).map(item => {
                            const member = formatMember(item)
                            return (
                              <React.Fragment key={item.service}>
                                <div>
                                  <div style={{ fontWeight: 600 }}>{item.service}</div>
                                  {member ? (
                                    <div className="muted" style={{ fontSize: "0.95rem" }}>
                                      Member: {member}
                                    </div>
                                  ) : null}
                                </div>
                                <div style={{ fontWeight: 700, whiteSpace: "nowrap" }}>{formatPrice(item)}</div>
                              </React.Fragment>
                            )
                          })}
                        </div>
                      </div>
                    </details>
                  ))}

                  {!categoryList.length ? (
                    <div className="card" style={{ background: "white" }}>
                      <h3>No results</h3>
                      <p className="muted">Try a different search term.</p>
                    </div>
                  ) : null}

                  {tab === "women" && (servicesData.womenServices?.notes || []).length ? (
                    <div className="card" style={{ background: "white" }}>
                      <h3 style={{ marginBottom: "0.25rem" }}>Notes</h3>
                      {(servicesData.womenServices.notes || []).map(note => (
                        <p key={note} className="muted" style={{ margin: 0, padding: "0.25rem 0" }}>
                          {note}
                        </p>
                      ))}
                    </div>
                  ) : null}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}
