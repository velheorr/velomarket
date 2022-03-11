import {useEffect, useState} from 'react';
import '../../../App.scss'
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CatalogFilters from "./catalogFilters";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CatalogCard from "../catalogCard/catalogCard";
import {openCatalogData, setCatalogDataFilter, setFilteredBrand} from "../CatalogSlice";

import {useDispatch, useSelector} from "react-redux";
import Divider from "@mui/material/Divider";
import Slider from "../../../Slider/Slider";
import {Link, useParams} from "react-router-dom";

import goods from "../../../Data/data.json";

import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";

const CatalogFiltersContainer = () => {
    const dispatch = useDispatch();
    let {id} = useParams();
    const [data, setData] = useState(false);

    const catalogData = useSelector(state => state.catalog.catalogData);
    const catalogDataFiltered = useSelector(state => state.catalog.catalogDataFiltered);

    useEffect(()=>{
        selectCatalog(id)
        // eslint-disable-next-line
    },[id])

    const catalogFilters = (newCatalog)=>{
        console.log(newCatalog)
        let filterBrand = []
        const filtered = newCatalog.map(i => i.НоменклатураБренд)
        for (let str of filtered) {
            if (!filterBrand.includes(str)) {
                filterBrand.push(str);
            }
        }
        dispatch(setFilteredBrand(filterBrand));
    }

    const selectCatalog = (id)=>{
        let newCatalog = goods.filter(i => i.ПутьПапки.includes(id))
        if (newCatalog.length > 0) {setData(true)}
        dispatch(openCatalogData(newCatalog))
        catalogFilters(newCatalog)
    }


    const renderCatalogItems = (catalogData)=>{
        if (catalogDataFiltered.length > 0) {
            return catalogDataFiltered.map((item, i) => <CatalogCard key={i} items={item}/>)
        }
        return catalogData.map((item, i) => <CatalogCard key={i} items={item}/>)
    }
    const catalogElements = renderCatalogItems(catalogData);

    const resetFiltersFromCatalogs = ()=>{
        dispatch(setCatalogDataFilter([]))
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
                        <CatalogFilters catalogData={catalogData} />
                        <Box sx={{ flexGrow: 1, display: 'grid'}} className='items'>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                                {catalogData ? catalogElements : 'no data' }
                            </Grid>
                        </Box>
                    </div>
                :
                    <div className='noDataOnPage'>Страница временно недоступна!</div>
            }
        </>
    );
};

export default CatalogFiltersContainer;