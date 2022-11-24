import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <div className={styles.nav}>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
        </div>
    );
}

