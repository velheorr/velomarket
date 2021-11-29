import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    selectMenu: [
        {val:'УСЛУГИ', name: 'Услуги'},
        {val: '01.PIT-STOP(Тех-обслуживание)', name: 'PIT-STOP Тех-обслуживание'},
        {val: '02.РУЛЕВАЯ', name: 'Рулевая'},
        {val: '03.ТОРМОЗА', name: 'Тормоза'},
        {val: '04.ТРАНСМИССИЯ', name: 'Трансмиссия'},
        {val: '05.ХОДОВАЯ', name: 'Ходовая'},
        {val: '06.ТЮНИНГ', name: 'Тюнинг'},
        {val: '07.ПОДВЕСКА', name: 'Подвеска'},
        {val: '08.ВЕЛОРАЗБОР', name: 'Велоразбор'},
        {val: '09.РЕМОНТ САМОКАТОВ', name: 'Ремонт самокатов'},
        {val: '10.ЗИМА', name: 'Зима'}
    ]
}


const repairSlice = createSlice({
    name: 'repair',
    initialState,
    reducers: {
        /*openCatalog: (state, action) => {state.catalogPage = action.payload},*/
    },
});

const {actions, reducer} = repairSlice;

export default reducer;
export const {

} = actions;