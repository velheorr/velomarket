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
import {Map, Placemark, YMaps, ZoomControl} from "react-yandex-maps";
import Paper from "@mui/material/Paper";
import StoreIcon from "@mui/icons-material/Store";
import {api} from "../../api/api";
import React, {useEffect, useState} from "react";
import Loader from "../../assets/loader/Loader";
import EventIcon from '@mui/icons-material/Event';
import TitleBlock from "../../elements/TitleBlock";
import PinDropIcon from '@mui/icons-material/PinDrop';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import BlockInfo from "../../elements/BlockInfo";

const Contacts = () => {
    const [sched, setSched] = useState([]);
    const [contact, setContact] = useState({})
    const [notice, setNotice] = useState('')

    useEffect(()=>{
        fullData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const date = new Date();
    const day = date.getDay();

    const checkSchedMounth = (config)=>{
        const currMounth = date.getMonth() + 1
        if (currMounth === 9 ||currMounth === 10 || currMounth === 3){
            setSched(config.schedule2)
        } else {setSched(config.schedule)}

        const currentNotice = config.notice.find(i => {
            if(i.date - currMounth === 1){return i}
        });
        setNotice(currentNotice);

    }

    const fullData = async ()=>{
        const config = await api.getConfig()
        checkSchedMounth(config)
        setContact(config.contact)
    }

    const scheduleMap = sched.map((item, i) => {
        const active = 'active1';
        const holiday = item.off ? 'holiday' : ''

        if(item.id === day) {
            return <View item={item} key={i} active={active} holiday={holiday}/>
        }
        return <View item={item} key={i} holiday={holiday}/>
    });

    const mapData = {
        center: [58.00103636683891,56.225435245232624],
        zoom: 16,
        size: [600, 600],
    };

    const coordinates = [ [58.00103636683891,56.225435245232624],];

    return (
        <>
            <TitleBlock name='Контакты' icon={<ContactsIcon className="iconAlign" color="primary" />}/>
            <div className='subTitle'><PinDropIcon className='iconAlign' color="primary" /> Наш адрес</div>
            {
                !contact
                    ? <Loader/>
                    : <div className='blocks'>
                        <BlockInfo icon={<HomeIcon fontSize="large" color="primary"/>} title={'г. Пермь,'} text={contact.street}/>
                        <BlockInfo icon={<StoreIcon fontSize="large" color="primary"/>} title={'Магазин'} text={contact.name}/>
                        <BlockInfo icon={<PhoneIcon fontSize="large" color="primary"/>} title={'Телефон'} text={contact.phone}/>
                    </div>
            }
            <div className='subTitle'><ScheduleIcon className='iconAlign' color="primary" /> Время работы</div>
            {
                !sched
                    ? <Loader/>
                    : <div className="scheduleBlock">
                        <Paper>
                            <List>
                                {scheduleMap}
                            </List>
                        </Paper>
                    </div>
            }
            <div className='notice'>
                {notice
                    ?
                    <div style={{display: 'inline-flex'}}>
                        <NewReleasesIcon fontSize='large' className='iconAlign' color="warning" />
                        <div>
                            *Обратите внимание, что с <b>{notice.text}</b> магазин будет работать <b>{notice.time}</b>,
                            <span className='holiday'> понедельник - выходной</span>
                        </div>
                    </div>
                    :
                    ''
                }
            </div>

            <div className='subTitle'><MapIcon className='iconAlign' color="primary" /> Как к нам доехать</div>
            <div className='yaMap'>
                <YMaps>
                    <Map width='100%' height='450px' defaultState={mapData}>{coordinates.map((coordinate, i) =>
                        <Placemark
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
                        <ZoomControl options={{float: 'right'}}/>
                    </Map>
                </YMaps>
            </div>



         </>
    );
};

const View = ({item, active, holiday}) =>{
    return (
        <>
            <ListItem button disablePadding className={`work ${holiday} ${active}`}>
                <div className='icon'><EventIcon/></div>
                <div className='day'>{item.day}</div>
                <div className='time'>{item.time}</div>
            </ListItem>
            <Divider />
        </>
    )
}

export default Contacts;