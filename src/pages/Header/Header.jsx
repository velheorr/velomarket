import React from 'react';
import '../../App.css';
import logo from './img/logo.png'

const Header = () => {
    return (
        <div>
            <div>
                <ul>
                    <li><a href="">Каталог</a></li>
                    <li><a href="">Сервис/Ремонт</a></li>
                    <li><a href="">Оплата и Доставка</a></li>
                    <li><a href="">Контакты</a></li>
                </ul>
            </div>
            <div className='lowerHeader'>
                <div className='headerLogo'>
                    <a href="/"><img src={logo}/></a>
                </div>
            </div>
        </div>
    );
};

export default Header;