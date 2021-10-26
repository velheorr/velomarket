import React from 'react';
import s from "./Delivery.module.css";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Divider from "@mui/material/Divider";
import PaymentIcon from '@mui/icons-material/Payment';

const Delivery = () => {
    return (
        <div className={`${s.grey_txt}`}>
            <h2><PaymentIcon fontSize="small"/> Способы оплаты</h2>
            <Divider/>
            <p>QR Код</p>
            <p>Карта</p>
            <p>Наличными</p>
            <p>Безнал через банк</p>

            <h2><ShoppingCartIcon fontSize="small"/> Самовывоз</h2>
            <Divider/>
            <p>Заказы можно забрать по адресу: г. Пермь, Борчанинова 62 м-н Веломаркет «Колесо»</p>
            <p></p>
            <h2><DeliveryDiningIcon fontSize="small"/> Курьерская доставка на дом</h2>
            <Divider/>
            <p>Доставка осуществляется с 18:00 до 22:00</p>
            <p>Стоимость доставки на заказы составляет -  200р</p>
            <p>Для отдаленных районов - 300р</p>
        </div>
)
    ;
};

export default Delivery;