import React, {useEffect, useState} from 'react';
import '../../../App.scss'
import CatalogFilters from "./catalogFilters";

import {
    openCatalogData,
    setFilteredBrand,
    setFilteredSize,
    setFilteredType,
    fetchCatalogJSON
} from "../CatalogSlice";
import {filterCatalogBy, scrollTop} from '../../../assets/functions'
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import Loader from "../../../assets/loader/Loader";
import IconButton from "@mui/material/IconButton";
import TitleBlock from "../../../elements/TitleBlock";
import CatalogCard from "../../../elements/CatalogCard";
import Breadcrumb from "../../../elements/Breadcrumb";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';


const CatalogFiltersContainer = () => {
    const dispatch = useDispatch();
    let {id} = useParams();

    const fullCatalog = useSelector(state => state.catalog.fullCatalog);
    const catalogData = useSelector(state => state.catalog.catalogData);
    const catalogDataFiltered = useSelector(state => state.catalog.catalogDataFiltered);
    const filtersEmpty = useSelector(state => state.catalog.filtersEmpty);

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
        selectCatalog(id)
        scrollTop()
    }, [waitData])

    // define current catalog group
    const selectCatalog = (id)=>{
        let newCatalog = fullCatalog.filter(i => i.ПутьПапки.includes(id))
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

    return (
        <>
            <TitleBlock name={id} />
            <Breadcrumb catalog={id}/>
            <div style={{minHeight: '500px'}}>
                {waitData
                    ?
                    <div className='pageBody catalogWrapper'>
                        <CatalogFilters className='catalogWrapper-filters'/>
                        <div className='catalog-cards'>
                            <div className='catalogTopFilterBlock'>Найдено: {total}</div>
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