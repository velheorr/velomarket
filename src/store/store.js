import {configureStore} from "@reduxjs/toolkit";
import catalog from '../pages/Catalog/CatalogSlice'
import repair from '../pages/Repair/RepairSlice'
import data from './dataSlice'


const store = configureStore({
    reducer: {data, catalog, repair},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',

})

export default store;

