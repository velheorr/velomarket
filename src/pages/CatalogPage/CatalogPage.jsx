import React, {useEffect, useState} from 'react';
import './CatalogPage.scss'
import {Link, useParams} from 'react-router-dom';
import Slider from "../../Slider/Slider";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Paper from "@mui/material/Paper";

import goods from '../../Data/goods.json';
import noimg from '../Catalog/img/noimg.png'
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabPanel, TabList, TabContext } from '@mui/lab';


const CatalogPage = () => {
    const {pageId} = useParams()
    const [item, setItem] = useState(null);
    console.log(pageId)
    /*console.log(goods)*/
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        getData(goods)
    }, [pageId])

    const getData = (goods) =>{
        const item = goods.find(i => i.НоменклатураКод === pageId)
        /*return {
            name: item.Номенклатура
        }*/
        setItem(item)
    }

    /*console.log(item)*/
    if (!item) {
        return setItem({'Номенклатура':''})
    }

    return (
        <>
            <Slider/>
            <h2>
                <Link to={'/catalog'}>
                    <Button variant="outlined" startIcon={<ArrowBackIcon/>}>Назад</Button>
                </Link>
                <span className='breadcrump'>Описание товара</span>
            </h2>
            <Divider/>


            <div className='cardInfo'>
                <Paper sx={{width: '100%', maxWidth: '100%', backgroundColor: '#ffffffed'}} className='cardImg'>
                    <img
                        src={noimg}
                        alt="veloamarketkoleso.ru"
                    />
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
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Характеристики" value="1" />
                            {/*<Tab label="Описание" value="2" />*/}
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <div className='cardData'>
                            <div className='cardParams'>
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

                    </TabPanel>
                </TabContext>
            </Box>




        </>
    );
};

export default CatalogPage;