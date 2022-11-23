import React from 'react';
import './elements.scss'

const BlockInfo = ({icon, title, text}) => {
	return (
		<div className='blockInfo'>
			<div>{icon}</div>
			<div>{title}</div>
			<div>{text}</div>
		</div>
	);
};

export default BlockInfo;