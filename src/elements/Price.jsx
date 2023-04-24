import React from 'react';
import './elements.scss'

const Price = ({data}) => {
	console.log(data)
	return (
		<div className='itemPrice'>Цена: {data} <span className='price'>₽</span></div>
	);
};

export default Price;