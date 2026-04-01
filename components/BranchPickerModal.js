import React from "react"

import siteMetadata from "../siteMetadata"
import { useBranchPicker } from "./BranchPickerContext"

export default function BranchPickerModal() {
  const { isOpen, close, intent } = useBranchPicker()

  if (!isOpen) return null

  const phoneHref = `tel:${siteMetadata.phone}`
  const whatsappBase = `https://wa.me/${siteMetadata.whatsapp}`

  function onBackdropClick(e) {
    if (e.target === e.currentTarget) close()
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Choose a branch"
      onClick={onBackdropClick}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 60,
        background: "rgba(0,0,0,0.42)",
        display: "grid",
        placeItems: "center",
        padding: "max(1rem, env(safe-area-inset-top)) max(1rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom)) max(1rem, env(safe-area-inset-left))",
      }}
    >
      <div
        className="surface"
        style={{
          width: "min(920px, 100%)",
          borderRadius: 16,
          padding: "1rem",
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(12px)",
          boxShadow: "var(--shadow)",
          maxHeight: "min(820px, calc(100dvh - 2rem))",
          overflow: "auto",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
          <div>
            <h2 style={{ marginBottom: "0.25rem" }}>Choose a branch</h2>
            <p className="muted" style={{ margin: 0 }}>
              {intent === "directions"
                ? "Get directions to the right salon"
                : intent === "whatsapp"
                  ? "Message us on WhatsApp"
                  : "Call to book"}
            </p>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            style={{
              border: "1px solid var(--border)",
              background: "rgba(255,255,255,0.7)",
              borderRadius: 12,
              padding: "0.5rem 0.9rem",
              cursor: "pointer",
              minHeight: 44,
              alignSelf: "start",
            }}
          >
            ×
          </button>
        </div>

        <div
          className="branchGrid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "0.75rem",
            marginTop: "1rem",
          }}
        >
          {(siteMetadata.locations || []).map(location => {
            const whatsappText = encodeURIComponent(
              `Hi HairrCraftt, I want to book an appointment at ${location.area}.`
            )

            return (
              <div key={location.slug} className="card" style={{ background: "white" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                  <div style={{ minWidth: 0 }}>
                    <h3 style={{ marginBottom: "0.25rem" }}>{location.area}</h3>
                    <div className="muted" style={{ fontSize: "0.95rem" }}>
                      {location.name}
                    </div>
                  </div>
                  <a
                    href={location.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      textDecoration: "none",
                      alignSelf: "start",
                      border: "1px solid var(--border)",
                      borderRadius: 999,
                      padding: "0.35rem 0.6rem",
                      background: "rgba(196, 139, 106, 0.12)",
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                      color: "var(--text-color)",
                    }}
                  >
                    {location.rating}★ ({location.ratingsCount})
                  </a>
                </div>

                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.85rem" }}>
                  <a className="button" href={phoneHref} onClick={close}>
                    Call
                  </a>
                  <a
                    className="button"
                    href={`${whatsappBase}?text=${whatsappText}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={close}
                  >
                    WhatsApp
                  </a>
                  <a
                    className="button"
                    href={location.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={close}
                  >
                    Directions
                  </a>
                </div>

                <div style={{ marginTop: "0.85rem" }}>
                  <a
                    href={`/locations/${location.slug}`}
                    className="muted"
                    style={{ textDecoration: "none" }}
                    onClick={close}
                  >
                    View branch page
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        <style jsx>{`
          @media (max-width: 820px) {
            div[role='dialog'] {
              place-items: end center;
            }

            div[role='dialog'] > div.surface {
              width: 100%;
              border-radius: 18px;
              max-height: calc(100dvh - 1rem);
            }

            .branchGrid {
              grid-template-columns: 1fr;
            }

            .branchGrid :global(.button) {
              flex: 1;
              min-width: 0;
              padding-left: 18px;
              padding-right: 18px;
            }
          }
        `}</style>
      </div>
    </div>
  )
}
