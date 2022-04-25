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


const Delivery = () => {

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
            </div>

            <div className='paddingTB blockTitle'>Курьерская доставка на дом</div>
            <div className='blocks paddingTB'>
                <div>
                    <div><AccessTimeIcon fontSize="large" color="primary"/></div>
                    <div>Время доставки</div>
                    <div>с 18:00 до 22:00</div>
                </div>
                <div>
                    <div><DeliveryDiningIcon fontSize="large" color="primary"/></div>
                    <div>Стоимость доставки</div>
                    <div>200р</div>
                </div>
                <div>
                    <div><LocalShippingIcon fontSize="large" color="primary"/></div>
                    <div>В отдаленные районы</div>
                    <div>300р</div>
                </div>
            </div>

        </>
)
};

export default Delivery;