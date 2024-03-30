import React, {useEffect, useState} from 'react';
import TitleBlock from "../../../elements/TitleBlock";
import Breadcrumb from "../../../elements/Breadcrumb";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchCatalogJSON, openCatalogData, setCatalogTypeData} from "../CatalogSlice";
import {scrollTop} from "../../../assets/functions";
import Loader from "../../../assets/loader/Loader";
import './CatalogDetails.scss'

const CatalogDetails = () => {
	const dispatch = useDispatch();
	let {id} = useParams();
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
	}, [waitData])

	const dataType = (catalog) => {
		let typeCatalog = []
		catalog.filter(i => i.ПутьПапки.includes(id)).forEach((elem) =>{
			let item = elem.Тип
			if (item === ''){item = 'Другие'}
			if (!typeCatalog.includes(item) ){typeCatalog.push(item)}
		})
		dispatch(setCatalogTypeData(typeCatalog))
		console.log(catalogTypeData)
	}


	return (
		<div style={{minHeight: '500px'}}>
			<TitleBlock name={id} />
			<Breadcrumb catalog={id}/>
			<div className='detailedBlock' >
				{
					!waitData
						? <Loader/>
						: catalogTypeData?.map((item, i) => {
							return <div key={i} className='item'>
								<div className='itemText'>{item}</div>
							</div>
						})
				}
			</div>
		</div>
	);
};

export default CatalogDetails;