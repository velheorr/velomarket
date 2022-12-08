import React, {useEffect, useState} from 'react';
import '../../../App.scss'
import CatalogFilters from "./catalogFilters";

import {
    openCatalogData,
    setFilteredBrand,
    setFilteredSize,
    setFilteredType,
    getFullCatalog
} from "../CatalogSlice";
import {filterCatalogBy} from '../../../assets/functions'

import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import Loader from "../../../assets/loader/Loader";
import IconButton from "@mui/material/IconButton";
import {api} from "../../../api/api";
import TitleBlock from "../../../elements/TitleBlock";
import CatalogCard from "../../../elements/CatalogCard";
import Breadcrumb from "../../../elements/Breadcrumb";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';


const CatalogFiltersContainer = () => {
    const dispatch = useDispatch();
    let {id} = useParams();
    const [data, setData] = useState(false);

    const catalogData = useSelector(state => state.catalog.catalogData);
    const catalogDataFiltered = useSelector(state => state.catalog.catalogDataFiltered);
    const filtersEmpty = useSelector(state => state.catalog.filtersEmpty);
    const fullCatalog = useSelector(state => state.catalog.fullCatalog);

    const [dataFull, setDataFull] = useState(false)
    const fullData = async ()=>{
        const dataInfo = await api.getData()
        dispatch(getFullCatalog(dataInfo))
        setDataFull(true)
    }

    useEffect(()=>{
        selectCatalog(id)
        fullData()
        window.scrollTo(0, 0)
        // eslint-disable-next-line
    },[id, dataFull])



    const catalogFilters = (newCatalog)=>{
        const brand = filterCatalogBy(newCatalog, 'НоменклатураБренд')
        dispatch(setFilteredBrand(brand));
        const type = filterCatalogBy(newCatalog, 'Тип')
        dispatch(setFilteredType(type));
        const size = filterCatalogBy(newCatalog, 'Размер')
        dispatch(setFilteredSize(size));
    }



    const selectCatalog = (id)=>{
        let newCatalog = fullCatalog.filter(i => i.ПутьПапки.includes(id))
        if (newCatalog.length > 0) {setData(true)}
        dispatch(openCatalogData(newCatalog))
        catalogFilters(newCatalog)
    }


    const renderCatalogItems = (catalogData)=>{
        if (catalogDataFiltered.length > 0 ) {
            return catalogDataFiltered.map((item, i) => <CatalogCard key={i} items={item}/>)
        }  else if (filtersEmpty === true){
            return catalogData.map((item, i) => <CatalogCard key={i} items={item}/>)
        } else if (filtersEmpty === false) {
            return <div className='noDataWithFilters'><span>Уточните поиск. Товары с указанными параметрами не найдены...</span></div>
        }
    }
    const catalogElements = renderCatalogItems(catalogData);

    const scrollTop = ()=>{
        window.scrollTo(0, 0)
        /*window.scrollTo(0, document.body.scrollHeight);*/
    }

    return (
        <>
            <TitleBlock name={id} />
            <Breadcrumb catalog={id}/>
            <div style={{minHeight: '500px'}}>
                {
                    data
                        ?
                        <div className='pageBody catalogWrapper'>
                            <CatalogFilters className='catalogWrapper-filters'/>
                            <div className='catalog-cards'>
                                <div className="catalog-cards-row">
                                    {catalogData ? catalogElements : 'no data' }
                                </div>
                            </div>
                        </div>
                        :
                        <Loader/>
                }
            </div>

            <div className='upBtn'>
                <IconButton color="primary" variant="contained" onClick={scrollTop}><KeyboardDoubleArrowUpIcon/></IconButton>
            </div>
        </>
    );
};

export default CatalogFiltersContainer;