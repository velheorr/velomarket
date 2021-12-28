import React from "react";
import './App.scss';
import {Switch,Route} from "react-router-dom";
import Header from "./pages/Header/Header";
import Catalog from "./pages/Catalog/Catalog";
import Repair from "./pages/Repair/Repair";
import Delivery from "./pages/Delivery/Delivery";
import Contacts from "./pages/Contacts/Contacts";
import logo from "./pages/Header/img/logo.png";
import CatalogPage from "./pages/CatalogPage/CatalogPage";


const App = () => {

    return (
        <div className='main'>
            <div className='mainHeader'>
                <Header/>
            </div>
            <div className='mainBody'>
                <Switch>
                   {/* <Route exact path='/' render={()=> <Redirect to={'/catalog'}/>} />*/}
                    {/*<Route exact path="/"><Catalog/></Route>*/}
                    <Route path="/catalog"><Catalog/></Route>
                    <Route path="/repair"><Repair/></Route>
                    <Route path="/delivery"><Delivery/></Route>
                    <Route path="/contacts"><Contacts/></Route>

                    <Route path="catalog/:id" children={<Catalog />} />

                   {/* <Route path='/catalog/:catalogId' render={() => <Catalog/>}/>
                    <Route path='/catalogPage/:pageId' render={() => <CatalogPage/>}/>*/}


                    <Route exact path="*">Error 404  "Страница не найдена"</Route>
                </Switch>
            </div>
            <img className='botLogo' src={logo} alt={'velomarketkoleso.ru'}/>
        </div>
    );
}

export default App;