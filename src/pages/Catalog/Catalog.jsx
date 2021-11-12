import React from 'react';
import s from "./Catalog.module.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Divider from "@mui/material/Divider";

const Catalog = () => {
    return (
        <div className={`${s.grey_txt}`}>
            <h2><ShoppingCartIcon fontSize="small"/> Каталог</h2>
            <Divider/>


        </div>
    );
};

export default Catalog;