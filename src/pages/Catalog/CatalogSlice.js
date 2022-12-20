import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import samokat from './img/samokat.png'
import zapchasti from './img/zapchasti.png'
import bike from './img/bike.png'
import winter from './img/winter.png'
import giro from './img/giro.png'
import inventar from './img/inventar.png'
import * as axios from "axios";


export const fetchCatalogJSON = createAsyncThunk('catalog/fetchCatalogJSON',async () =>{
        const res = await axios.get('https://functions.yandexcloud.net/d4e52c56im1dh44c6nk6');
        return res.data;
    }
)




const initialState = {
    catalogItems: [
        { name: 'ВЕЛОСИПЕДЫ', img: bike},
        { name: 'САМОКАТЫ', img: samokat},
        { name: 'ВЕЛОЗАПЧАСТИ', img: zapchasti},
        { name: 'ГИРОСКУТЕРЫ', img: giro},
        { name: 'СПОРТИНВЕНТАРЬ', img: inventar},
        { name: 'ЗИМНИЕ-ТОВАРЫ', img: winter},
    ],
    catalogData: [],
    catalogDataFiltered: [],
    filteredBrand: [],
    filteredType: [],
    filteredSize: [],
    filtersEmpty: true,
    slidePack: [],
    fullCatalog: [],
    loadState: 'loading',
    new1: []
}

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        getFullCatalog: (state, action) => {state.fullCatalog = action.payload},
        openCatalogData: (state, action) => {state.catalogData = action.payload},
        setCatalogDataFilter: (state, action) => {state.catalogDataFiltered = action.payload},
        filtersState: (state, action) => {state.filtersEmpty = action.payload},
        setFilteredBrand: (state, action )=> {state.filteredBrand = action.payload},
        setFilteredType: (state, action )=> {state.filteredType = action.payload},
        setFilteredSize: (state, action )=> {state.filteredSize = action.payload},

        setCatalog: (state, action) => {state.new1 = action.payload},
    },
    extraReducers: {
        [fetchCatalogJSON.pending]: (state)=> {
            state.new1 = [];
            state.loadState = 'loading'
        },
        [fetchCatalogJSON.fulfilled]: (state, action)=> {
            console.log(action.payload)
            state.new1 = action.payload;
            state.loadState = 'fulfilled';
        },
        [fetchCatalogJSON.rejected]: (state, action)=> {
            state.new1 = [];
            state.loadState = 'rejected';
        },
    }
});

const {actions, reducer} = catalogSlice;

export default reducer;
export const {
    openCatalogData, setFilteredBrand,setFilteredType,setFilteredSize, setCatalogDataFilter, filtersState, getFullCatalog, setCatalog
} = actions;