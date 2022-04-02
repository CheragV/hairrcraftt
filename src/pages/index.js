import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import InstagramSingle from "../components/instagram-single"
import InstagramSingle2 from "../components/instagram-single-2"

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
    >
      <img src={CoverImage} className="cover_image" />
    </div>
    <div className="frame_one_column">
      <div className="centered_p">
        <h1 style={{ textAlign: `center` }}>Magic is in the Hair</h1>
        <p>We believe every hair is different and hence needs a different treatment and care routine. We pride in delivering honest & customized services to suit your hair type, texture and concerns.</p>
        <p>We are an award winning salon, delivering excellence in cutting, colouring, hair & beauty treatments for men and women at an affordable price. We ensure you enjoy flawless results during and after any hair service you have with us. We offer tailor made services to suit your hair type and improve the condition of your hair. You can speak to our Hair Experts for their proficient advice for what will be best for your hair.</p>
        <p>It is our dedication to first class expertise and skill that keeps our following coming back for more. We are renowned not only for our Haircut, Color & Texture services, but also for our serene Hair Spa experience. Visiting Hair Castle puts you at the heart of hair transformation because we are as passionate & excited about your Hair, as you are.</p>
        <br />
        <br />
      </div>
    </div>
    <div className="frame_two_columns">
      <InstagramSingle />
      <InstagramSingle2 />
    </div>
  </Layout >
)

export default IndexPage
