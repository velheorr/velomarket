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
import TitleBlock from "../../../elements/TitleBlock";
import CatalogCard from "../../../elements/CatalogCard";
import Breadcrumb from "../../../elements/Breadcrumb";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import ScrollToTop from "react-scroll-to-top";
import {easySearch, searchInArray} from "../../../assets/searchInArray";
import TextField from "@mui/material/TextField";
import {InputAdornment} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";


const CatalogFiltersContainer = () => {
    const dispatch = useDispatch();
    let {id} = useParams();

    const fullCatalog = useSelector(state => state.catalog.fullCatalog);
    const catalogData = useSelector(state => state.catalog.catalogData);
    const catalogDataFiltered = useSelector(state => state.catalog.catalogDataFiltered);
    const filtersEmpty = useSelector(state => state.catalog.filtersEmpty);
    const viewChoise = useSelector(state => state.catalog.viewChoise);
    const [catEl, setCatEl] = useState([])
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setCatEl(catalogData)
        renderCatalogItems(catEl)
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
    function renderCatalogItems(catEl){
        if (catEl.length > 0 ) {
            total = catEl.length
            return catEl.map((item, i) => <CatalogCard key={i} items={item}/>)
        } else if (filtersEmpty === true){
            total = catEl.length
            return catEl.map((item, i) => <CatalogCard key={i} items={item}/>)
        } else if (filtersEmpty === false) {
            total = 0
            return <div className='noDataWithFilters'><span>Уточните поиск. Товары с указанными параметрами не найдены...</span></div>
        }
    }
    const catalogElements = renderCatalogItems(catEl);


    /*Поиск*/
    const [search, setSearch] = useState('')
    /*Очистка поля поиска*/
    const resetSearch = ()=> {
        setSearch('')
        setCatEl(catalogData)
    }
    /*Обновление поля поиска*/
    const handleSearch = (e) =>{
        e.preventDefault()
        setSearch(e.target.value)
    }
    /*ф-я поиска*/
    const handleKeyDown = (e)=>{
        if (e.key === 'Backspace' || e.key === 'Delete'){
            setCatEl(catalogData)
        }
        if (e.key === 'Enter' && search.length > 1) {
            const keysToSearch = ["Номенклатура", "НоменклатураБренд", 'НоменклатураМодель'];
            const searchedData = searchInArray(catEl, search, keysToSearch);
            setCatEl(searchedData)
        }
    }
    console.log(catalogData)
    return (
        <>
            <TitleBlock name={id} />
            <Breadcrumb catalog={id} viewChoise={viewChoise}/>
            <div className='searchFilter' style={{position: 'relative'}}>
                <TextField id="realiz_search" sx={{position: 'absolute', right: '30px', top: '-32px'}}  variant="standard" placeholder='Поиск' value={search}
                           onKeyDown={handleKeyDown}  onChange={handleSearch} InputProps={{
                    startAdornment: (<InputAdornment position="start"><SearchIcon/></InputAdornment>),
                    endAdornment:(<InputAdornment position="end"><IconButton onClick={resetSearch}><CloseIcon  /></IconButton ></InputAdornment>)
                }}/>
            </div>
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
            <ScrollToTop smooth className='scrollTop' component={<KeyboardDoubleArrowUpIcon/>}/>
        </>
    );
};

export default CatalogFiltersContainer;