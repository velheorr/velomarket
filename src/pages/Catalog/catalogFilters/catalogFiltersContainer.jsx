import React, {useEffect, useState} from 'react';
import '../../../App.scss'
import CatalogFilters from "./catalogFilters";
import {
    openCatalogData,
    setFilteredBrand,
    setFilteredSize,
    setFilteredType, setFullCatalog,
} from "../CatalogSlice";
import {filterCatalogBy, scrollTop} from '../../../assets/functions'
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import Loader from "../../../assets/loader/Loader";
import TitleBlock from "../../../elements/TitleBlock";
import CatalogCard from "../../../elements/CatalogCard";
import Breadcrumb from "../../../elements/Breadcrumb";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import ScrollToTop from "react-scroll-to-top";
import {useGetCatalogData} from "../../../api/useGetData";


const CatalogFiltersContainer = () => {
    const {data: catalog, isLoading, isError, refetch, status} = useGetCatalogData()
    const dispatch = useDispatch();
    let {id} = useParams();

    const catalogData = useSelector(state => state.catalog.catalogData);
    const catalogDataFiltered = useSelector(state => state.catalog.catalogDataFiltered);
    const filtersEmpty = useSelector(state => state.catalog.filtersEmpty);
    const viewChoise = useSelector(state => state.catalog.viewChoise);

    useEffect(()=>{
        if (catalog){
            selectCatalog(id)
            scrollTop()
        }
    },[catalog])


    // define current catalog group
    const selectCatalog = (id)=>{
        let newCatalog = catalog.filter(i => i.ПутьПапки.includes(id))
        dispatch(openCatalogData(newCatalog))
        catalogFilters(newCatalog)
    }
    // update cat filters data
    const catalogFilters = (newCatalog)=>{
        dispatch(setFilteredBrand(filterCatalogBy(newCatalog, 'НоменклатураБренд')));
        dispatch(setFilteredType(filterCatalogBy(newCatalog, 'Тип')));
        dispatch(setFilteredSize(filterCatalogBy(newCatalog, 'Размер')));
    }

    let total = 0
    function renderCatalogItems(catalogData){
        if (catalogDataFiltered.length > 0 ) {
            total = catalogDataFiltered.length
            return catalogDataFiltered.map((item, i) => <CatalogCard key={i} items={item}/>)
        } else if (filtersEmpty === true){
            total = catalogData.length
            return catalogData.map((item, i) => <CatalogCard key={i} items={item}/>)
        } else if (filtersEmpty === false) {
            total = 0
            return <div className='noDataWithFilters'><span>Уточните поиск. Товары с указанными параметрами не найдены...</span></div>
        }
    }
    const catalogElements = renderCatalogItems(catalogData);



    if (isLoading) {return <Loader/>}
    if (isError) {return <h3>Нет подключения к серверу</h3>}
    if (!catalog) {return <h3>Нет данных с сервера</h3>}

    return (
        <>
            <TitleBlock name={id} />
            <Breadcrumb catalog={id} viewChoise={viewChoise}/>
            <div style={{minHeight: '500px'}}>
                    <div className='pageBody catalogWrapper'>
                        <CatalogFilters className='catalogWrapper-filters'/>
                        <div className='catalog-cards'>
                            <div className='catalogTopFilterBlock'>Найдено: {total}</div>
                            <div className="catalog-cards-row">
                                {catalogData ? catalogElements : 'no data' }
                            </div>
                        </div>
                    </div>
            </div>
            <ScrollToTop smooth className='scrollTop' component={<KeyboardDoubleArrowUpIcon/>}/>
        </>
    );
};

export default CatalogFiltersContainer;