import React from 'react';
import s from "./Delivery.module.css";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Divider from "@mui/material/Divider";
import PaymentIcon from '@mui/icons-material/Payment';
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MoneyIcon from '@mui/icons-material/Money';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Delivery = () => {

    return (
        <div className={`${s.grey_txt}`}>
            <h2><PaymentIcon fontSize="small"/> Способы оплаты</h2>
            <Divider/>

            <Box sx={{ width: '100%', maxWidth: '100%', paddingLeft:'15px'}}>
                <List>
                    <ListItem disablePadding>
                        <ListItemIcon><QrCodeScannerIcon /></ListItemIcon>
                        <ListItemText primary="через QR Код" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon><CreditCardIcon /></ListItemIcon>
                        <ListItemText primary="Банковской картой" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon><MoneyIcon /></ListItemIcon>
                        <ListItemText primary="Наличными в магазине" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon><AccountBalanceIcon /></ListItemIcon>
                        <ListItemText primary="Безналичная оплата через банк" />
                    </ListItem>
                </List>
            </Box>

            <h2><ShoppingCartIcon fontSize="small"/> Самовывоз</h2>
            <Divider/>
            <p>Заказы можно забрать по адресу: г. Пермь, Борчанинова 62 м-н Веломаркет «Колесо»</p>
            <h2><DeliveryDiningIcon fontSize="small"/> Курьерская доставка на дом</h2>
            <Divider/>
            <p>Доставка осуществляется с 18:00 до 22:00</p>
            <p>Стоимость доставки на заказы составляет -  200р</p>
            <p>Для отдаленных районов - 300р</p>
        </div>
)
};

export default Delivery;