import React from "react";
import s from './Contacts.module.scss'
import Divider from "@mui/material/Divider";
import ContactsIcon from '@mui/icons-material/Contacts';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PhoneIcon from '@mui/icons-material/Phone';
import List from "@mui/material/List";
import HomeIcon from '@mui/icons-material/Home';
import Slider from "../../Slider/Slider";


const Contacts = () => {
    const schedule = [
        {day: 'Понедельник', time: 'Выходной', id: 1},
        {day: 'Вторник', time: '09:00 - 19:00', id: 2},
        {day: 'Среда', time: '09:00 - 19:00', id: 3},
        {day: 'Четверг', time: '09:00 - 19:00', id: 4},
        {day: 'Пятница', time: '09:00 - 19:00', id: 5},
        {day: 'Суббота', time: '09:00 - 19:00', id: 6},
        {day: 'Воскресенье', time: '09:00 - 19:00', id: 7},
    ]
    const date = new Date();
    const day = date.getDay();

    const scheduleMap = schedule.map((item, i) => {
        if(item.id === day && item.id !== 1) {
            return <View item={item} key={i} active={s.active} />
        } else if (item.id === 1){
            return <View item={item} key={i} active={s.holiday} />
        }
        return <View item={item} key={i} />
    });

    return (
        <div>
            <Slider/>
            <ListItem disablePadding className={s.menuHeader}>
                <ListItemIcon><ContactsIcon color='primary'/></ListItemIcon>
                <ListItemText primary="Контакты"/>
            </ListItem>
            <Divider/>

            <List>
                <ListItem>
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText secondary="г. Пермь Борчанинова 62 Веломаркет «Колесо»" />
                </ListItem>
                <ListItem>
                    <ListItemIcon><PhoneIcon /></ListItemIcon>
                    <ListItemText secondary="тел: +7 (902) 471-37-69" />
                </ListItem>
                <ListItem>
                    <ListItemIcon><PhoneIcon /></ListItemIcon>
                    <ListItemText secondary="тел: +7 (902) 808-22-68" />
                </ListItem>
            </List>
            <Divider/>


            <ListItem disablePadding className={s.menuHeader}>
                <ListItemIcon><ScheduleIcon color='primary'/></ListItemIcon>
                <ListItemText primary="Время работы"/>
            </ListItem>
            <Divider/>
            {scheduleMap}
         </div>
    );
};

const View = ({item, active}) =>{
    return (
        <div className={`${s.work} ${active}`} >
            <div className={s.day}>{item.day}</div>
            <div className={s.time}>{item.time}</div>
        </div>
    )
}

export default Contacts;