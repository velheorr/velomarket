import {configureStore} from "@reduxjs/toolkit";
import catalog from '../pages/Catalog/CatalogSlice'
import repair from '../pages/Repair/RepairSlice'



const store = configureStore({
    reducer: {catalog, repair},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',

})

export default store;

