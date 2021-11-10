import React from 'react';
import s from "../Contacts/Contacts.module.scss";
import Divider from "@mui/material/Divider";
import MapIcon from "@mui/icons-material/Map";
import map from "./img/map.jpg";

const WhereToBuy = () => {
    return (
        <div className={`${s.grey_txt}`}>
            <h2><MapIcon fontSize="small"/> Как к нам доехать</h2>
            <Divider/>
            <p>Мы находимся в 5 минутах ходьбы...</p>
            <img src={map} alt=""/>
        </div>
    );
};

export default WhereToBuy;