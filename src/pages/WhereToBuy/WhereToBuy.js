import React from 'react';
import Divider from "@mui/material/Divider";
import MapIcon from "@mui/icons-material/Map";
import s from './WhereToBuy.module.css'

import {YMaps, Map, Placemark, ZoomControl} from 'react-yandex-maps';
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import List from "@mui/material/List";
import Slider from "../../Slider/Slider";


const WhereToBuy = () => {
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
            <ListItem disablePadding className={s.menuHeader}>
                <ListItemIcon><MapIcon color='primary'/></ListItemIcon>
                <ListItemText primary="Как к нам доехать"/>
            </ListItem>
            <Divider/>
            <List>
                <ListItem>
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText secondary='Мы находимся в 5 минутах ходьбы от остановки "Автовокзал"' />
                </ListItem>
            </List>

            <div className={s.map}>
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

export default WhereToBuy;