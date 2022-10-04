import React from 'react';
import '../../App.scss';
import logo from './img/logo.png'
import {Link, NavLink} from "react-router-dom";
import {showModal} from "../../Modal/ModalSlice";
import {useDispatch} from "react-redux";
import SmallMenu from "./smallMenu";


const Header = () => {
    const dispatch = useDispatch();
    const openModal = ()=>{
        dispatch(showModal(true))
    }

    return (
        <>
            <div className='navHeader'>
                <div className='navHeader-img'><Link to="/"><img src={logo} alt={'velomarketkoleso.ru'}/></Link></div>
                <div className='navHeader-title'>Веломаркет Колесо</div>
                <div className='navHeader-menu'>
                    <ul>
                        <li><NavLink to="/" exact className={isActive => (isActive ? 'active' : '')}>Каталог</NavLink></li>
                        <li><NavLink to="/repair" className={isActive => (isActive ? 'active' : '')}>Сервис и Ремонт</NavLink></li>
                        <li><NavLink to="/delivery" className={isActive => (isActive ? 'active' : '')}>Оплата и Доставка</NavLink></li>
                        <li><NavLink to="/contacts" className={isActive => (isActive ? 'active' : '')}>Контакты</NavLink></li>
                        <li onClick={openModal}><a href="#/">Обратная связь</a></li>
                    </ul>
                    <SmallMenu css={'navHeaderMiniMenu'} openModal={openModal}/>
                </div>
            </div>
        </>
    );
};

export default Header;


