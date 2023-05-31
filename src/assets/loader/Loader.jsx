import React from 'react';
import img from './load.gif'

const Loader = ({text = 'Идет загрузка данных...', css = {textAlign: "center", marginTop: '50px'}}  ) => {

	return (
		<div style={css}>
			<img src={img} alt='loading'/>
			<div>{text}</div>
		</div>
	);
};

export default Loader;