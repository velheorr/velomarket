import React, {useEffect, useState} from 'react';
import './CatalogPage.scss'
import {Link, useParams} from 'react-router-dom';
import Slider from "../../Slider/Slider";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Paper from "@mui/material/Paper";

import goods from '../../Data/goods.json';
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabPanel, TabList, TabContext } from '@mui/lab';


const CatalogPage = () => {
    const {pageId} = useParams()
    const [item, setItem] = useState(null);
    console.log(pageId)
    console.log(goods)
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

    console.log(item)
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
                        src="data:image/jpeg;base64,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"
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