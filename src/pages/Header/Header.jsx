import React from 'react';
import '../../App.scss';
import logo from './img/logo.png'
import {NavLink, useHistory} from "react-router-dom";
import {catalogRoute} from "../../assets/functions";


const Header = () => {
    let history = useHistory();

    return (
        <>
            <div className='navHeader'>
                <span><NavLink to="/"><img src={logo} alt={'velomarketkoleso.ru'}/></NavLink></span>
                <ul>
                    <li><NavLink activeClassName='active' onClick={catalogRoute(history)}  to="/catalog">Каталог</NavLink></li>
                    <li><NavLink to="/repair">Сервис и Ремонт</NavLink></li>
                    <li><NavLink to="/delivery">Оплата и Доставка</NavLink></li>
                    <li><NavLink to="/contacts">Контакты</NavLink></li>
                    <li><NavLink to="/where">Где купить?</NavLink></li>
                </ul>
                <span className='headerInfo'>Веломаркет "Колесо"</span>
            </div>
        </>
    );
};

export default Header;