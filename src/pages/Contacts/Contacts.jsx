import '../../App.scss'
import './Contacts.scss'
import Divider from "@mui/material/Divider";
import ContactsIcon from '@mui/icons-material/Contacts';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ListItem from "@mui/material/ListItem";
import PhoneIcon from '@mui/icons-material/Phone';
import List from "@mui/material/List";
import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map';
import Slider from "../../Slider/Slider";
import {Map, Placemark, YMaps, ZoomControl} from "react-yandex-maps";
import Paper from "@mui/material/Paper";
import StoreIcon from "@mui/icons-material/Store";

const Contacts = () => {
    const schedule = [
        {day: 'Понедельник', time: 'Выходной', id: 1},
        {day: 'Вторник', time: '09:00 - 20:00', id: 2},
        {day: 'Среда', time: '09:00 - 20:00', id: 3},
        {day: 'Четверг', time: '09:00 - 20:00', id: 4},
        {day: 'Пятница', time: '09:00 - 20:00', id: 5},
        {day: 'Суббота', time: '09:00 - 20:00', id: 6},
        {day: 'Воскресенье', time: '09:00 - 20:00', id: 7},
    ]
    const date = new Date();
    const day = date.getDay();

    const scheduleMap = schedule.map((item, i) => {
        const active = 'active1';
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

    const coordinates = [ [58.00103636683891,56.225435245232624],];

    return (
        <>
            <Slider/>

            <div className='paddingTB blockTitle'><ContactsIcon className='iconAlign' color="primary" />Контакты</div>
            <div className='blocks paddingTB'>
                <div>
                    <div><HomeIcon fontSize="large" color="primary"/></div>
                    <div>г. Пермь, </div>
                    <div>ул. Борчанинова 62</div>
                </div>
                <div>
                    <div><StoreIcon fontSize="large" color="primary"/></div>
                    <div>Магазин</div>
                    <div>Веломаркет «Колесо»</div>
                </div>
                <div>
                    <div><PhoneIcon fontSize="large" color="primary"/></div>
                    <div>Телефон</div>
                    <div>+7 (902) 471-37-69</div>
                </div>
            </div>

            <div className='paddingTB blockTitle'><ScheduleIcon className='iconAlign' color="primary" /> Время работы</div>
            <div className='pageBody'>
                <Paper sx={{mb: '15px'}}>
                    <List>
                        {scheduleMap}
                    </List>
                </Paper>
            </div>


            <div className='paddingTB blockTitle'><MapIcon className='iconAlign' color="primary" /> Как к нам доехать</div>
            <div className='pageBody'>
                <Paper elevation={3}>
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
                </Paper>
            </div>
         </>
    );
};

const View = ({item, active}) =>{
    const css = active || ''
    return (
        <>
            <ListItem button disablePadding className={`work ${css} grids`}>
                <div className='day'>{item.day}</div>
                <div className='time'>{item.time}</div>
            </ListItem>
            <Divider />
        </>
    )
}

export default Contacts;