import React, {useEffect, useState} from 'react';
import TitleBlock from "../../../elements/TitleBlock";
import Breadcrumb from "../../../elements/Breadcrumb";
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory, useParams} from "react-router-dom";
import {fetchCatalogJSON, openCatalogData, setCatalogTypeData, setViewChoise} from "../CatalogSlice";
import {scrollTop, sortArr} from "../../../assets/functions";
import Loader from "../../../assets/loader/Loader";
import './CatalogDetails.scss'
import {easySearch, searchInArray} from "../../../assets/searchInArray";
import TextField from "@mui/material/TextField";
import {InputAdornment} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const CatalogDetails = () => {
	const dispatch = useDispatch();
	let {id} = useParams();
	const history = useHistory();
	const fullCatalog = useSelector(state => state.catalog.fullCatalog);
	const catalogTypeData = useSelector(state => state.catalog.catalogTypeData);

	const [waitData, setWaitData] = useState(false)  // выкл loader
	const fetchCatalog = async () => {   // загрузка всего каталога
		if(fullCatalog.length === 0){
			try {
				await dispatch(fetchCatalogJSON())
			} catch (err) {
				console.error('Error')
			}
		}
		setWaitData(true)
	}

	useEffect(()=>{
		fetchCatalog()
		dataType(fullCatalog)
		// eslint-disable-next-line react-hooks/exhaustive-deps
		setCatType(catalogTypeData)
	}, [waitData])

	const dataType = (catalog) => {
		let typeCatalog = []
		catalog.filter(i => i.ПутьПапки.includes(id)).forEach((elem) => {
			let item = elem.Тип
			if (item === '') {
				item = 'Другие'
			}
			if (!typeCatalog.includes(item)) {
				typeCatalog.push(item)
			}
		})
		if (typeCatalog.length === 1) {
			dispatch(setViewChoise(typeCatalog[0]))
			history.push(`/catalogDetails/${id}`);
		}
		dispatch(setCatalogTypeData(sortArr(typeCatalog)))

	}


	const [catType, setCatType] = useState([])
	/*Поиск*/
	const [search, setSearch] = useState('')
	/*Очистка поля поиска*/
	const resetSearch = ()=> {
		setSearch('')
		setCatType(catalogTypeData)
	}
	/*Обновление поля поиска*/
	const handleSearch = (e) =>{
		e.preventDefault()
		setSearch(e.target.value)
	}
	/*ф-я поиска*/
	const handleKeyDown = (e)=>{
		if (e.key === 'Backspace' || e.key === 'Delete'){
			setCatType(catalogTypeData)
		}
		if (e.key === 'Enter' && search.length > 1) {
			const keysToSearch = ["org", "seller", 'vendor'];
			const searchedData = easySearch(catType, search, keysToSearch);
			setCatType(searchedData)
		}
	}

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
			<div className='detailedBlock' >
				{
					!waitData
						? <Loader/>
						: catType?.map((item, i) => {
							return <div key={i} className='item' >
								<Link to={`/catalogDetails/${id}`} onClick={()=>{dispatch(setViewChoise(item))}}>
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