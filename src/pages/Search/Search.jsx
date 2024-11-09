import React from 'react';
import TitleBlock from "../../elements/TitleBlock";
import Breadcrumb from "../../elements/Breadcrumb";
import {useSelector} from "react-redux";
import '../Catalog/Catalog.scss'
import CatalogCard from "../../elements/CatalogCard";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import ScrollToTop from "react-scroll-to-top";

const Search = () => {
	const find = useSelector(state => state.search.find);

	let total = 0
	function renderCatalogItems(data){
		if (data.length >= 1){
			total = data.length
			return data.map((item, i) => <CatalogCard key={i} items={item}/>)
		}
	}

	const catalogElements = renderCatalogItems(find);

	return (
		<div style={{minHeight: '500px'}}>
			<TitleBlock name={'Результаты поиска'} />
			<Breadcrumb viewChoise={'Найдено:'}/>
			<div className='pageBody catalogWrapper'>
				<div className='catalog-cards'>
					<div className='catalogTopFilterBlock'>Найдено: {total}</div>
					<div className="catalog-cards-row" style={{justifyContent: 'center'}}>
						{find ? catalogElements : 'no data' }
					</div>
				</div>
			</div>
			<ScrollToTop smooth className='scrollTop' component={<KeyboardDoubleArrowUpIcon/>}/>
		</div>
	);
};

export default Search;