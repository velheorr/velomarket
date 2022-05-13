import React from 'react';
import '../../App.scss';
import logo from './img/logo.png'
import {Link, NavLink} from "react-router-dom";
import {showModal} from "../../Modal/ModalSlice";
import {useDispatch} from "react-redux";


const Header = () => {
    const dispatch = useDispatch();
    const openModal = ()=>{
        dispatch(showModal(true))
    }

    return (
        <>
            <div className='navHeader'>
                <span><Link to="/"><img src={logo} alt={'velomarketkoleso.ru'}/></Link></span>
                <ul>
                    <li><NavLink to="/" exact className={isActive => (isActive ? 'active' : '')}>Каталог</NavLink></li>
                    <li><NavLink to="/repair" className={isActive => (isActive ? 'active' : '')}>Сервис и Ремонт</NavLink></li>
                    <li><NavLink to="/delivery" className={isActive => (isActive ? 'active' : '')}>Оплата и Доставка</NavLink></li>
                    <li><NavLink to="/contacts" className={isActive => (isActive ? 'active' : '')}>Контакты</NavLink></li>
                    <li onClick={openModal}><a href="#/">Обратная связь</a></li>
                </ul>
                <span className='headerInfo'>Веломаркет Колесо</span>
            </div>
        </>
    );
};

export default Header;


