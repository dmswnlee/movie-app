import React from 'react';
import styles from './NotFound.module.css'

export default function NotFound() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.error}>PAGE NOT FOUND.We Couldn't Find This Page</p>
        </div>
    );
}

