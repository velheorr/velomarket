import React from 'react';
import '../../App.css';
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
                    <li><NavLink to="/contacts">Где купить?</NavLink></li>
                </ul>
            </div>
            <div className='lowerHeader'>
                <div className='headerLogo'>
                    <a href="/"><img src={logo}/></a>
                </div>
                <div className='headerSearch'>
                    <div>
                        <div><input type="text" placeholder={'Поиск товаров'}/></div>
                        <div className="search"><SearchIcon/></div>
                    </div>
                </div>
                <div className='headerInfo'>
                    <div>Интернет-магазин: </div>
                    <div>velomarket-koleso.ru</div>
                </div>
            </div>
        </div>
    );
};

export default Header;