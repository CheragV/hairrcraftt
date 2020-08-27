import React from "react"
import { Parallax } from "react-parallax"

import Layout from "../components/layout"
import SEO from "../components/seo"

import image1 from "../images/tools.jpg"

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <div className="frame_one_column">
      <h1>Services</h1>
    </div>
    <Parallax bgImage={image1} blur={0.5} strength={400}>
      <div
        style={{
          width: `100vw`,
          height: `25vh`,
          minHeight: `100px`,
          maxHeight: `300px`,
        }}
      ></div>
    </Parallax>
    <div class="grid-container">
      <div class="grid-item">
        <img className="menu_image" src={require("../images/menu/1.jpg")}></img>
      </div>
      <div class="grid-item">
        <img className="menu_image" src={require("../images/menu/2.jpg")}></img>
      </div>
      <div class="grid-item">
        <img className="menu_image" src={require("../images/menu/3.jpg")}></img>
      </div>
      <div class="grid-item">
        <img className="menu_image" src={require("../images/menu/4.jpg")}></img>
      </div>
      <div class="grid-item">
        <img className="menu_image" src={require("../images/menu/5.jpg")}></img>
      </div>
      <div class="grid-item">
        <img className="menu_image" src={require("../images/menu/6.jpg")}></img>
      </div>
      <div class="grid-item">
        <img className="menu_image" src={require("../images/menu/7.jpg")}></img>
      </div>
      <div class="grid-item">
        <img className="menu_image" src={require("../images/menu/8.jpg")}></img>
      </div>
      <div class="grid-item">
        <img className="menu_image" src={require("../images/menu/9.jpg")}></img>
      </div>
      <div class="grid-item">
        <img className="menu_image" src={require("../images/menu/1.jpg")}></img>
        1
      </div>
      <div class="grid-item">
        <img className="menu_image" src={require("../images/menu/1.jpg")}></img>
        1
      </div>
    </div>
  </Layout>
)

export default Services
