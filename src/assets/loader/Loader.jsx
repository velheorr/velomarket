import React from 'react';
import img from './load.gif'

const Loader = () => {
	return (
		<div style={{textAlign: "center", marginTop: '50px'}}>
			<img src={img}/>
			<div>Идет загрузка данных...</div>
		</div>
	);
};

export default Loader;