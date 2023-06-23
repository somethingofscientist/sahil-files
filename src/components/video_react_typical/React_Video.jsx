import styles from './Video.module.css';
import video from './video.mp4';
import React, { Component } from 'react'
// import Typical from 'react-typical'
// import Typist from 'react-typist';
import { TypeAnimation } from 'react-type-animation';

const React_Video = () => {
    return (
        <>
            {/* <h1>Video - React Typical</h1> */}
            <div className={styles.video}>
                <video src={video} autoPlay muted />
                <div className={styles.content}>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'We produce food for Mice',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'We produce food for Hamsters',
                            1000,
                            'We produce food for Guinea Pigs',
                            1000,
                            'We produce food for Chinchillas',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </div>
            </div>
        </>
    )
}

export default React_Video