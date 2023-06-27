import React from 'react'
import styles from './Slider.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {

    const arr = [
        {
            src: "https://cityspideynews.s3.amazonaws.com/uploads/spidey/202211/cover-mickey-mouse-1668759271.webp",
        },
        {
            src: "https://i.ytimg.com/vi/GZcmKNDgf8I/maxresdefault.jpg",
        },
        {
            src: "https://wallpapers.com/images/hd/animated-disney-castle-has6vy47k75d0bzs.jpg",
        },
        {
            src: "https://image.cnbcfm.com/api/v1/image/107255993-1686681473269-gettyimages-1239735095-220403b6_disneyworld_resort_b-gr_28.jpeg?v=1686764303&w=1600&h=900",
        }
    ]

    return (
        <div className={styles.slider}>
            <Carousel autoPlay={true} interval={500} infiniteLoop showStatus={false} showThumbs={false} >
                {
                    arr.map((item) => (
                        <div className={styles.images}>
                            <img src={item.src} alt={item.alt} />
                        </div>
                    ))
                }
            </Carousel>
        </div>
    )
}

export default Slider