import React from 'react';
import '../../App.scss';
import logo from './img/logo.png'
import {NavLink} from "react-router-dom";
import Slider from "../../Slider/Slider";

const Header = () => {
    return (
        <>
            <div className='navHeader'>
                <span><NavLink to="/"><img src={logo} alt={'velomarketkoleso.ru'}/></NavLink></span>
                <ul>
                    <li><NavLink activeClassName='active'  to="/catalog">Каталог</NavLink></li>
                    <li><NavLink to="/repair">Сервис и Ремонт</NavLink></li>
                    <li><NavLink to="/delivery">Оплата и Доставка</NavLink></li>
                    <li><NavLink to="/contacts">Контакты</NavLink></li>
                    <li><NavLink to="/where">Где купить?</NavLink></li>
                </ul>
                <span className='headerInfo'>Веломаркет "Колесо"</span>
            </div>
            <div className='lowerHeader'>
                <Slider/>
            </div>
        </>
    );
};

export default Header;