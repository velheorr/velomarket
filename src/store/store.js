import {configureStore} from "@reduxjs/toolkit";
import catalog from '../pages/Catalog/CatalogSlice'
import repair from '../pages/Repair/RepairSlice'
import data from './dataSlice'
import modal from '../Modal/ModalSlice'


const store = configureStore({
    reducer: {data, catalog, repair, modal},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',

})

export default store;

