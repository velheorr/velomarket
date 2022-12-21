import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import * as axios from "axios";

export const fetchRepairJSON = createAsyncThunk('catalog/fetchRepairJSON',async () =>{
        const res = await axios.get('https://functions.yandexcloud.net/d4e52c56im1dh44c6nk6');
        return res.data;
    }
)

const initialState = {
    fullCatalog: [], // whole catalog json
}


const repairSlice = createSlice({
    name: 'repair',
    initialState,
    reducers: {
        menu: (state, action) => {state.selectMenu = action.payload},
    },
    extraReducers: {
        [fetchRepairJSON.fulfilled]: (state, action)=> {state.fullCatalog = action.payload},
    }
});

const {actions, reducer} = repairSlice;

export default reducer;
export const {
    menu
} = actions;