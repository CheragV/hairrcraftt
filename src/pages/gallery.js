import React, { useState } from 'react';
import Layout from "../components/layout"
import Ambience from '../components/ambience';
import Instagram from '../components/instagram';
import styles from '../components/styles/gallery.module.css'

const Gallery = () => {
    const [option, setOption] = useState(1)

    const getBody = () => {
        switch (option) {
            case 1:
                return <Ambience />
            case 2:
                return <Instagram />
        }
    }
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.options}>
                    <button type="button" className={option === 1 ? styles.o_selected : {}} onClick={() => setOption(1)}>Ambience</button>
                    <button type="button" className={option === 2 ? styles.o_selected : {}} onClick={() => setOption(2)}>Work</button>
                </div>
                {getBody()}
            </div>
        </Layout >
    );
};

export default Gallery;