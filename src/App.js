import React from "react";
import './App.scss';
import {Route, Switch, Redirect} from "react-router-dom";
import Header from "./pages/Header/Header";
import Catalog from "./pages/Catalog/Catalog";
import Repair from "./pages/Repair/Repair";
import Delivery from "./pages/Delivery/Delivery";
import Contacts from "./pages/Contacts/Contacts";
import WhereToBuy from "./pages/WhereToBuy/WhereToBuy";
import logo from "./pages/Header/img/logo.png";


const App = () => {
    return (
        <div className='main'>
            <div className='mainHeader'>
                <Header/>
            </div>
            <div className='mainBody'>
                <Switch>
                    <Route exact path='/' render={()=> <Redirect to={'/catalog'}/>} />
                    <Route exact path='/catalog' render={() => <Catalog/>}/>
                    <Route path='/repair' render={() => <Repair/>}/>
                    <Route path='/delivery' render={() => <Delivery/>}/>
                    <Route path='/contacts' render={() => <Contacts/>}/>
                    <Route path='/where' render={() => <WhereToBuy/>}/>

                    <Route path='*' render={() => <div>Error 404  "Страница не найдена"</div>}/>
                </Switch>
            </div>
            <img className='botLogo' src={logo} alt={'velomarketkoleso.ru'}/>
        </div>
    );
}

export default App;