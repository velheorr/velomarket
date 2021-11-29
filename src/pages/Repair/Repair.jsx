import React, {useEffect, useState} from 'react';
import s from "./Repair.module.css";
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import Divider from "@mui/material/Divider";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import repairPrice from '../../Data/file_.json'

import Paper from '@mui/material/Paper';
import {useSelector} from "react-redux";


const Repair = () => {
    const selectMenu = useSelector(state => state.repair.selectMenu);
    const [price ,setPrice] = useState(null)
    const [select, setSelect] = React.useState('УСЛУГИ');

    const handleChange = (event) => {
        setSelect(event.target.value);
        makePrice(event.target.value)
    };
    const selected = selectMenu.map((item, i)=> <MenuItem key={i} value={item.val}>{item.name}</MenuItem>)

    useEffect(()=>{
        makePrice()
    },[])

    let listItems
    const makePrice = (type = 'УСЛУГИ')=>{
        const x = repairPrice.filter(i => (i.НоменклатураРодитель === type))
        setPrice(x)
    }

    if (price) {
        let sort = price.sort((a, b)=> {
            if (a.НоменклатураБренд > b.НоменклатураБренд) {return 1}
            if (a.НоменклатураБренд < b.НоменклатураБренд) {return -1}
            return 0
        })
        listItems = sort.map((item, i)=>{
            return <View key={i} item={item}/>
        })
    }



    return (
        <>
            <div className={`${s.grey_txt}`}>
                <h2><HomeRepairServiceIcon fontSizeInherit/> Сервис и Ремонт</h2>
                <Divider/>
            </div>
            <FormControl sx={{ m: 1, minWidth: 250 }}>
                <InputLabel id="repairSelect">Вид услуги</InputLabel>
                <Select
                    labelId="repairSelect" id="demo-simple-select-autowidth"
                    value={select}
                    onChange={handleChange}
                    autoWidth  label="Вид услуги"
                >
                    {selected}
                </Select>
            </FormControl>
            <Paper sx={{width: '100%', maxWidth: '100%', backgroundColor: '#ffffffed'}}>
                    {price ? listItems : null}
            </Paper>
        </>
    );
};

const View = ({item})=>{
    const {НоменклатураБренд, Номенклатура, Цена} = item
    return (
        <div className={s.list}>
            <div>{НоменклатураБренд}</div>
            <div>{Номенклатура}</div>
            <div>{Цена}р</div>
        </div>
    )
}

export default Repair;








