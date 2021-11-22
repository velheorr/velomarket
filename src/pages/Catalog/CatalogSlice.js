import {createAsyncThunk, createSlice, createSelector} from '@reduxjs/toolkit'


const initialState = {
    catalogItems: [
        { name:'Самокаты', img: 'samokat'},
        { name:'Зимние товары', img: 'winter'},
        { name:'Велосипеды', img: 'bike'},
        { name:'Велоазапчасти', img: 'zapchasti'},
    ],
    catalogItemsLoading: 'loading',
    goods: [],
    /*heroesLoadingStatus: 'idle'*/
}


/*export const fetchHeroes = createAsyncThunk(
    'heroes/fetchHeroes',
    async ()=>{
        const {request} = useHttp();
        return await request("http://localhost:3001/heroes")
    }
)*/

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        getCatalogItems: (state, action) => {state.catalogItems = action.payload},
        loadingCatalogItems: state => {state.catalogItemsLoading = 'loading'},
        loadedCatalogItems: state => {state.catalogItemsLoading = 'ready'},
        /*heroCreated: (state, action) => {state.heroes.push(action.payload)},*/
    },
    extraReducers: builder => {
        builder
            /*.addCase(fetchHeroes.pending, state => {state.heroesLoadingStatus = 'loading'})
            .addCase(fetchHeroes.fulfilled, (state, action) =>{
                state.heroesLoadingStatus = 'idle';
                state.heroes = action.payload;
                /!*heroesAdapter.setAll(state, action.payload)*!/
            })
            .addCase(fetchHeroes.rejected, state => {state.heroesLoadingStatus = 'error'})*/
            .addDefaultCase(()=>{})
    }
});

const {actions, reducer} = catalogSlice;

export default reducer;
export const {
    loadedCatalogItems
} = actions;