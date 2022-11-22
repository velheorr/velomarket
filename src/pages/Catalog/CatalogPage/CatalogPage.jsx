import React, {useEffect, useState} from 'react';
import './CatalogPage.scss'
import {Link, useParams} from 'react-router-dom';

import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabPanel, TabList, TabContext } from '@mui/lab';
import {clearSymbol, imgURL} from "../../../assets/functions";

import Fancybox from "../../../assets/FancyBox";
import Loader from "../../../assets/loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import {api} from "../../../api/api";
import {getFullCatalog} from "../CatalogSlice";
import TitleBlock from "../../../elements/TitleBlock";
import ImgForCatalogPage from "../../../elements/ImgForCatalogPage";


const CatalogPage = () => {
    const {itemId} = useParams()
    const [item, setItem] = useState('');
    const [value, setValue] = useState('2');
    const [image, setImage] = useState('')
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
            return item.НоменклатураОписание.split('\n').map((item, i) => <p key={i}>{item}</p>)
        }
    }
    const itemDescription = strSplit()

    const imgClick = (funcImg, e)=>{
        e.preventDefault()
        setImage(funcImg)
    }

    const renderMoreImg = ()=>{
        let arr = []

        if (item && item.ДопКартинки.includes('.')){
            arr = item.ДопКартинки.split(',')
        }
        if (item){arr.unshift(item.ОснКартинка)}
        return arr.map((img, i)=>{
            const funcImg = imgURL(item.ПутьКартинок, img)
            return <div key={i}  data-fancybox="gallery" data-src={imgURL(item.ПутьКартинок, img)} onClick={(e)=>imgClick(funcImg, e)}>
                <img className='extraImg' src={imgURL(item.ПутьКартинок, img)} alt='img'/>
            </div>
        })
    }
    const extraImg = renderMoreImg()



    return (
        <Fancybox options={{ infinite: false }}>
            <TitleBlock name={"Описание товара"} />
            <div className='backBTN'>
                <Link to={backBTN}>
                    <Button variant="outlined" startIcon={<ArrowBackIcon/>}>Назад</Button>
                </Link>
            </div>


            <div className='pageBody'>
                {item
                    ?
                        <>
                            <div className='itemPath'>{item.ПутьПапки}</div>
                            <div className='itemTitle'>{item.Номенклатура}</div>

                            <div className='itemImgBlock'>
                                <div className='imgList'>
                                    {extraImg}
                                </div>
                                <div className='itemImg'>
                                    <ImgForCatalogPage mainImg={image} item={item}/>
                                </div>
                            </div>

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

