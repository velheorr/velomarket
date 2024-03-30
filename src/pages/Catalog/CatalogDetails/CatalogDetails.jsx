import React, {useEffect, useState} from 'react';
import TitleBlock from "../../../elements/TitleBlock";
import Breadcrumb from "../../../elements/Breadcrumb";
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory, useParams} from "react-router-dom";
import {fetchCatalogJSON, openCatalogData, setCatalogTypeData, setViewChoise} from "../CatalogSlice";
import {scrollTop, sortArr} from "../../../assets/functions";
import Loader from "../../../assets/loader/Loader";
import './CatalogDetails.scss'

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


	return (
		<div style={{minHeight: '500px'}}>
			<TitleBlock name={id} />
			<Breadcrumb catalog={id} />
			<div className='detailedBlock' >
				{
					!waitData
						? <Loader/>
						: catalogTypeData?.map((item, i) => {
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