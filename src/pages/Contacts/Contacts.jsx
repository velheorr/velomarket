import s from './Contacts.module.scss'
import Divider from "@mui/material/Divider";

import ContactsIcon from '@mui/icons-material/Contacts';
import ScheduleIcon from '@mui/icons-material/Schedule';


const Contacts = () => {
    const schedule = [
        {day: 'Понедельник', time: 'Выходной'},
        {day: 'Вторник', time: '09:00 - 19:00'},
        {day: 'Среда', time: '09:00 - 19:00'},
        {day: 'Четверг', time: '09:00 - 19:00'},
        {day: 'Пятница', time: '09:00 - 19:00'},
        {day: 'Суббота', time: '09:00 - 19:00'},
        {day: 'Воскресенье', time: '09:00 - 19:00'},
    ]

    const schedulMap = schedule.map(item => <View item={item} />)



    return (
        <div className={`${s.grey_txt}`}>
            <h2><ContactsIcon fontSize="small"/> Контакты</h2>
            <Divider/>
            <p>г. Пермь Борчанинова 62 Веломаркет «Колесо»</p>
            <p>тел: +7 (902) 471-37-69</p>
            <p>тел: +7 (902) 808-22-68</p>

            <h2><ScheduleIcon fontSize="small"/> Время работы</h2>
            <Divider/>

                {schedulMap}






        </div>
    );
};

const View = ({item}) =>{
    return (
        <div className={s.work}>
            <div className={s.day}>{item.day}</div>
            <div className={s.time}>{item.time}</div>
        </div>
    )
}

export default Contacts;