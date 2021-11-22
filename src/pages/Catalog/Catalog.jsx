import React, {useCallback, useEffect} from 'react';
import s from "./Catalog.module.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Divider from "@mui/material/Divider";

import goods from '../../Data/goods.json';
import {useDispatch, useSelector} from "react-redux";
import {loadedCatalogItems} from "./CatalogSlice";

import samokat from './img/samokat.jpg'
import zapchasti from './img/zapchasti.jpg'
import bike from './img/bike.jpg'
import winter from './img/winter.jpg'
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";


const Catalog = () => {
    const catalogItems = [
        { name:'Самокаты', img: samokat},
        { name:'Зимние товары', img: winter},
        { name:'Велосипеды', img: bike},
        { name:'Велоазапчасти', img: zapchasti}
    ]

    const dispatch = useDispatch();
    /*const catalogItems = useSelector(state => state.catalog.catalogItems)*/

    /*const getCatalogs = (goods) =>{
        let res = []
        const catalogs = goods.map(i => i.ПутьПапки.split(`\\`)[0])
        for (let str of catalogs) {
            if (!res.includes(str) && str !== "УСЛУГИ") {
                res.push(str);
            }
        }
        console.log(res)
    }
    useEffect(()=>{
        getCatalogs(goods)
        dispatch(loadedCatalogItems())
    },[])*/


    const renderCatalog = (catalogItems)=>{
        return  catalogItems.map((item, i) =>
                <Grid item xs={4} sm={3} md={3}>
                    <img src={item.img} alt={item.name}/><div>{item.name}</div>
                </Grid>

            /*<div key={i}>

                <img src={item.img} alt={item.name}/><div>{item.name}</div>
                {/!* <img src={item.img} alt={item.name}/><span>{item.name}</span>*!/}
            </div>*/
        )
     }
    const elements = renderCatalog(catalogItems);

    return (
        <div className={`${s.grey_txt}`}>
            <h2><ShoppingCartIcon fontSize="small"/> Каталог</h2>
            <Divider/>
           {/* <div className={s.wrapper}>
                {elements}
            </div>*/}
           <Box sx={{ flexGrow: 1 }}>
               <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} className={s.wrapper}>
                   {elements}
               </Grid>
           </Box>

        </div>
    );
};

/*
const View = ({i})=>{
    /!*console.log(catalogItems)
    const items = catalogItems.map(i => <div>{i}</div>)*!/
    return (
        <>
            <div>{i}</div>
           {/!* {items}*!/}
           {/!* <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>*!/}
        </>
    )
}
*/

export default Catalog;