import React from 'react';
import './elements.scss'


const TitleBlock = ({name, icon }) => {
	return (
		<>
			<div className='titleBlock'>
				<div className='blockBody'>{icon}{name}</div>
			</div>
		</>
	);
};

export default TitleBlock;