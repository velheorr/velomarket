import React from 'react';
import {imgURL, imgURLerror} from "../assets/functions";

const ImgForCatalogPage = ({mainImg, item})=>{
	let x
	mainImg.length <1 ? x =  imgURL(item.ПутьКартинок, item.ОснКартинка) : x = mainImg
	return (
		<>
			<img
				src={x}
				alt="veloamarketkoleso.ru"
				onError={imgURLerror}
				data-fancybox-trigger="gallery"
			/>
		</>
	)
}

export default ImgForCatalogPage;