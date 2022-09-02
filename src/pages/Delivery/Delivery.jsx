import '../../App.scss'
import './Delivery.scss'

import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StoreIcon from '@mui/icons-material/Store';
import HomeIcon from '@mui/icons-material/Home';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

import Slider from "../../Slider/Slider";
import {useEffect, useState} from "react";
import {api} from "../../api/api";
import Loader from "../../assets/loader/Loader";


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
            <Slider/>

            <div className='paddingTB blockTitle'>Способы оплаты</div>
            <div className='blocks paddingTB'>
                <div>
                    <div><QrCodeScannerIcon fontSize="large" color="primary"/></div>
                    <div>Оплата через QR Код</div>
                </div>
                <div>
                    <div><CreditCardIcon fontSize="large" color="primary"/></div>
                    <div>Банковской картой</div>
                </div>
                <div>
                    <div><CurrencyRubleIcon fontSize="large" color="primary"/></div>
                    <div>Наличными в магазине</div>
                </div>
            </div>

            <div className='paddingTB blockTitle'>Самовывоз</div>
            {
                 !contact
                 ? <Loader/>
                 : <div className='blocks paddingTB'>
                     <div>
                         <div><HomeIcon fontSize="large" color="primary"/></div>
                         <div>г. Пермь, </div>
                         <div>{contact.street}</div>
                     </div>
                     <div>
                         <div><StoreIcon fontSize="large" color="primary"/></div>
                         <div>Магазин</div>
                         <div>{contact.name}</div>
                     </div>
                 </div>
            }

            <div className='paddingTB blockTitle'>Курьерская доставка на дом</div>
            {
                !delivery
                ? <Loader/>
                : <div className='blocks paddingTB'>
                        <div>
                        <div><AccessTimeIcon fontSize="large" color="primary"/></div>
                        <div>Время доставки</div>
                        <div>{delivery.time}</div>
                    </div>
                    <div>
                        <div><DeliveryDiningIcon fontSize="large" color="primary"/></div>
                        <div>Стоимость доставки</div>
                        <div>{delivery.price}</div>
                    </div>
                    <div>
                        <div><LocalShippingIcon fontSize="large" color="primary"/></div>
                        <div>В отдаленные районы</div>
                        <div>{delivery.price2}</div>
                    </div>
                </div>
            }

        </>
)
};

export default Delivery;