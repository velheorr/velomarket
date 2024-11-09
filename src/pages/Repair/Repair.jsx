import React, {useEffect, useState} from 'react';
import '../../App.scss'
import "./Repair.scss";
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Loader from "../../assets/loader/Loader";
import TitleBlock from "../../elements/TitleBlock";
import {sortData} from '../../assets/functions'
import {useGetService} from "../../api/useGetData";


const Repair = () => {
    const {data: service, isLoading, isError} = useGetService()
    const [options, setOptions] = useState([])
    const [price ,setPrice] = useState([])
    const [select, setSelect] = useState('');

    const [serviceData, setServiceData] = useState([]);


    useEffect(()=>{
        if (service){
            const x = service.filter(item => item['ТипНоменклатуры'] === 'Услуга')
            prepareSelectOptions(x)
            setServiceData(x)
            handleChange()
            //makePrice('УСЛУГИ')
        }
    },[service])

    const makePrice = (type)=>{
        const x = serviceData.filter(item => item['НоменклатураРодитель'] === type);
        const xSorted = sortData(x, 'НоменклатураБренд')
        setPrice(xSorted)
    }

    const handleChange = (e) => {
        let obj = 'УСЛУГИ'
        if (e){ obj = e.target.value}
        setSelect(obj);
        makePrice(obj)
    };


    const prepareSelectOptions = (services)=>{
        const ss = services

        let prepareOptions = []
        ss.forEach(i => {
            if(!prepareOptions.includes(i.НоменклатураРодитель)){
                prepareOptions.push(i.НоменклатураРодитель)
            }
        })
        let sortOpt = []
        prepareOptions.forEach(item =>{
            let str = item.replace(/[0-9.]/g, '')
            sortOpt.push({val: item, name: str})
        })
        let sortedOptions = sortData(sortOpt, 'name')
        setOptions(sortedOptions)
    }


    const renderSelectOptions = options.map((item, i)=> {
        return <MenuItem key={i} value={item.val}>{item.name}</MenuItem>
    })



    const renderListItems = (price) => {
        const x = price.map((item, i) => {
            return <div className='list' key={i}>
                <div>{item.НоменклатураБренд.split('_').join(' ')}</div>
                <div>{item.Номенклатура}</div>
                <div>{item.Цена}р</div>
            </div>
        })
        return x
    }
    let listItems = renderListItems(price)

    if (isLoading) {return <Loader/>}
    if (isError) {return <h3>Нет подключения к серверу</h3>}
    if (!service) {return <h3>Нет данных с сервера</h3>}

    return (
        <>
            <TitleBlock name='Сервис и Ремонт' icon={<HomeRepairServiceIcon className='iconAlign' color="primary"/>}/>
            <div className='pageBody' style={{minHeight: '500px', marginBottom: '20px'}}>
                <FormControl sx={{ m: 1, minWidth: '30%', ml: 0 }} variant="standard">
                    <InputLabel id="repairSelect">Услуги</InputLabel>
                    <Select
                        labelId="repairSelect"
                        value={select}
                        onChange={handleChange}
                         label="Вид услуги"
                    >
                        {renderSelectOptions}
                    </Select>
                </FormControl>
                {/*<Paper sx={{width: '100%', maxWidth: '100%', backgroundColor: '#ffffffed', minHeight: '500px'}}>*/}
                            <div className='listTitle'>
                                <div>Услуга</div>
                                <div>Описание</div>
                                <div>Цена</div>
                            </div>
                {listItems.length > 1
                    ? listItems
                    : <Loader text={'Выберите тип услуги'}/>
                }
                            {listItems}
               {/* </Paper>*/}
            </div>
        </>
    );
};



export default Repair;








