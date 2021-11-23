import React from 'react';
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import s from "../Catalog.module.css";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Card from "@mui/material/Card";

const CatalogCard = ({item}) => {
    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="175"
                    image="https://bikemania.com.ua/wa-data/public/shop/products/10/37/493710/images/166471/166471.440.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom component="div" fontSize={16} fontWeight={600}>
                        {item.Номенклатура}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component="div">
                        <span>Бренд: {item.НоменклатураБренд}</span>
                        <div>Модель: {item.НоменклатураМодель}</div>
                        <div>Код: {item.НоменклатураКод}</div>
                        <div>Артикул: {item.НоменклатураАртикул}</div>
                        <div><CheckBoxIcon size="small" color='success'/></div>
                        <div className={s.price}>Цена: {item.Цена}р.</div>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CatalogCard;