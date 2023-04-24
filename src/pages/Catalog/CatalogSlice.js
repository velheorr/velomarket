import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import * as axios from "axios";

import samokat from './img/samokat.png'
import zapchasti from './img/zapchasti.png'
import bike from './img/bike.png'
import winter from './img/winter.png'
import giro from './img/giro.png'
import inventar from './img/inventar.png'

// получение data.json
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
        openCatalogData: (state, action) => {state.catalogData = action.payload},
        setCatalogDataFilter: (state, action) => {state.catalogDataFiltered = action.payload},
        filtersState: (state, action) => {state.filtersEmpty = action.payload},
        setFilteredBrand: (state, action )=> {state.filteredBrand = action.payload},
        setFilteredType: (state, action )=> {state.filteredType = action.payload},
        setFilteredSize: (state, action )=> {state.filteredSize = action.payload},
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCatalogJSON.pending, (state) =>{
                state.fullCatalog = [];
                state.itemLoadState = 'loading'
            })
            .addCase(fetchCatalogJSON.fulfilled, (state, action) =>{
                state.fullCatalog = action.payload;
                state.itemLoadState = 'ready';
            })
            .addCase(fetchCatalogJSON.rejected, (state) =>{
                state.fullCatalog = [];
                state.itemLoadState = 'rejected';
            })
    }
});

const {actions, reducer} = catalogSlice;

export default reducer;
export const {
    openCatalogData, setFilteredBrand,setFilteredType,setFilteredSize, setCatalogDataFilter, filtersState
} = actions;