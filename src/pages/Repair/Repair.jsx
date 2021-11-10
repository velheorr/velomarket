import React, {useEffect, useState} from 'react';
import s from "./Repair.module.css";
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import Divider from "@mui/material/Divider";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';

import repairPrice from '../../Data/file_.json'

const Repair = () => {
    const [price ,setPrice] = useState(null)
    const x = repairPrice.filter(i => (i.ТипНоменклатуры === 'Услуга'))
    useEffect(()=>{
        setPrice(x)
    },[])
    console.log(repairPrice)

    let listItems
    if (price) {
        listItems = price.map((item, i)=> <View key={i} item={item}/>)
    }


    return (
        <>
            <div className={`${s.grey_txt}`}>
                <h2><HomeRepairServiceIcon fontSize="small"/> Сервис и Ремонт</h2>
                <Divider/>
                <p>Прайс</p>
            </div>
             {listItems}

        </>
    );
};

const View = ({item})=>{
    const {НоменклатураРодитель, НоменклатураБренд, Номенклатура, Цена} = item
    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper', borderBottom: '1px solid #e0e0e0' }} aria-label="contacts" >
            <ListItem disablePadding>
                <ListItemButton className={s.tablePrice}>
                    {/*<ListItemIcon>
                        <StarIcon />
                    </ListItemIcon>*/}
                    <ListItemText primary={НоменклатураРодитель}/>
                    <ListItemText primary={НоменклатураБренд}/>
                    <ListItemText   secondary={Номенклатура} />
                    <ListItemText   secondary={`${Цена}р`} />
                </ListItemButton>
            </ListItem>
        </List>
    )
}


export default Repair;