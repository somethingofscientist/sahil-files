import styles from './Video.module.css';
import video from './video.mp4';
import React, { Component } from 'react'
import Typical from 'react-typical'
// import Typist from 'react-typist';

const React_Video = () => {
    return (
        <>
            {/* <h1>Video - React Typical</h1> */}
            <div className={styles.video}>
                <video src={video} autoPlay muted />
                <div className={styles.content}>
                    <Typical
                        steps={[
                            "First", 3000,
                            "Second", 3000,
                            "Third", 3000,
                            "Fourth", 3000,
                            'Fifth', 3000,
                            "Sixth", 3000,
                        ]}
                        loop={Infinity}
                    />
                </div>
            </div>
        </>
    )
}

export default React_Video