import React from 'react';
import brands from "../assets/brands/brands";
import './elements.scss'

const BrandLogo = ({data}) => {

	let img = brands.find(i => i.brand === data)

	return (
		<div className='brandLogo'>
			{img
				? <img src={img.img} alt=''/>
				: ''
			}

		</div>
	);
};

export default BrandLogo;