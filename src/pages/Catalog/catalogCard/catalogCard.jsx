import React from 'react';
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import s from "../Catalog.module.css";
import Card from "@mui/material/Card";
import noimg from '../img/noimg.png'
import * as axios from "axios";
import {NavLink} from "react-router-dom";


let ddd = noimg
const getImg = async ()=>{
    /*let response = await axios.get('https://cloud-api.yandex.net/v1/disk/public/resources?public_key=https%3A%2F%2Fdisk.yandex.ru%2Fd%2FAhRV9Bv4rrXBvA')*/
    /*let response = await axios.get('https://cloud-api.yandex.net/v1/disk/public/resources?public_key=https%3A%2F%2Fdisk.yandex.ru%2Fd%2FbC0wjFlOWByTMA')
    * https://disk.yandex.ru/i/bs3CT68dYWvZEg
    * */
    let response = await axios.get('https://cloud-api.yandex.net/v1/disk/public/resources?public_key=https%3A%2F%2Fdisk.yandex.ru%2Fi%2F9qxg82YY4PIMEQ&preview_size=L')

}



const CatalogCard = ({items}) => {
    const {Номенклатура, НоменклатураБренд, НоменклатураМодель, НоменклатураКод, НоменклатураАртикул, Цена, ФайлКартинки} = items;


    console.log(ФайлКартинки)
    let img = noimg
    if (ФайлКартинки){
        img = ФайлКартинки
        console.log(img)
    }


    return (
        <Card sx={{ maxWidth: 300 }}>
            <NavLink to={`/catalogPage/${НоменклатураКод}`}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    width="300"
                    image ={img}
                    //image={x ? x : noimg}
                    /*image="https://bikemania.com.ua/wa-data/public/shop/products/10/37/493710/images/166471/166471.440.jpg"*/
                    alt={Номенклатура}
                />
                <CardContent>
                    <Typography gutterBottom component="div" fontSize={16} fontWeight={600} height={72}>
                        {Номенклатура}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component="span">
                        <div>Артикул: {НоменклатураАртикул}</div>
                        <div>Код: {НоменклатураКод}</div>
                    </Typography>
                    <Typography variant="body2" color="text.primary" component="div">
                        <div>Бренд: {НоменклатураБренд}</div>
                        {/*<div>Модель: {НоменклатураМодель}</div>*/}


                        {/*<div><CheckBoxIcon size="small" color='success'/></div>*/}
                        <div className={s.price}>Цена: {Цена}р.</div>
                    </Typography>
                </CardContent>
            </CardActionArea>
            </NavLink>
        </Card>
    );
};

export default CatalogCard;