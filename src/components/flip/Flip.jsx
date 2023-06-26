import React, { useState } from 'react';
import styles from './Flip.module.css';

const Flip = () => {
    const [hoverState, setHoverState] = useState({});

    const handleHover = (index) => {
        setHoverState((prevState) => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    const arr = [
        {
            heading: "Flip Front",
            heading2: "Flip Back",
            para: "Additional Content Here"
        },
        {
            heading: "Flip Front 2",
            heading2: "Flip Back 2",
            para: "Additional Content Here"
        },
        {
            heading: "Flip Front 3",
            heading2: "Flip Back 3",
            para: "Additional Content Here"
        }
    ];

    return (
        <div>
            {arr.map((item, index) => (
                <div
                    key={index}
                    className={`${styles.tile} ${hoverState[index] ? styles.flipped : ''}`}
                    onMouseEnter={() => handleHover(index)}
                    onMouseLeave={() => handleHover(index)}
                >
                    <div className={styles.front}>
                        <h1>{item.heading}</h1>
                    </div>
                    <div className={styles.back}>
                        <h1>{item.heading2}</h1>
                        <p>{item.para}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Flip;
