import React from 'react';
import '../../App.scss';
import logo from './img/logo.png'
import {Link, useHistory } from "react-router-dom";
import {catalogRoute} from "../../assets/functions";


const Header = () => {
    let history = useHistory();

    return (
        <>
            <div className='navHeader'>
                <span><Link to="/catalog"><img src={logo} alt={'velomarketkoleso.ru'}/></Link></span>
                <ul>
                   {/* <li><Link  onClick={catalogRoute(history)}  to="/catalog">Каталог</Link></li>*/}
                    <li><Link to="/catalog">Каталог</Link></li>
                    <li><Link to="/repair">Сервис и Ремонт</Link></li>
                    <li><Link to="/delivery">Оплата и Доставка</Link></li>
                    <li><Link to="/contacts">Контакты</Link></li>
                </ul>
                <span className='headerInfo'>Веломаркет "Колесо"</span>
            </div>
        </>
    );
};

export default Header;