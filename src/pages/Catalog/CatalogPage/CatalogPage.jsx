import React, {useEffect, useState} from 'react';
import './CatalogPage.scss'
import { useParams} from 'react-router-dom';
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabPanel, TabList, TabContext } from '@mui/lab';
import {clearSymbol, imgURL, splitAndSHowParagraph} from "../../../assets/functions";
import Fancybox from "../../../assets/FancyBox";
import Loader from "../../../assets/loader/Loader";
import TitleBlock from "../../../elements/TitleBlock";
import ImgForCatalogPage from "../../../elements/ImgForCatalogPage";
import Breadcrumb from "../../../elements/Breadcrumb";
import BrandLogo from "../../../elements/BrandLogo";
import Price from "../../../elements/Price";
import {useGetCatalogData} from "../../../api/useGetData";




const CatalogPage = () => {
    const {data: catalog, isLoading, isError} = useGetCatalogData()
    const {itemId} = useParams()
    const [item, setItem] = useState('');
    const [value, setValue] = useState('2');
    const [image, setImage] = useState('')

    const [parent, setParent] = useState('')
    const findParent = (cat) => {
        if (cat){
            let x = (cat.ПутьПапки).split('\\')[0]
            setParent(x)
            console.log(cat)
        }

    }
    useEffect(()=>{
        if (catalog){
            let newCat = catalog.find(i => {
                if (i.НоменклатураКод === itemId){
                    return i
                }
            })
            findParent(newCat)
            setItem(newCat)
        }
    },[catalog, parent])




    const handleChange = (event, newValue) => {setValue(newValue)}; //табы

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

    const notAvailable = () =>{
        if (item.ВНаличии < 1 && item.ВНаличии === ''){return true}
    }


    if (isLoading && item) {return <Loader/>}
    if (isError) {return <h3>Нет подключения к серверу</h3>}
    if (!catalog) {return <h3>Нет данных с сервера</h3>}

    return (
        <Fancybox options={{ infinite: false }}>
            <TitleBlock name={"Описание товара"} />
            { item && <Breadcrumb backData={parent} backTitle={item.НоменклатураРодительРодитель} />}
            <div className='pageBody' style={{minHeight: '300px'}}>
                {
                    item && <>
                        <div className='itemTitle'>{item.Номенклатура}</div>
                        <div className='itemImgBlock'>
                            <div className='imgList'>{extraImg}</div>
                            <div className='itemImg'>
                                <ImgForCatalogPage mainImg={image} item={item}/>
                            </div>
                            {notAvailable()
                                ? <div className='noAvailableCatPage'>Нет в наличии</div>
                                : <Price data={item.Цена}/>}
                            <BrandLogo data={item.НоменклатураБренд}/>

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
                                    {item
                                        ? <div>{splitAndSHowParagraph(item.НоменклатураОписание)}</div>
                                        : <div>Данные отсутствуют...</div>
                                    }
                                </TabPanel>
                                <TabPanel value="2">
                                    <div className='cardData'>
                                        <div className='cardTitle'>
                                            <div>Артикул:</div>
                                            <div>Арт. производителя:</div>
                                            <div>Бренд:</div>
                                            <div>Модель:</div>
                                            <div>Раздел:</div>
                                            <div>Размер:</div>
                                            <div>Тип:</div>
                                        </div>
                                        <div className="cardText">
                                            <div>{item.НоменклатураАртикул}</div>
                                            <div>{item.НоменклатураАртикулПроизв}</div>
                                            <div>{clearSymbol(item.НоменклатураБренд)}</div>
                                            <div>{clearSymbol(item.НоменклатураМодель)}</div>
                                            <div>{item.НоменклатураРодительРодитель}</div>
                                            <div>{item.Размер}</div>
                                            <div>{item.Тип}</div>
                                        </div>
                                    </div>
                                </TabPanel>
                            </Paper>
                        </TabContext>
                    </>
                }
            </div>
        </Fancybox>
    );
};

export default CatalogPage;

