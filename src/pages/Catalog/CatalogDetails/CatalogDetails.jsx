import React, {useEffect, useState} from 'react';
import TitleBlock from "../../../elements/TitleBlock";
import Breadcrumb from "../../../elements/Breadcrumb";
import {useDispatch} from "react-redux";
import {Link, useHistory, useParams} from "react-router-dom";
import {setFullCatalog, setViewChoise} from "../CatalogSlice";
import {sortArr} from "../../../assets/functions";
import Loader from "../../../assets/loader/Loader";
import './CatalogDetails.scss'
import {easySearch} from "../../../assets/searchInArray";
import TextField from "@mui/material/TextField";
import {InputAdornment} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {useGetCatalogData} from "../../../api/useGetData";

const CatalogDetails = () => {
	const {data: catalog, isLoading, isError} = useGetCatalogData()
	const dispatch = useDispatch();
	let {id} = useParams();
	const history = useHistory();

	const [catType, setCatType] = useState([]) //original
	const [searchCat, setSearchCat] = useState([]) //for search

	useEffect(()=>{
		if (catalog){
			findCatalogType()
			dispatch(setFullCatalog(catalog))
		}
	},[catalog])

	const findCatalogType = ()=>{
		let arr = []
		const sortedCatalog = catalog.filter( i => {
			return  i.ПутьПапки.includes(id)
		})
		sortedCatalog.forEach(i =>{
			let item = i.Тип
			if (item === ''){item ='Другие' }
			if (!arr.includes(item)){
				arr.push(item)
			}
		})

		if (arr.length === 1) {
			dispatch(setViewChoise(arr[0]))
			return history.push(`/catalogDetails/${id}`);
		}
		setCatType(sortArr(arr))
		setSearchCat(sortArr(arr))
	}


	/*Поиск*/
	const [search, setSearch] = useState('')
	/*Очистка поля поиска*/
	const resetSearch = ()=> {
		setSearch('')
		setSearchCat(catType)
	}
	/*Обновление поля поиска*/
	const handleSearch = (e) =>{
		e.preventDefault()
		setSearch(e.target.value)
	}
	/*ф-я поиска*/
	const handleKeyDown = (e)=>{
		if (e.key === 'Backspace' || e.key === 'Delete'){
			setSearchCat(catType)
		}
		if (e.key === 'Enter' && search.length > 1) {
			const keysToSearch = ["Номенклатура", "НоменклатураБренд", 'НоменклатураМодель'];
			const searchedData = easySearch(catType, search, keysToSearch);
			setSearchCat(searchedData)
		}
	}


	if (isLoading) {return <Loader/>}
	if (isError) {return <h3>Нет подключения к серверу</h3>}
	if (!catalog) {return <h3>Нет данных с сервера</h3>}

	return (
		<div style={{minHeight: '500px'}}>
			<TitleBlock name={id} />
			<Breadcrumb catalog={id} />
			<div className='searchFilter' style={{position: 'relative'}}>
				<TextField id="realiz_search" sx={{position: 'absolute', right: '30px', top: '-32px'}}  variant="standard" placeholder='Поиск' value={search}
							onKeyDown={handleKeyDown}  onChange={handleSearch} InputProps={{
					startAdornment: (<InputAdornment position="start"><SearchIcon/></InputAdornment>),
					endAdornment:(<InputAdornment position="end"><IconButton onClick={resetSearch}><CloseIcon  /></IconButton ></InputAdornment>)
				}}/>
			</div>
			<div className='detailedBlock'>
				{
					searchCat?.map((item, i) => {
						return <div key={i} className='item'>
									<Link to={`/catalogDetails/${id}`} onClick={() => {dispatch(setViewChoise(item))}}>
										<div className='itemText'>{item}</div>
									</Link>
								</div>
					})
				}
			</div>
		</div>
	);
};

export default CatalogDetails;

