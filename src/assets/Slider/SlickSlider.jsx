import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slickSlider.css'

import img1 from "./img/1.jpg"
import img2 from "./img/2.jpg"
import img3 from "./img/3.jpg"
import img4 from "./img/4.jpg"
import img5 from "./img/5.jpg"
import img6 from "./img/6.jpg"
import img7 from "./img/7.jpg"
import img8 from "./img/8.jpg"
import img9 from "./img/9.jpg"
import img10 from "./img/10.jpg"
import img11 from "./img/11.jpg"
import img12 from "./img/12.jpg"
import img13 from "./img/13.jpg"
import img14 from "./img/14.jpg"


const SlickSlider = () => {
	const mainSlides = [
		{ url: img1 },
		{ url: img2 },
		{ url: img3 },
		{ url: img4 },
		{ url: img5 },
		{ url: img6 },
		{ url: img7 },
		{ url: img8 },
		{ url: img9 },
		{ url: img10 },
		{ url: img11 },
		{ url: img12 },
		{ url: img13 },
		{ url: img14 },
	]

	const settings = {
		dots: true,
		autoplay: true,
		speed: 1500,
		slidesToShow: 4,
		slidesToScroll: 1,
		initialSlide: 0,
		centerMode: true,
		infinite: true,
		responsive: [
			{
				breakpoint: 1650,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 870,
				settings: {
					slidesToShow: 1,
					dots: false,
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 1,
					dots: false,
				}
			}
		]
	};

	return (
		<div className='lowerHeader'>
			<Slider {...settings} >
				{mainSlides?.map((item, i) => {
						return (
							<div key={i}>
								<img src={item.url} alt='velomarketkoleso.ru' />
							</div>
						)
					})
				}
			</Slider>
		</div>

	);
};

export default SlickSlider;