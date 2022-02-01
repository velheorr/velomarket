import React from "react";
import './Contacts.scss'
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
import {Map, Placemark, YMaps, ZoomControl} from "react-yandex-maps";


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
        const active = 'active';
        const holiday = 'holiday';

        if(item.id === day && item.id !== 1) {
            return <View item={item} key={i} active={active} />
        } else if (item.id === 1){
            return <View item={item} key={i} active={holiday} />
        }
        return <View item={item} key={i} />
    });

    const mapData = {
        center: [58.00103636683891,56.225435245232624],
        zoom: 16,
        size: [600, 600],
    };

    const coordinates = [
        [58.00103636683891,56.225435245232624],
    ];

    return (
        <div>
            <Slider/>
            <ListItem disablePadding className='pageTitle'>
                <ListItemIcon><ContactsIcon color='primary'/></ListItemIcon>
                <ListItemText primary="Контакты"/>
            </ListItem>
            <Divider/>

            <List className='pageBody'>
                <ListItem>
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText secondary="г. Пермь Борчанинова 62 Веломаркет «Колесо»" />
                </ListItem>
                <ListItem>
                    <ListItemIcon><PhoneIcon /></ListItemIcon>
                    <ListItemText secondary="тел: +7 (902) 471-37-69" />
                </ListItem>
            </List>

            <Divider/>
            <ListItem disablePadding className='pageTitle'>
                <ListItemIcon><ScheduleIcon color='primary'/></ListItemIcon>
                <ListItemText primary="Время работы"/>
            </ListItem>
            <Divider/>
            <div className='pageBody'>
                {scheduleMap}
            </div>

            <Divider/>
            <ListItem disablePadding className='pageTitle'>
                <ListItemIcon><ScheduleIcon color='primary'/></ListItemIcon>
                <ListItemText primary="Как к нам доехать"/>
            </ListItem>
            <Divider/>

            <div className='map pageBody'>
                <YMaps>
                    <Map width='100%' height='450px' defaultState={mapData}>{coordinates.map((coordinate, i) => <Placemark
                        key={i}
                        geometry={coordinate}
                        options={{
                            preset: "islands#blueStretchyIcon",
                            balloonCloseButton: false,
                            hideIconOnBalloonOpen: false
                        }}
                        properties={{
                            iconContent: 'Веломаркет "Колесо"',
                        }}
                    />)}
                        <ZoomControl options={{ float: 'right' }} />
                    </Map>
                </YMaps>
            </div>
         </div>
    );
};

const View = ({item, active}) =>{
    const css = active || ''
    return (
        <div className={`work ${css}`}>
            <div className='day'>{item.day}</div>
            <div className='time'>{item.time}</div>
        </div>
    )
}

export default Contacts;