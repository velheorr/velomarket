import React from 'react';
import s from "./Catalog.module.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import goods from '../../Data/goods.json';
import {useDispatch, useSelector} from "react-redux";
import {openCatalog, openCatalogData, setCatalogDataFilter, setFilteredBrand} from "./CatalogSlice";
import CatalogCard from "./catalogCard/catalogCard";
import CatalogFilters from "./catalogFilters/catalogFilters";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {NavLink} from "react-router-dom";

const Catalog = () => {
    const dispatch = useDispatch();
    const catalogPage = useSelector(state => state.catalog.catalogPage);
    const catalogItems = useSelector(state => state.catalog.catalogItems);
    const catalogData = useSelector(state => state.catalog.catalogData);
    const catalogDataFiltered = useSelector(state => state.catalog.catalogDataFiltered);

    const selectCatalog = (name)=>{
        if (name === catalogPage) return;
        dispatch(openCatalog(name))
        let newCatalog = goods.filter(i => i.ПутьПапки.includes(name))
        dispatch(openCatalogData(newCatalog))
        catalogFilters(newCatalog)
    }


    const renderCatalogs = (catalogItems)=>{
        return  catalogItems.map((item, i) =>
            <Grid key={i} item xs={4} sm={3} md={3} onClick={()=> selectCatalog(item.name)}>
               {/*<div><img src={item.img} alt={item.name}/></div><div className={s.text}>{item.name}</div>*/}
                <NavLink to={`/catalog/${item.name}`} className={s.text}><img src={item.img} alt={item.name}/><div >{item.name}</div></NavLink>
            </Grid>
        )
     }
    const elements = renderCatalogs(catalogItems);

    const renderCatalogItems = (catalogData)=>{
        if (catalogDataFiltered.length > 0) {
            return catalogDataFiltered.map((item, i) => <CatalogCard key={i} items={item}/>)
        }
        return catalogData.map((item, i) => <CatalogCard key={i} items={item}/>)
    }
    const catalogElements = renderCatalogItems(catalogData);

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


    const resetCatalogs = ()=>{
        selectCatalog('');
        dispatch(setFilteredBrand())
        dispatch(setCatalogDataFilter(0))
    }


    return (
        <>
            <h2>
                {catalogPage
                    ?
                    <div>
                        <NavLink to={`/catalog`} className={s.text}>
                            <Button variant="outlined" onClick={resetCatalogs} startIcon={<ShoppingCartIcon/>}>Каталог</Button>
                        </NavLink>
                        <span className={s.breadcrump}>{catalogPage}</span>
                    </div>
                    :
                    <ListItem disablePadding className={s.menuHeader}>
                        <ListItemIcon><ShoppingCartIcon color='primary'/></ListItemIcon>
                        <ListItemText primary="Каталог"/>
                    </ListItem>
                }

            </h2>
            <Divider/>
            {
                catalogPage === ''
                    ?
                    <Box sx={{ flexGrow: 1 }} className={s.wrapper}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                            {elements}
                        </Grid>
                    </Box>
                    :
                    <div className={s.catalogWrapper}>
                        <CatalogFilters catalogData={catalogData} />
                        <div className={s.items}>
                            <Box sx={{ flexGrow: 1, display: 'grid'}} >
                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                                    {catalogData ? catalogElements : 'no data' }
                                </Grid>
                            </Box>
                        </div>
                    </div>
            }
        </>
    );
};


export default Catalog;