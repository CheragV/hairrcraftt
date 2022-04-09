import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styles from './styles/gallery.module.css';

const Ambience = () => {
    const images = [
        require('../images/ambience/image1.webp'),
        require('../images/ambience/image2.webp'),
        require('../images/ambience/image3.webp'),
        require('../images/ambience/image4.webp')
    ]
    return (
        <div className={styles.ambience}>
            {
                images.map((item, i) => <div>
                    <img
                        key={item}
                        className={styles.ambience_image}
                        src={item}
                        alt={"Instagram feed photo"}
                        loading='lazy'
                    />
                </div>

                )
            }
        </div >
    )
};

export default Ambience;