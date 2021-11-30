import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

import img1 from "./img/1.jpg"
import img2 from "./img/2.jpg"
import img3 from "./img/3.jpg"
import img4 from "./img/4.jpg"
import img5 from "./img/5.jpg"
import img6 from "./img/6.jpg"

const Slider = () => {
    const serviceSlides = [
        { url: img1 },
        { url: img2 },
        { url: img3 },
        { url: img4 },
        { url: img5 },
        { url: img6 }
    ]

    const slideStyle = {'backgroundColor': '#fff',
        'boxShadow': '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
        'margin': '0px auto'
    }

    return (
        <>
            <SimpleImageSlider
                style={slideStyle}
                width={934}
                height={300}
                images={serviceSlides}
                showBullets={true}
                showNavs={true}
                slideDuration={1.2}
                autoPlay={true}
                autoPlayDelay={2}
            />
        </>
    );
};

export default Slider;



