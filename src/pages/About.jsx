import React from 'react';
import styles from './About.module.css'

export default function About() {
    return (
        <div className={styles.about_container}>
            <span>"A Javascript library for building user interfaces"</span>
            <span>- React -</span>
        </div>
    );
}

