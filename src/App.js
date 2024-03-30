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
import Footer from "./pages/Footer/Footer";
import SlickSlider from "./assets/Slider/SlickSlider";
import CatalogDetails from "./pages/Catalog/CatalogDetails/CatalogDetails";


const App = () => {
    const modal = useSelector(state => state.modal.show);
    /*const snow =  document.createElement('script');
    snow.src = "https://thecode.media/wp-content/uploads/2019/12/snowfall2020.js"; document.body.appendChild(snow);*/


    return (
        <div className='main'>
            <div className='mainHeader'>
                <Header/>
            </div>
            <SlickSlider/>
            <Switch>
                <Route exact path="/"><Catalog/></Route>
                <Route path="/repair"><Repair/></Route>
                <Route path="/delivery"><Delivery/></Route>
                <Route path="/contacts"><Contacts/></Route>
                <Route path="/catalogs/:id" ><CatalogDetails /></Route>
                {/*<Route path="/catalogs/:id/:typeId" ><CatalogFiltersContainer /></Route>*/}
                <Route path="/catalogDetails/:id" ><CatalogFiltersContainer /></Route>
               {/* <Route path="/catalogs/:id" ><CatalogFiltersContainer /></Route>*/}
                <Route path="/catalog/:itemId"><CatalogPage /></Route>

                <Route path="*"><Page404/></Route>
            </Switch>

            {modal? <Modal/> : ''}
            <Footer/>
        </div>
    );
}

export default App;