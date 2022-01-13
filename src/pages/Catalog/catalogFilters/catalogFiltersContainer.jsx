import React from 'react';
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CatalogFilters from "./catalogFilters";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CatalogCard from "../catalogCard/catalogCard";
import {setCatalogDataFilter, setFilteredBrand} from "../CatalogSlice";
import {catalogRoute} from "../../../assets/functions";
import {useDispatch, useSelector} from "react-redux";
import Divider from "@mui/material/Divider";
import Slider from "../../../Slider/Slider";
import {Link, useParams} from "react-router-dom";

const CatalogFiltersContainer = () => {
    const dispatch = useDispatch();
    let {id} = useParams();

    const catalogData = useSelector(state => state.catalog.catalogData);
    const catalogDataFiltered = useSelector(state => state.catalog.catalogDataFiltered);

    const renderCatalogItems = (catalogData)=>{
        if (catalogDataFiltered.length > 0) {
            return catalogDataFiltered.map((item, i) => <CatalogCard key={i} items={item}/>)
        }
        return catalogData.map((item, i) => <CatalogCard key={i} items={item}/>)
    }
    const catalogElements = renderCatalogItems(catalogData);




    const resetCatalogs = ()=>{
        dispatch(setFilteredBrand())
        dispatch(setCatalogDataFilter(0))
    }


    return (
        <>
            <Slider/>
            <h2>
                <Link to={`/`}><Button variant="outlined" onClick={resetCatalogs} startIcon={<ShoppingCartIcon/>}>Каталог</Button></Link>
                <span className='breadcrump'>{id}</span>
            </h2>
            <Divider/>
            <div className='catalogWrapper'>
                <CatalogFilters catalogData={catalogData} />
                <div className='items'>
                    <Box sx={{ flexGrow: 1, display: 'grid'}} >
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                            {catalogData ? catalogElements : 'no data' }
                        </Grid>
                    </Box>
                </div>
            </div>
        </>
    );
};

export default CatalogFiltersContainer;