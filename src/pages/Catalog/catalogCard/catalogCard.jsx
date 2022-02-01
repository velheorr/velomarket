import "../Catalog.scss";
import {Link} from "react-router-dom";

import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import {imgURL} from "../../../assets/functions";



const CatalogCard = ({items}) => {
    const {Номенклатура, НоменклатураБренд, НоменклатураКод, НоменклатураАртикул, Цена, ФайлКартинки} = items;


    /*let img = imgURL(ФайлКартинки)*/
    let img = imgURL('')

    return (
        <Link to={`/catalog/${НоменклатураКод}`}>
            <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="300"
                        width="300"
                        image = {img}
                        alt={Номенклатура}
                    />
                    <CardContent>
                        <Typography gutterBottom component="div" fontSize={16} fontWeight={600} height={72} color={'#333'} overflow={'hidden'}>
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
                            <div className='price'>Цена: {Цена}р.</div>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
};

export default CatalogCard;