import React from 'react';
import './elements.scss'

const CheckBox = ({item, register, filterBy}) => {
	return (
		<div className='checkbox'>
			<input type='checkbox' id={item} {...register(`${filterBy}`)} value={item}/>
			<label htmlFor={item}>{item}</label>
		</div>
	);
};

export default CheckBox;