import {createSlice} from '@reduxjs/toolkit'

import samokat from './img/samokat.png'
import zapchasti from './img/zapchasti.png'
import bike from './img/bike.png'
import winter from './img/winter.png'
import giro from './img/giro.png'
import inventar from './img/inventar.png'


const initialState = {
    catalogItems: [
        { name: 'ВЕЛОСИПЕДЫ', img: bike},
        { name: 'САМОКАТЫ', img: samokat},
        { name: 'ВЕЛОЗАПЧАСТИ', img: zapchasti},
        { name: 'ГИРОСКУТЕРЫ', img: giro},
        { name: 'СПОРТИНВЕНТАРЬ', img: inventar},
        { name: 'ЗИМНИЕ-ТОВАРЫ', img: winter},
    ],
    catalogTypeData: [],
    viewChoise: '',
    catalogData: [], // current catalog group
    catalogDataFiltered: [],
    filteredBrand: [],
    filteredType: [],
    filteredSize: [],
    filtersEmpty: true,
    fullCatalog: [], // whole catalog json
    itemLoadState: 'loading', // cat page load state
}

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        setFullCatalog: (state, action) => {state.fullCatalog = action.payload},
        openCatalogData: (state, action) => {state.catalogData = action.payload},
        setCatalogTypeData: (state, action) => {state.catalogTypeData = action.payload},
        setViewChoise: (state, action) => {state.viewChoise = action.payload},
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
    openCatalogData, setFilteredBrand,setFilteredType,setFilteredSize, setCatalogDataFilter, filtersState, setCatalogTypeData, setViewChoise, setFullCatalog
} = actions;