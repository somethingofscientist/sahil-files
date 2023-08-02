import styles from './InfinteScroller.module.css';
import React, { useEffect, useRef, useState } from 'react';
import Slider from 'infinite-react-carousel';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const InfiniteScroller = () => {
    return (
        <>
            <h1>Carousle Awesome</h1>
            <AwesomeSlider>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </AwesomeSlider>


        </>
    );
}

export default InfiniteScroller