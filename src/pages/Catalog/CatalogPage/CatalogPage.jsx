import React, {useEffect, useState} from 'react';
import './CatalogPage.scss'
import {Link, useParams} from 'react-router-dom';

import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Paper from "@mui/material/Paper";

import goods from '../../../Data/data.json';

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabPanel, TabList, TabContext } from '@mui/lab';
import Slider from "../../../Slider/Slider";
import {imgURL} from "../../../assets/functions";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";


const CatalogPage = () => {
    const {itemId} = useParams()
    const [item, setItem] = useState('');
    const [value, setValue] = useState('1');

    useEffect(() => {
        setItem(goods.find(i => i.НоменклатураКод === itemId))
    }, [itemId])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const backBTN = ()=>{
        let parentPath = `/`
        if(item){parentPath = `/catalogs/${item.ПутьПапки.split('\\')[0]}`}
        return parentPath
    }


    let img = imgURL('')
    if (item.ФайлКартинки){
        /*img = imgURL(item.ФайлКартинки)*/

    }


    return (
        <>
            <Slider/>
            <ListItem disablePadding className='pageTitle'>
                <Link to={backBTN}>
                    <Button variant="outlined" startIcon={<ArrowBackIcon/>}>Назад</Button>
                </Link>
                <ListItemText className='breadcrump' primary="Описание товара"/>
            </ListItem>
            <Divider/>

            <div className='pageBody cardInfo'>
                <Paper sx={{width: '100%', maxWidth: '100%', backgroundColor: '#ffffffed'}} className='cardImg'>
                    <img src={img} width={300} alt="veloamarketkoleso.ru" />
                </Paper>
                <div className='cardData'>
                    <div className='directory'>{item.ПутьПапки}</div>
                    <div className='cardDataTitle'>{item.Номенклатура}</div>
                    <div className='cardParams'>
                        <div>Артикул</div>
                        <div>{item.НоменклатураАртикул}</div>
                        <div>Код</div>
                        <div>{item.НоменклатураКод}</div>
                    </div>
                    <div className='cardPrice'>
                        <div>Цена:</div>
                        <div>{item.Цена}</div>
                        <div>р.</div>
                    </div>
                </div>
            </div>
            <Box sx={{ width: '85%', typography: 'body1' }} className='pageBody'>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Характеристики" value="1" />
                            <Tab label="Описание" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <div className='cardData'>
                            <div className='cardParams'>
                                <div>Производитель</div>
                                <div>{item.НоменклатураБрендПроизводитель}</div>
                                <div>Бренд</div>
                                <div>{item.НоменклатураБренд}</div>
                                <div>Модель</div>
                                <div>{item.НоменклатураМодель}</div>
                                <div>Раздел</div>
                                <div>{item.НоменклатураРодительРодитель}</div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value="2">
                        <div>
                            {item.НоменклатураКраткоеОписание}
                        </div>
                        <div>{item.НоменклатураОписание}</div>
                    </TabPanel>
                </TabContext>
            </Box>
        </>
    );
};

export default CatalogPage;