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
import {clearSymbol, imgURL, imgURLerror} from "../../../assets/functions";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Fancybox from "../../../assets/FancyBox";
import Loader from "../../../assets/loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import {api} from "../../../api/api";
import {getFullCatalog} from "../CatalogSlice";


const CatalogPage = () => {
    const {itemId} = useParams()
    const [item, setItem] = useState('');
    const [value, setValue] = useState('1');
    const dispatch = useDispatch();

    useEffect(() => {
        fullData()
    }, [item])

    const fullCatalog = useSelector(state => state.catalog.fullCatalog)
    const fullData = async ()=>{
        const dataInfo = await api.getData()
        dispatch(getFullCatalog(dataInfo))
        setItem(fullCatalog.find(i => i.НоменклатураКод === itemId))
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const backBTN = ()=>{
        let parentPath = `/`
        if(item){parentPath = `/catalogs/${item.ПутьПапки.split('\\')[0]}`}
        return parentPath
    }

    const strSplit = ()=>{
        if (item){
            const str = item.НоменклатураОписание.split('\n').map((item, i) => <p key={i}>{item}</p>)
            return str
        }
    }
    const itemDescription = strSplit()

    const renderMoreImg = ()=>{
        let arr = []
        if (item){ arr = item.ДопКартинки.split(',')}
        return arr.map((img, i)=>{
            return <span key={i} data-fancybox="gallery" data-src={imgURL(item.ПутьКартинок, img)}><img className='extraImg' src={imgURL(item.ПутьКартинок, img)} alt='img'/></span>
        })
    }
    const extraImg = renderMoreImg()

    return (
        <Fancybox options={{ infinite: false }}>
            <Slider/>
            <ListItem disablePadding className='pageTitle'>
                <Link to={backBTN}>
                    <Button variant="outlined" startIcon={<ArrowBackIcon/>}>Назад</Button>
                </Link>
                <ListItemText className='breadcrump' primary="Описание товара"/>
            </ListItem>
            <Divider/>

            <div className='pageBody'>
                {item
                    ?
                        <>
                            <div className='itemPath'>{item.ПутьПапки}</div>
                            <div className='itemTitle'>{item.Номенклатура}</div>
                            <div className='itemImg'>
                                <img
                                    style={{cursor: 'pointer'}}
                                    src={imgURL(item.ПутьКартинок, item.ОснКартинка)}
                                    height={300}
                                    alt="veloamarketkoleso.ru"
                                    onError={imgURLerror}
                                    data-fancybox="gallery"
                                    data-src={imgURL(item.ПутьКартинок, item.ОснКартинка)}/>
                            </div>
                            <Paper sx={{width: '100%',backgroundColor: '#ffffffed', pt: 1}} className='imgList'>
                                <span data-fancybox="gallery" data-src={imgURL(item.ПутьКартинок, item.ОснКартинка)}><img className='extraImg' src={imgURL(item.ПутьКартинок, item.ОснКартинка)} alt='img'/></span>
                                {extraImg.length > 0 ? extraImg : ''}
                            </Paper>

                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleChange} aria-label="tabsCard">
                                        <Tab label="Характеристики" value="1" />
                                        <Tab label="Описание" value="2" />
                                    </TabList>
                                </Box>
                                <Paper sx={{width: '100%', backgroundColor: '#ffffffed', minHeight: 200}}>
                                    <TabPanel value="1">
                                        <div>{item.НоменклатураКраткоеОписание}</div>
                                        {itemDescription? <div>{itemDescription}</div> : <div>Данные отсутствуют...</div>}
                                    </TabPanel>
                                    <TabPanel value="2">
                                        <div className='cardData'>
                                            <div className='cardParams'>
                                                <div>Артикул:</div><div>{item.НоменклатураАртикул}</div>
                                                <div>Арт. производителя:</div><div>{item.НоменклатураАртикулПроизв}</div>
                                                <div>Бренд:</div><div>{clearSymbol(item.НоменклатураБренд)}</div>
                                                <div>Модель:</div><div>{clearSymbol(item.НоменклатураМодель)}</div>
                                                <div>Раздел:</div><div>{item.НоменклатураРодительРодитель}</div>
                                                <div>Размер:</div><div>{item.Размер}</div>
                                                <div>Тип:</div><div>{item.Тип}</div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                </Paper>
                            </TabContext>
                        </>
                    :
                    <Loader/>
                }
            </div>
        </Fancybox>
    );
};

export default CatalogPage;