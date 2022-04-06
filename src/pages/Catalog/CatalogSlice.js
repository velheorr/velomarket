import {createSlice} from '@reduxjs/toolkit'

import samokat from './img/samokat.png'
import zapchasti from './img/zapchasti.png'
import bike from './img/bike.png'
import winter from './img/winter.png'
import giro from './img/giro.png'
import inventar from './img/inventar.png'
import a1 from './img/1.png'
import a2 from './img/2.png'
import a3 from './img/3.png'
import a4 from './img/4.png'
import a5 from './img/5.png'
import a6 from './img/6.png'



const initialState = {
    catalogItems: [
        { name: 'САМОКАТЫ', img: samokat},
        { name: 'ЗИМНИЕ-ТОВАРЫ', img: winter},
        { name: 'ВЕЛОСИПЕДЫ', img: bike},
        { name: 'ВЕЛОЗАПЧАСТИ', img: zapchasti},
        { name: 'ГИРОСКУТЕРЫ', img: giro},
        { name: 'СПОРТИНВЕНТАРЬ', img: inventar},
        { name: 'САМОКАТЫ', img: a1},
        { name: 'ЗИМНИЕ-ТОВАРЫ', img: a2},
        { name: 'ВЕЛОСИПЕДЫ', img: a3},
        { name: 'ВЕЛОЗАПЧАСТИ', img: a4},
        { name: 'ГИРОСКУТЕРЫ', img: a5},
        { name: 'СПОРТИНВЕНТАРЬ', img: a6},
    ],
    catalogData: [],
    catalogDataFiltered: [],
    filteredBrand: [],
    filteredType: [],
    filteredSize: [],
    filtersEmpty: true,
    slidePack: []
}


const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        openCatalogData: (state, action) => {state.catalogData = action.payload},
        setCatalogDataFilter: (state, action) => {state.catalogDataFiltered = action.payload},
        filtersState: (state, action) => {state.filtersEmpty = action.payload},
        setFilteredBrand: (state, action )=> {state.filteredBrand = action.payload},
        setFilteredType: (state, action )=> {state.filteredType = action.payload},
        setFilteredSize: (state, action )=> {state.filteredSize = action.payload},
    },
});

const {actions, reducer} = catalogSlice;

export default reducer;
export const {
    openCatalogData, setFilteredBrand,setFilteredType,setFilteredSize, setCatalogDataFilter, filtersState
} = actions;