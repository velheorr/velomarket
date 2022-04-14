import {useEffect, useState} from 'react';
import '../../App.scss'
import "./Repair.scss";
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import Divider from "@mui/material/Divider";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import repairPrice from '../../Data/data.json'

import Paper from '@mui/material/Paper';
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Slider from "../../Slider/Slider";
import {sortData} from "../../assets/functions";


const Repair = () => {
    const [options, setOptions] = useState([])
    const [price ,setPrice] = useState([])
    const [select, setSelect] = useState('');

    const handleChange = (event) => {
        setSelect(event.target.value);
        makePrice(event.target.value)
    };

    useEffect(()=>{
        makePrice('УСЛУГИ')
        prepareSelectOptions(repairPrice)
    },[])


    const prepareSelectOptions = (services)=>{
        const ss = services.filter(i => i.ТипНоменклатуры === 'Услуга')
        let prepareOptions = []
        ss.forEach(i => {
            if(!prepareOptions.includes(i.НоменклатураРодитель)){
                prepareOptions.push(i.НоменклатураРодитель)
            }
        })
        setOptions(prepareOptions)
    }

    const renderSelectOptions = options.map((item, i)=> {
        let str = item.replace(/[0-9.]/g, '')
        return <MenuItem key={i} value={item}>{str}</MenuItem>
    })

    const makePrice = (type)=>{
        const x = repairPrice.filter(i => (i.НоменклатураРодитель === type))
        const xSorted = sortData(x, 'НоменклатураБренд')
        setPrice(xSorted)
    }

    const renderListItems = (price) => {
        const data = price.map((item, i) => {
            return <View key={i} item={item}/>
        })
        return data
    }
    let listItems = renderListItems(price)

    return (
        <>
            <Slider/>
            <ListItem disablePadding className='pageTitle'>
                <ListItemIcon><HomeRepairServiceIcon color='primary'/></ListItemIcon>
                <ListItemText primary="Сервис и Ремонт"/>
            </ListItem>

            <div className='pageBody'>
                <FormControl sx={{ m: 1, minWidth: 250, ml: 0 }}>
                    <InputLabel id="repairSelect">Услуги</InputLabel>
                    <Select
                        labelId="repairSelect" id="demo-simple-select-autowidth"
                        value={select}
                        onChange={handleChange}
                        autoWidth  label="Вид услуги"
                    >
                        {renderSelectOptions}
                    </Select>
                </FormControl>
                <Paper sx={{width: '100%', maxWidth: '100%', backgroundColor: '#ffffffed'}}>
                    <div className='listTitle'>
                        <div>Услуга</div>
                        <div>Описание</div>
                        <div>Цена</div>
                    </div>
                    {listItems}
                </Paper>
            </div>
        </>
    );
};

const View = ({item})=>{
    const {НоменклатураБренд, Номенклатура, Цена} = item;
    const txt = НоменклатураБренд.split('_').join(' ')
    return (
        <div className='list'>
            <div>{txt}</div>
            <div>{Номенклатура}</div>
            <div>{Цена}р</div>
        </div>
    )
}

export default Repair;








