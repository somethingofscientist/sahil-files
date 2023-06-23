import React from 'react'
import styles from './DropDown.module.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const DropDown = () => {

    return (
        <>
            <h1> Drop Down </h1>

            <div className={styles.navbar}>
                <div className={styles.link}>Home</div>
                <div className={styles.link}>About</div>
                <div className={styles.link}>
                    More
                </div>
                <div className={styles.link}>Blogs</div>
                <div className={styles.link}>Contact</div>
                <div className={styles.link}>Many  More</div>
            </div>


            <div className={styles.container}>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
            </div>
        </>
    )
}

export default DropDown