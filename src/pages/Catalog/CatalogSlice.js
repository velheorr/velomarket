import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    catalogItems: [
        { name:'Самокаты', img: 'samokat'},
        { name:'Зимние товары', img: 'winter'},
        { name:'Велосипеды', img: 'bike'},
        { name:'Велоазапчасти', img: 'zapchasti'},
    ],
    catalogPage: '',
    catalogData: [],
    goods: [],
}


const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        openCatalog: (state, action) => {state.catalogPage = action.payload},
        openCatalogData: (state, action) => {state.catalogData = action.payload},
    },
});

const {actions, reducer} = catalogSlice;

export default reducer;
export const {
    openCatalog, openCatalogData
} = actions;