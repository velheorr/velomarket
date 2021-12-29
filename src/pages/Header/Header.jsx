import React from 'react';
import '../../App.scss';
import logo from './img/logo.png'
import {Link, NavLink, useHistory} from "react-router-dom";
import {catalogRoute} from "../../assets/functions";


const Header = () => {
    let history = useHistory();

    return (
        <>
            <div className='navHeader'>
                <span><Link to="/"><img src={logo} alt={'velomarketkoleso.ru'}/></Link></span>
                <ul>
                    <li><NavLink to="/" exact className={isActive => (isActive ? 'active' : '')}>Каталог</NavLink></li>
                    <li><NavLink to="/repair" className={isActive => (isActive ? 'active' : '')}>Сервис и Ремонт</NavLink></li>
                    <li><NavLink to="/delivery" className={isActive => (isActive ? 'active' : '')}>Оплата и Доставка</NavLink></li>
                    <li><NavLink to="/contacts" className={isActive => (isActive ? 'active' : '')}>Контакты</NavLink></li>
                </ul>
                <span className='headerInfo'>Веломаркет "Колесо"</span>
            </div>
        </>
    );
};

export default Header;


/*
className={({ isActive }) => (isActive ? 'activen' : '')}*/
