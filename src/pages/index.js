import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Instagram from "../components/instagram-single"
import Newsletter from "../components/newsletter"

import CoverImage from "../images/logo_hairrcraftt.png"

const insideStyles = {
  color: "white",
  paddingTop: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  textAlign: "center",
}

const IndexPage = () => (
  <Layout>
    <SEO />
    <div
      className="cover_image_container"
      // style={{ display: "flex", justifyContent: "center" }}
    >
      <img src={CoverImage} className="cover_image" />
    </div>
    <div className="frame_one_column">
      <div className="centered_p">
        <h1 style={{ textAlign: `center` }}>Magic is in the Hair</h1>
        <p>
          Conjuring the best you in Siliguri's neighborhood. We offer the full
          range of hair services from cuts to high fashion color and scalp
          treatments.
          <br />
          <br />
          Please read this page for your next appointment:
        </p>
        <p className="button_p">
          <Link className="button" to="/covid19">
            COVID-19 Information
          </Link>
        </p>
        <blockquote className="box_block">
          <h4>COVID-19 Update</h4>
          <p>
            Your stylist may reach out to you in advance of your appointment to
            touch base with more specific information relevant to you and your
            upcoming service.
          </p>
          <ul>
            <li>
              All clients and stylists will be required to wear a mask while at
              the salon. Your stylist may also be wearing eye protection for
              further safety precautions.
            </li>
            <li>
              Please arrive on-time for your appointment and allow an additional
              5-10 minutes for check-in.
            </li>
            <li>
              Blow-drying and beverage services are suspended to prevent the
              spread of COVID-19.
            </li>
            <p className="button_p">
              <a className="button" href="covid-liability-form.pdf">
                COVID-19 Liability Form
              </a>
            </p>
          </ul>
          <br />
          <p>
            Thank you so very much for your kindness and support during this
            difficult time in history. We look forward to seeing you soon!
          </p>
        </blockquote>
      </div>
    </div>
    <div className="frame_two_columns">
      <Instagram />
      <Newsletter />
    </div>
  </Layout>
)

export default IndexPage
