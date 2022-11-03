import "../Catalog.scss";
import {Link} from "react-router-dom";

import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import {clearSymbol, imgURL, imgURLerror} from "../../../assets/functions";
import React from "react";
import Divider from "@mui/material/Divider";


/*Цена, Тип, Размер,*/
const CatalogCard = ({items}) => {
    const {Номенклатура, НоменклатураБренд, НоменклатураКод, НоменклатураАртикул, НоменклатураАртикулПроизв, ПутьКартинок,ОснКартинка, НоменклатураМодель, ВНаличии} = items;

    const notAvailable = () =>{
        if (ВНаличии <= 1 && ВНаличии === ''){
            return true
        }
    }
     return (
        <Link to={`/catalog/${НоменклатураКод}`}>
            <Card sx={{ maxWidth: 300, background: ()=> notAvailable() ? '#f3f3f3 !important' : '' }} className='catalog-cards-column'>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom component="div" fontSize={16} fontWeight={600} height={46} color={'#333'} overflow={'hidden'} align={'center'}>
                            {Номенклатура}
                        </Typography>
                        <Divider/>
                    </CardContent>
                    <CardMedia
                        component="img"
                        height='300px'
                        image ={imgURL(ПутьКартинок, ОснКартинка, true)}
                        sx={{objectFit: 'scale-down', filter: ()=> notAvailable() ? 'grayscale(100%)' : ''}}
                        alt={Номенклатура}
                        onError ={imgURLerror}
                    />
                    {notAvailable() ? <div className='notAvailable'>Нет в наличии</div> : ''}

                    <CardContent>
                        <Divider/>
                        <Typography variant="body2" color="text.secondary" component="div" marginTop={'10px'} >
                            <div>Артикул: {НоменклатураАртикул}</div>
                            <div>Арт. производителя:{НоменклатураАртикулПроизв}</div>
                            <div>Бренд: {НоменклатураБренд}</div>
                            <div>Модель: {clearSymbol(НоменклатураМодель)}</div>
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