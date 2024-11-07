import '../../App.scss'
import './Delivery.scss'

import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StoreIcon from '@mui/icons-material/Store';
import HomeIcon from '@mui/icons-material/Home';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QrCodeIcon from '@mui/icons-material/QrCode';

import React, {useEffect, useState} from "react";
import {api} from "../../api/api";
import Loader from "../../assets/loader/Loader";
import TitleBlock from "../../elements/TitleBlock";
import BlockInfo from "../../elements/BlockInfo";



const Delivery = () => {
    const [contact, setContact] = useState({});
    const [delivery, setDelivery] = useState({});

    useEffect(()=>{
        fullData()
    }, [])

    const fullData = async ()=>{
        const config = await api.getConfig()
        setDelivery(config.delivery)
        setContact(config.contact)
    }

    return (
        <>
            <TitleBlock name='Оплата и доставка' icon={<StoreIcon className='iconAlign' color="primary"/>}/>
            <div className='paddingTB blockTitle'>Способы оплаты</div>
            <div className='blocks'>
                <BlockInfo icon={<CreditCardIcon fontSize="large" color="primary"/>} title={'Банковской картой'}/>
                <BlockInfo icon={<QrCodeIcon fontSize="large" color="primary"/>} title={'QR кодом'}/>
                <BlockInfo icon={<CurrencyRubleIcon fontSize="large" color="primary"/>} title={'Наличными в магазине'}/>
            </div>

            <div className='paddingTB blockTitle'>Самовывоз</div>
            {
                !contact
                ? <Loader/>
                : <div className='blocks'>
                    <BlockInfo icon={<HomeIcon fontSize="large" color="primary"/>} title={'г. Пермь,'} text={contact.street}/>
                    <BlockInfo icon={<StoreIcon fontSize="large" color="primary"/>} title={'Магазин'} text={contact.name}/>
                </div>
            }

            <div className='paddingTB blockTitle'>Курьерская доставка на дом</div>
            {
                !delivery
                ? <Loader/>
                : <div className='blocks'>
                    <BlockInfo icon={<AccessTimeIcon fontSize="large" color="primary"/>} title={'Время доставки'} text={delivery.time}/>
                    <BlockInfo icon={<DeliveryDiningIcon fontSize="large" color="primary"/>} title={'Стоимость доставки'} text={"300₽"}/>
                    <BlockInfo icon={<LocalShippingIcon fontSize="large" color="primary"/>} title={'В отдаленные районы'} text={'500₽'}/>
                </div>
            }
        </>
    )
};

export default Delivery;