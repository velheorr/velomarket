import {createSlice} from '@reduxjs/toolkit'

import samokat from './img/samokat.png'
import zapchasti from './img/zapchasti.png'
import bike from './img/bike.png'
import winter from './img/winter.png'

/*
function importAll(r) {
    return r.keys().map(r);
}
*/

/*const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));
console.log(images)*/


const initialState = {
    catalogItems: [
        { name: 'САМОКАТЫ', img: samokat},
        { name: 'ЗИМНИЕ-ТОВАРЫ', img: winter},
        { name: 'ВЕЛОСИПЕДЫ', img: bike},
        { name: 'ВЕЛОЗАПЧАСТИ', img: zapchasti},
    ],
    catalogPage: '',
    catalogData: [],
    catalogDataFiltered: [],
    filteredBrand: [],

}


const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        openCatalog: (state, action) => {state.catalogPage = action.payload},
        openCatalogData: (state, action) => {state.catalogData = action.payload},
        setCatalogDataFilter: (state, action) => {state.catalogDataFiltered = action.payload},
        setFilteredBrand: (state, action )=> {state.filteredBrand = action.payload},
    },
});

const {actions, reducer} = catalogSlice;

export default reducer;
export const {
    openCatalog, openCatalogData, setFilteredBrand, setCatalogDataFilter
} = actions;