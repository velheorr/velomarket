import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slickSlider.scss'

import img1 from "./img/1.jpg"
import img2 from "./img/2.jpg"
import img3 from "./img/3.jpg"
import img4 from "./img/4.jpg"
import img5 from "./img/5.jpg"
import img6 from "./img/6.jpg"
import img7 from "./img/7.jpg"
import img8 from "./img/8.jpg"
import img9 from "./img/9.jpg"
import img10 from "./img/10.jpg"
import img11 from "./img/11.jpg"
import img12 from "./img/12.jpg"
import img13 from "./img/13.jpg"
import img14 from "./img/14.jpg"
import TextField from "@mui/material/TextField";
import {InputAdornment} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { searchInArray} from "../searchInArray";
import {useHistory} from "react-router-dom";
import {useGetCatalogData} from "../../api/useGetData";
import {useDispatch} from "react-redux";
import {setFindToCatalog} from "../../pages/Search/SearchSlice";
/*import img15 from "./img/15.jpg"
import img16 from "./img/16.jpg"
import img17 from "./img/17.jpg"
import img18 from "./img/18.jpg"*/


const SlickSlider = () => {
	const mainSlides = [
		{ url: img1 },
		{ url: img2 },
		{ url: img3 },
		{ url: img4 },
		{ url: img5 },
		{ url: img6 },
		{ url: img7 },
		{ url: img8 },
		{ url: img9 },
		{ url: img10 },
		{ url: img11 },
		{ url: img12 },
		{ url: img13 },
		{ url: img14 },
/*		{ url: img15 },
		{ url: img16 },
		{ url: img17 },
		{ url: img18 },*/
	]

	const settings = {
		dots: true,
		autoplay: true,
		speed: 2000,
		slidesToShow: 4,
		slidesToScroll: 1,
		initialSlide: 0,
		centerMode: true,
		infinite: true,
		responsive: [
			{
				breakpoint: 1650,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 870,
				settings: {
					slidesToShow: 1,
					dots: false,
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 1,
					dots: false,
				}
			}
		]
	};

	const {data: catalog} = useGetCatalogData()
	const history = useHistory()
	const dispatch = useDispatch()

	useEffect(()=>{
		if (catalog){
			setSearchCat(catalog)
		}
	},[catalog])

	/*Поиск*/
	const [search, setSearch] = useState('')
	const [searchCat, setSearchCat] = useState([])

	/*Очистка поля поиска*/
	const resetGSearch = ()=> {
		setSearch('')
		setSearchCat(catalog)
	}
	/*Обновление поля поиска*/
	const handleGSearch = (e) =>{
		e.preventDefault()
		setSearch(e.target.value)
	}
	/*ф-я поиска*/
	const handleKeyDownG = (e)=>{
		if (e.key === 'Backspace' || e.key === 'Delete'){
			setSearchCat(catalog)
		}
		if (e.key === 'Enter' && search.length > 1) {
			const keysToSearch = ["Номенклатура", "НоменклатураБренд", 'НоменклатураМодель', "Тип"];
			const searchedData = searchInArray(searchCat, search, keysToSearch);
			setSearchCat(searchedData)
			dispatch(setFindToCatalog(searchedData))
			history.push(`/search`);
		}
	}

	if (!catalog) {return <h3>Нет данных с сервера</h3>}
	return (
		<div className='lowerHeader'>
			<Slider {...settings} >
				{mainSlides?.map((item, i) => {
						return (
							<div key={i}>
								<img src={item.url} alt='velomarketkoleso.ru' />
							</div>
						)
					})
				}
			</Slider>
			<div className='globalSearch'>
					<TextField id="global" sx={{position: 'absolute', right: '30px', top: '-32px'}}  variant="standard" placeholder='Поиск по всем товарам' value={search}
							   onKeyDown={handleKeyDownG}  onChange={handleGSearch} InputProps={{
						startAdornment: (<InputAdornment position="start"><SearchIcon/></InputAdornment>),
						endAdornment:(<InputAdornment position="end"><IconButton onClick={resetGSearch}><CloseIcon  /></IconButton ></InputAdornment>)
					}}/>
			</div>
		</div>

	);
};

export default SlickSlider;