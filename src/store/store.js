import {configureStore} from "@reduxjs/toolkit";
import catalog from '../pages/Catalog/CatalogSlice'
import repair from '../pages/Repair/RepairSlice'

const srtingMiddleWare = (store) => (next)=> (action)=>{
    if (typeof action === 'string'){
        return next({
            type: action
        })
    }
    return next(action)
}

const store = configureStore({
    reducer: {catalog, repair},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(srtingMiddleWare),
    devTools: process.env.NODE_ENV !== 'production',

})

export default store;

