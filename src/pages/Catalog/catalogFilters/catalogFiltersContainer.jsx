import {useEffect, useState} from 'react';
import '../../../App.scss'
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CatalogFilters from "./catalogFilters";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CatalogCard from "../catalogCard/catalogCard";
import {
    openCatalogData,
    setCatalogDataFilter,
    setFilteredBrand,
    setFilteredSize,
    setFilteredType
} from "../CatalogSlice";
import {filterCatalogBy} from '../../../assets/functions'

import {useDispatch, useSelector} from "react-redux";
import Divider from "@mui/material/Divider";
import Slider from "../../../Slider/Slider";
import {Link, useParams} from "react-router-dom";

import goods from "../../../Data/data.json";

import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Loader from "../../../assets/loader/Loader";
import IconButton from "@mui/material/IconButton";


const CatalogFiltersContainer = () => {
    const dispatch = useDispatch();
    let {id} = useParams();
    const [data, setData] = useState(false);

    const catalogData = useSelector(state => state.catalog.catalogData);
    const catalogDataFiltered = useSelector(state => state.catalog.catalogDataFiltered);
    const filtersEmpty = useSelector(state => state.catalog.filtersEmpty);

    useEffect(()=>{
        selectCatalog(id)
        window.scrollTo(0, 0)
        // eslint-disable-next-line
    },[id])



    const catalogFilters = (newCatalog)=>{
        const brand = filterCatalogBy(newCatalog, 'НоменклатураБренд')
        dispatch(setFilteredBrand(brand));
        const type = filterCatalogBy(newCatalog, 'Тип')
        dispatch(setFilteredType(type));
        const size = filterCatalogBy(newCatalog, 'Размер')
        dispatch(setFilteredSize(size));
    }



    const selectCatalog = (id)=>{
        let newCatalog = goods.filter(i => i.ПутьПапки.includes(id))
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
            return <div className='noDataWithFilters'><span>Уточните поиск. Товары с указанными фильтрами не найдены...</span></div>
        }
    }
    const catalogElements = renderCatalogItems(catalogData);

    const resetFiltersFromCatalogs = ()=>{
        dispatch(setCatalogDataFilter([]))
    }

    const scrollTop = ()=>{
        window.scrollTo(0, 0)
        /*window.scrollTo(0, document.body.scrollHeight);*/
    }



    return (
        <>
            <Slider/>
            <ListItem disablePadding className='pageTitle'>
                <Link to={`/`}><Button variant="outlined" onClick={resetFiltersFromCatalogs}  startIcon={<ShoppingCartIcon/>}>Каталог</Button></Link>
                <ListItemText className='breadcrump' primary={id}/>
            </ListItem>
            <Divider/>
            {
                data
                ?
                    <div className='pageBody catalogWrapper'>
                        <CatalogFilters />
                        <Box sx={{ flexGrow: 1, display: 'grid'}} className='items'>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{marginLeft: 25}}>
                                {catalogData ? catalogElements : 'no data' }
                            </Grid>
                        </Box>
                    </div>
                :
                    <Loader/>
            }
            <div className='upBtn'>
                <IconButton color="primary" onClick={scrollTop}>
                    <ArrowUpwardIcon/>
                </IconButton>
            </div>
        </>
    );
};

export default CatalogFiltersContainer;