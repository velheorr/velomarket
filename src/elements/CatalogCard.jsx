import "./elements.scss";
import {Link} from "react-router-dom";

import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import {clearSymbol, imgURL, imgURLerror, noImgURL} from "../assets/functions";
import React from "react";
import Divider from "@mui/material/Divider";
import {useInView} from "react-intersection-observer";
import {Tooltip} from "@mui/material";


/*Цена, Тип, Размер,НоменклатураАртикул, НоменклатураАртикулПроизв*/
const CatalogCard = ({items}) => {
	const {Номенклатура, НоменклатураБренд, НоменклатураКод, ПутьКартинок,ОснКартинка, НоменклатураМодель, ВНаличии} = items;

	const {ref, inView} = useInView({
		threshold: 0.3,
		triggerOnce: true,
	})

	const notAvailable = () =>{
		if (ВНаличии <= 1 && ВНаличии === ''){
			return true
		}
	}

	return (
		<Link to={`/catalog/${НоменклатураКод}`} className='catalogCard'>
			<Card sx={{ maxWidth: 300}} className='catalog-cards-column' ref={ref}>
				<CardActionArea>
					{notAvailable() ? <Tooltip title="Детали уточняйте по телефону: +7 (902) 471-37-69"><div className='notAvailable'>Нет в наличии</div></Tooltip> : ''}
					<div className='cardTitle'>{Номенклатура}</div>
					{
						inView
							?
						<CardMedia
							component="img"
							height='300px'
							image ={imgURL(ПутьКартинок, ОснКартинка, true)}
							sx={{objectFit: 'scale-down', filter: ()=> notAvailable() ? 'grayscale(100%)' : ''}}
							alt={Номенклатура}
							onError ={imgURLerror}
						/>
						:
							<img src={noImgURL} height='300px' width='300px' alt='VelomarketKoleso.ru'/>
					}
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