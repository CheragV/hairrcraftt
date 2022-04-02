import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styles from './styles/gallery.module.css';

const Ambience = () => {
    const data = useStaticQuery(graphql`query {
        image1: file(relativePath: { eq: "ambience/image1.png" }) {
            childImageSharp {
                fluid(maxWidth: 400, maxHeight: 250) {
                ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        image2: file(relativePath: { eq: "ambience/image2.png" }) {childImageSharp {
                fluid(maxWidth: 400, maxHeight: 250) {
                ...GatsbyImageSharpFluid_withWebp
                }
            }}
        image3: file(relativePath: { eq: "ambience/image3.png" }) {childImageSharp {
                fluid(maxWidth: 400, maxHeight: 250) {
                ...GatsbyImageSharpFluid_withWebp
                }
            }}
        image4: file(relativePath: { eq: "ambience/image4.png" }) {childImageSharp {
                fluid(maxWidth: 400, maxHeight: 250) {
                ...GatsbyImageSharpFluid_withWebp
                }
            }}
        }`)
    return (
        <div className={styles.ambience}>
            {
                Object.values(data).map((item, i) => item?.childImageSharp?.fluid ? (
                    <div>
                        <Image
                            className={styles.ambience_image}
                            fluid={item?.childImageSharp?.fluid}
                            alt={"Instagram feed photo"}
                        />
                    </div>
                ) : (
                    <div></div>
                )
                )
            }
        </div >
    )
};

export default Ambience;