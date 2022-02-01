import React, {useEffect} from 'react';
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CatalogFilters from "./catalogFilters";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CatalogCard from "../catalogCard/catalogCard";
import {openCatalogData, setFilteredBrand} from "../CatalogSlice";

import {useDispatch, useSelector} from "react-redux";
import Divider from "@mui/material/Divider";
import Slider from "../../../Slider/Slider";
import {Link, useParams} from "react-router-dom";
import goods from "../../../Data/data.json";

const CatalogFiltersContainer = () => {
    const dispatch = useDispatch();
    let {id} = useParams();

    const catalogData = useSelector(state => state.catalog.catalogData);
    const catalogDataFiltered = useSelector(state => state.catalog.catalogDataFiltered);

    useEffect(()=>{
        selectCatalog(id)
        // eslint-disable-next-line
    },[id])

    const catalogFilters = (newCatalog)=>{
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

    return (
        <>
            <Slider/>
            <h2>
                <Link to={`/`}><Button variant="outlined"  startIcon={<ShoppingCartIcon/>}>Каталог</Button></Link>
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