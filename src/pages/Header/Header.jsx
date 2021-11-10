import React from 'react';
import '../../App.scss';
import logo from './img/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className='navHeader'>
                <ul>
                    <li><NavLink to="/catalog">Каталог</NavLink></li>
                    <li><NavLink to="/repair">Сервис и Ремонт</NavLink></li>
                    <li><NavLink to="/delivery">Оплата и Доставка</NavLink></li>
                    <li><NavLink to="/contacts">Контакты</NavLink></li>
                    <li><NavLink to="/where">Где купить?</NavLink></li>
                </ul>
            </div>
            <div className='lowerHeader'>
                <div className='headerLogo'>
                    <NavLink to="/catalog"><img src={logo} alt={'velomarketkoleso.ru'}/></NavLink>
                </div>
                <div className='headerSearch'>
                    <div>
                        <div><input type="text" placeholder={'Поиск товаров'}/></div>
                        <div className="search"><SearchIcon/></div>
                    </div>
                </div>
                <div className='headerInfo'>
                    <div>Интернет-магазин: </div>
                    <div>velomarketkoleso.ru</div>
                </div>
            </div>
        </div>
    );
};

export default Header;