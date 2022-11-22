import React from "react";
import './App.scss';
import {Switch, Route} from "react-router-dom";
import Header from "./pages/Header/Header";
import Catalog from "./pages/Catalog/Catalog";
import Repair from "./pages/Repair/Repair";
import Delivery from "./pages/Delivery/Delivery";
import Contacts from "./pages/Contacts/Contacts";
import CatalogPage from "./pages/Catalog/CatalogPage/CatalogPage";
import CatalogFiltersContainer from "./pages/Catalog/catalogFilters/catalogFiltersContainer";
import Page404 from "./404/404";
import {useSelector} from "react-redux";
import Modal from "./Modal/Modal";
import Slider from "./assets/Slider/Slider";
import Footer from "./pages/Footer/Footer";


const App = () => {
    const modal = useSelector(state => state.modal.show);

    return (
        <div className='main'>
            <div className='mainHeader'>
                <Header/>
            </div>
            <Slider/>
            <Switch>
                <Route exact path="/"><Catalog/></Route>
                <Route path="/repair"><Repair/></Route>
                <Route path="/delivery"><Delivery/></Route>
                <Route path="/contacts"><Contacts/></Route>

                <Route path="/catalogs/:id" ><CatalogFiltersContainer /></Route>
                <Route path="/catalog/:itemId"><CatalogPage /></Route>

                <Route path="*"><Page404/></Route>
            </Switch>

            {modal? <Modal/> : ''}
            <Footer/>
        </div>
    );
}

export default App;