import React from 'react';
import Divider from "@mui/material/Divider";
import MapIcon from "@mui/icons-material/Map";
import s from './WhereToBuy.module.css'

import {YMaps, Map, Placemark, ZoomControl} from 'react-yandex-maps';


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
        <div className={`${s.grey_txt}`}>
            <h2><MapIcon fontSize="small"/> Как к нам доехать</h2>
            <Divider/>
            <p>Наш адрес: ул. Борчанинова 62, за Центральным рынком</p>

            {/*<p>Мы находимся в 5 минутах ходьбы от остановки "Автовокзал"</p>*/}
            <div className={s.map}>
                <YMaps>
                    <Map width='100%' height='450px' defaultState={mapData}>{coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
                        <ZoomControl options={{ float: 'right' }} />
                    </Map>
                </YMaps>
            </div>
        </div>
    );
};

export default WhereToBuy;