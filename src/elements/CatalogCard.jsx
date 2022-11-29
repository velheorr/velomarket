import "./elements.scss";
import {Link} from "react-router-dom";

import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import {clearSymbol, imgURL, imgURLerror} from "../assets/functions";
import React from "react";
import Divider from "@mui/material/Divider";


/*Цена, Тип, Размер,НоменклатураАртикул, НоменклатураАртикулПроизв*/
const CatalogCard = ({items}) => {
	const {Номенклатура, НоменклатураБренд, НоменклатураКод, ПутьКартинок,ОснКартинка, НоменклатураМодель, ВНаличии} = items;

	const notAvailable = () =>{
		if (ВНаличии <= 1 && ВНаличии === ''){
			return true
		}
	}

	return (
		<Link to={`/catalog/${НоменклатураКод}`} className='catalogCard'>
			<Card sx={{ maxWidth: 300}} className='catalog-cards-column'>
				<CardActionArea>
					{notAvailable() ? <div className='notAvailable'>Нет в наличии</div> : ''}
					<div className='cardTitle'>{Номенклатура}</div>
					<CardMedia
						component="img"
						height='300px'
						image ={imgURL(ПутьКартинок, ОснКартинка, true)}
						sx={{objectFit: 'scale-down', filter: ()=> notAvailable() ? 'grayscale(100%)' : ''}}
						alt={Номенклатура}
						onError ={imgURLerror}
					/>
					<CardContent>
						<Divider/>
						<Typography variant="body2" color="text.secondary" component="div" marginTop={'10px'} >
							<div>Бренд: <span className='cardSubTitle'>{НоменклатураБренд}</span></div>
							<div>Модель: <span className='cardSubTitle'>{clearSymbol(НоменклатураМодель)}</span></div>
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Link>
	);
};

export default CatalogCard;