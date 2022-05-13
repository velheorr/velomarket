import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import '../App.scss'

import img1 from "./img/1.jpg"
import img2 from "./img/2.jpg"
import img3 from "./img/3.jpg"
import img4 from "./img/4.jpg"
import img5 from "./img/5.jpg"

const mainSlides = [
    { url: img1 },
    { url: img2 },
    { url: img3 },
    { url: img4 },
    { url: img5 },
]

const Slider = ({slidePack = mainSlides}) => {


    const slideStyle = {'backgroundColor': '#fff',
        'boxShadow': '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
        'margin': '0px auto'
    }

    return (
        <div className='lowerHeader'>
            <SimpleImageSlider
                style={slideStyle}
                width={934}
                height={300}
                images={slidePack}
                showBullets={true}
                showNavs={true}
                slideDuration={2}
                autoPlay={true}
                autoPlayDelay={2}
            />
        </div>
    );
};

export default Slider;



