import {configureStore} from "@reduxjs/toolkit";
import catalog from '../pages/Catalog/CatalogSlice'
import repair from '../pages/Repair/RepairSlice'
import data from './dataSlice'
import modal from '../Modal/ModalSlice'
import search from '../pages/Search/SearchSlice'

const store = configureStore({
    reducer: {data, catalog, repair, modal,search},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',

})

export default store;

