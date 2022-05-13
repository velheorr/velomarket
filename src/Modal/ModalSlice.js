import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	show: false,
}


const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		// ф-я открытия/закрытия модального окна
		showModal: (state, action) => {state.show = action.payload},
	},
});

const {actions, reducer} = modalSlice;

export default reducer;
export const {
	showModal
} = actions;