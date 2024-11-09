import {createSlice} from '@reduxjs/toolkit'


const initialState = {
	find: []
}

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setFindToCatalog: (state, action) => {state.find = action.payload},
	},
});

const {actions, reducer} = searchSlice;

export default reducer;
export const {
	setFindToCatalog
} = actions;