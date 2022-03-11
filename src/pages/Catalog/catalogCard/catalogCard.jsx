import "../Catalog.scss";
import {Link} from "react-router-dom";

import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import {clearSymbol, imgURL, imgURLerror} from "../../../assets/functions";
import React from "react";



const CatalogCard = ({items}) => {
    const {Номенклатура, НоменклатураБренд, НоменклатураКод, НоменклатураАртикул, Цена, ПутьКартинок,ОснКартинка, НоменклатураМодель} = items;
    /*minHeight: 490*/
    return (
        <Link to={`/catalog/${НоменклатураКод}`}>
            <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        width="300"
                        height='300'
                        image ={imgURL(ПутьКартинок, ОснКартинка)}
                        alt={Номенклатура}
                        onError ={imgURLerror}
                    />
                    <CardContent>
                        <Typography gutterBottom component="div" fontSize={16} fontWeight={600} height={72} color={'#333'} overflow={'hidden'}>
                            {Номенклатура}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="span">
                            <div>Артикул: {НоменклатураАртикул}</div>
                            <div>Модель: {clearSymbol(НоменклатураМодель)}</div>
                            <div>Бренд: {clearSymbol(НоменклатураБренд)}</div>
                        </Typography>
                        <Typography variant="body2" color="text.primary" component="div">
                           {/* <div className='price'>Цена: {Цена}р.</div>*/}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
};

export default CatalogCard;