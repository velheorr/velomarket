import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    data: []
}


const repairSlice = createSlice({
    name: 'repair',
    initialState,
    reducers: {
        data: (state, action) => {state.data = action.payload},
        menu: (state, action) => {state.selectMenu = action.payload},
    },
});

const {actions, reducer} = repairSlice;

export default reducer;
export const {
    menu, data
} = actions;