import React, {useEffect, useState} from 'react';
import s from "./Repair.module.css";
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import Divider from "@mui/material/Divider";
import ListItemText from '@mui/material/ListItemText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import repairPrice from '../../Data/file_.json'

import Paper from '@mui/material/Paper';
import MenuList from "@mui/material/MenuList";
import Typography from "@mui/material/Typography";

const Repair = () => {
    const [price ,setPrice] = useState(null)
    /*const x = repairPrice.filter(i => (i.ТипНоменклатуры === 'Услуга'))*/
    const selectMenu = [
        {val:'УСЛУГИ', name: 'Услуги'},
        {val: '01.PIT-STOP(Тех-обслуживание)', name: 'PIT-STOP Тех-обслуживание'},
        {val: '02.РУЛЕВАЯ', name: 'Рулевая'},
        {val: '03.ТОРМОЗА', name: 'Тормоза'},
        {val: '04.ТРАНСМИССИЯ', name: 'Трансмиссия'},
        {val: '05.ХОДОВАЯ', name: 'Ходовая'},
        {val: '06.ТЮНИНГ', name: 'Тюнинг'},
        {val: '07.ПОДВЕСКА', name: 'Подвеска'},
        {val: '08.ВЕЛОРАЗБОР', name: 'Велоразбор'},
        {val: '09.РЕМОНТ САМОКАТОВ', name: 'Ремонт самокатов'},
        {val: '10.ЗИМА', name: 'Зима'}
    ]
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
        listItems = price.map((item, i)=> <View key={i} item={item}/>)
    }

    /*const y = Object.values(repairPrice).map((i) =>{console.log(i.НоменклатураРодитель)})*/


    return (
        <>
            <div className={`${s.grey_txt}`}>
                <h2><HomeRepairServiceIcon fontSize="small"/> Сервис и Ремонт</h2>
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
                <MenuList>
             {price ? listItems : null}
                </MenuList>
            </Paper>
        </>
    );
};

const View = ({item})=>{
    const {НоменклатураБренд, Номенклатура, Цена} = item
    return (
        <>
            <MenuItem>
                {/*<ListItemIcon>
                        <ContentCut fontSize="small" />
                    </ListItemIcon>*/}
                <ListItemText>{НоменклатураБренд}</ListItemText>
                <ListItemText>{Номенклатура}</ListItemText>
                <Typography variant="body2" color="text.secondary">{Цена}р</Typography>

            </MenuItem>
            <Divider />
        </>
    )
}

export default Repair;








