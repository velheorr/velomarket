import {createSlice} from '@reduxjs/toolkit'


const initialState = {
	data: []
}


const dataSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {
		dataToStore: (state, action) => {
			state.data = action.payload
		},
	},
});

const {actions, reducer} = dataSlice;

export default reducer;
export const {
	dataToStore
} = actions;