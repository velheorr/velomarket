import s from './Contacts.module.css'
import Divider from "@mui/material/Divider";

import ContactsIcon from '@mui/icons-material/Contacts';
import ScheduleIcon from '@mui/icons-material/Schedule';
import MapIcon from '@mui/icons-material/Map';
import map from './img/map.jpg'

const Contacts = () => {
    return (
        <div className={`${s.grey_txt} ${s.pagePadding}`}>
            <h2><ContactsIcon fontSize="small"/> Контакты</h2>
            <Divider/>
            <p>г. Пермь Борчанинова 62 Веломаркет «Колесо»</p>
            <p>тел: +7 (902) 471-37-69</p>
            <p>тел: +7 (902) 808-22-68</p>

            <h2><ScheduleIcon fontSize="small"/> График работы</h2>
            <Divider/>
            <p>понедельник-пятница с 10:00 до 19:00</p>
            <p>Суббота,Воскресение: выходной</p>



            <h2><MapIcon fontSize="small"/> Как к нам доехать</h2>
            <Divider/>
            <p>Мы находимся в 5 минутах ходьбы...</p>
            <img src={map} alt=""/>
        </div>
    );
};

export default Contacts;