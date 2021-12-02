import React from 'react';
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import s from "../Catalog.module.css";
import Card from "@mui/material/Card";
import noimg from '../img/noimg.png'

const CatalogCard = ({items}) => {
    const {Номенклатура, НоменклатураБренд, НоменклатураМодель, НоменклатураКод, НоменклатураАртикул, Цена} = items;
    const src = '/img/catalog'
    let x;

/*    const img = new Image()
    img.src = `${src}/${НоменклатураКод}.png`
    //img.onerror = function(){x = noimg};
    console.log(img.onerror)*/

    if (`${src}/${НоменклатураКод}.png`  ){
        console.log(`${src}/${НоменклатураКод}.png`)
        x = `${src}/${НоменклатураКод}.png`
    }

    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    width="300"
                    //image ={img.src}
                    image={x ? x : noimg}
                    //image={noimg}
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
                        <div>Модель: {НоменклатураМодель}</div>


                        {/*<div><CheckBoxIcon size="small" color='success'/></div>*/}
                        <div className={s.price}>Цена: {Цена}р.</div>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CatalogCard;