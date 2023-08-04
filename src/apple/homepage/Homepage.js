import React from 'react'
import styles from './Homepage.module.css';
// import black_mountain from '../../media/wallpapersden.com_macos-catalina-mountains_1600x900.jpg';
import Reveal from 'react-reveal/Reveal';
import Zoom from 'react-reveal/Zoom';
import Marquee from 'react-fast-marquee';


const Homepage = () => {
    return (
        <>
            <div className={styles.home_page_body}>
                <div className={styles.header}>
                    <Reveal>
                        <h1>Your Header</h1>
                    </Reveal>
                </div>
                <div className={styles.home_body}>
                    <div className={styles.banner}>
                        <Zoom effect="fadeInUp">
                            {/* <img src={black_mountain} alt="mountain" /> */}
                        </Zoom>
                    </div>
                </div>
                <div className={styles.footer}>
                    <Reveal>
                        <h1>Your Footer</h1>
                    </Reveal>
                </div>
            </div>
        </>
    )
}

export default Homepage