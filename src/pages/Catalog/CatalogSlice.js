import {createSlice} from '@reduxjs/toolkit'

import samokat from './img/samokat.png'
import zapchasti from './img/zapchasti.png'
import bike from './img/bike.png'
import winter from './img/winter.png'
import giro from './img/giro.png'
import inventar from './img/inventar.png'



const initialState = {
    catalogItems: [
        { name: 'САМОКАТЫ', img: samokat},
        { name: 'ЗИМНИЕ-ТОВАРЫ', img: winter},
        { name: 'ВЕЛОСИПЕДЫ', img: bike},
        { name: 'ВЕЛОЗАПЧАСТИ', img: zapchasti},
        { name: 'ГИРОСКУТЕРЫ', img: giro},
        { name: 'СПОРТИНВЕНТАРЬ', img: inventar},
    ],
    catalogData: [],
    catalogDataFiltered: [],
    filteredBrand: [],
    filteredType: [],
    filteredSize: [],
    slidePack: []
}


const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        openCatalogData: (state, action) => {state.catalogData = action.payload},
        setCatalogDataFilter: (state, action) => {state.catalogDataFiltered = action.payload},
        setFilteredBrand: (state, action )=> {state.filteredBrand = action.payload},
        setFilteredType: (state, action )=> {state.filteredType = action.payload},
        setFilteredSize: (state, action )=> {state.filteredSize = action.payload},
    },
});

const {actions, reducer} = catalogSlice;

export default reducer;
export const {
    openCatalogData, setFilteredBrand,setFilteredType,setFilteredSize, setCatalogDataFilter
} = actions;