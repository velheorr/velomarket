import React from 'react';
import s from "./Delivery.module.css";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MoneyIcon from '@mui/icons-material/Money';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaymentsIcon from '@mui/icons-material/Payments';
import Slider from "../../Slider/Slider";


const Delivery = () => {


    return (
        <div>
            <Slider/>
            <ListItem disablePadding className={s.menuHeader}>
                <ListItemIcon><PaymentsIcon color='primary'/></ListItemIcon>
                <ListItemText primary="Способы оплаты"/>
            </ListItem>
            <Divider/>

            <List>
                <ListItem>
                    <ListItemIcon><QrCodeScannerIcon /></ListItemIcon>
                    <ListItemText secondary="Оплата через QR Код" />
                </ListItem>
                <ListItem>
                    <ListItemIcon><CreditCardIcon /></ListItemIcon>
                    <ListItemText secondary="Банковской картой" />
                </ListItem>
                <ListItem>
                    <ListItemIcon><MoneyIcon /></ListItemIcon>
                    <ListItemText secondary="Наличными в магазине" />
                </ListItem>
                <ListItem >
                    <ListItemIcon><AccountBalanceIcon /></ListItemIcon>
                    <ListItemText secondary="Безналичная оплата через банк" />
                </ListItem>
            </List>

            <ListItem disablePadding className={s.menuHeader}>
                <ListItemIcon><ShoppingCartIcon color='primary'/></ListItemIcon>
                <ListItemText primary="Самовывоз"/>
            </ListItem>
            <Divider/>

            <ListItem>
                <ListItemText secondary="Заказы можно забрать по адресу: г. Пермь, Борчанинова 62 м-н Веломаркет «Колесо»" />
            </ListItem>

            <ListItem disablePadding className={s.menuHeader}>
                <ListItemIcon><DeliveryDiningIcon color='primary'/></ListItemIcon>
                <ListItemText primary="Курьерская доставка на дом"/>
            </ListItem>
            <Divider/>

            <ListItem>
                <ListItemText secondary="Доставка осуществляется с 18:00 до 22:00" />
            </ListItem>
            <ListItem>
                <ListItemText secondary="Стоимость доставки на заказы составляет -  200р" />
            </ListItem>
            <ListItem>
                <ListItemText secondary="Для отдаленных районов - 300р" />
            </ListItem>

        </div>
)
};

export default Delivery;