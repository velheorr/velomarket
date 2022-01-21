import {createSlice} from '@reduxjs/toolkit'


const initialState = {

}


const repairSlice = createSlice({
    name: 'repair',
    initialState,
    reducers: {
        menu: (state, action) => {state.selectMenu = action.payload},
    },
});

const {actions, reducer} = repairSlice;

export default reducer;
export const {
    menu
} = actions;