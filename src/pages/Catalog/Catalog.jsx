import React, {useCallback, useEffect} from 'react';
import s from "./Catalog.module.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Divider from "@mui/material/Divider";

import goods from '../../Data/goods.json';
import {useDispatch, useSelector} from "react-redux";
import {openCatalog, openCatalogData} from "./CatalogSlice";

import samokat from './img/samokat.png'
import zapchasti from './img/zapchasti.png'
import bike from './img/bike.png'
import winter from './img/winter.png'
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CatalogCard from "./catalogCard/catalogCard";

const Catalog = () => {
    const catalogItems = [
        { name: 'САМОКАТЫ', img: samokat},
        { name: 'ЗИМНИЕ-ТОВАРЫ', img: winter},
        { name: 'ВЕЛОСИПЕДЫ', img: bike},
        { name: 'ВЕЛОЗАПЧАСТИ', img: zapchasti},
    ]

    const dispatch = useDispatch();
    const catalogPage = useSelector(state => state.catalog.catalogPage)
    const catalogData = useSelector(state => state.catalog.catalogData)

    /*const getCatalogs = (goods) =>{
        let res = []
        const catalogs = goods.map(i => i.ПутьПапки.split(`\\`)[0])
        for (let str of catalogs) {
            if (!res.includes(str) && str !== "УСЛУГИ") {
                res.push(str);
            }
        }
        return console.log(res)
    }
    getCatalogs(goods)*/
/*    useEffect(()=>{
        getCatalogs(goods)
        dispatch(loadedCatalogItems())
    },[])*/
    const selectCatalog = (name)=>{
        if (name === catalogPage) return;
        console.log(name)
        dispatch(openCatalog(name))
        getCatalogItems(name)

    }

    const getCatalogItems = (name)=>{
        let newCatalog = goods.filter(i => i.ПутьПапки.includes(name))
        console.log(newCatalog)
        dispatch(openCatalogData(newCatalog))

        /*console.log(catalogData)*/
        const cards = newCatalog.map(i => <CatalogCard key={i.НоменклатураАртикул} data={i}/>)
    }


    const renderCatalogs = (catalogItems)=>{
        return  catalogItems.map((item, i) =>
            <Grid key={i} item xs={4} sm={3} md={3} onClick={()=> selectCatalog(item.name)}>
               <div><img src={item.img} alt={item.name}/></div><div className={s.text}>{item.name}</div>
            </Grid>
        )
     }
     const elements = renderCatalogs(catalogItems);

    const renderCatalogItems = (catalogData)=>{
        return catalogData.map((item, i) => <CatalogCard key={i} item={item}/>)
    }
    const catalogElements = renderCatalogItems(catalogData)


    return (
        <div className={`${s.grey_txt}`}>
            <h2 onClick={()=>selectCatalog('')} className={s.pointer}><ShoppingCartIcon fontSize="small"/> Каталог <span className={s.breadcrump}>/</span> {catalogPage}</h2>
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
                        <div>
                            Параметры
                        </div>
                        <div className={s.items}>
                            <Box sx={{ flexGrow: 1, display: 'grid',}} >
                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                                    {catalogData ? catalogElements : 'no data' }
                                </Grid>
                            </Box>
                        </div>
                    </div>
            }


        </div>
    );
};


export default Catalog;