import React, {useEffect, useState} from 'react';
import '../../App.scss'
import "./Repair.scss";
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import {useDispatch, useSelector} from "react-redux";
import {fetchRepairJSON} from './RepairSlice'
import Loader from "../../assets/loader/Loader";
import TitleBlock from "../../elements/TitleBlock";
import {sortData} from '../../assets/functions'


const Repair = () => {
    const [options, setOptions] = useState([])
    const [price ,setPrice] = useState([])
    const [select, setSelect] = useState('');

    const dispatch = useDispatch()
    const fullCatalog = useSelector(state => state.repair.fullCatalog);

    const handleChange = (event) => {
        setSelect(event.target.value);
        makePrice(event.target.value)
    };

    const [waitData, setWaitData] = useState(false)  // выкл loader
    async function fetchCatalog(){   // загрузка всего каталога
        if(fullCatalog.length === 0){
            try {
                await dispatch(fetchRepairJSON())
            } catch (err) {
                console.error('Error')
            }
        }
        setWaitData(true)
    }
    useEffect(()=>{
        fetchCatalog()
        makePrice('УСЛУГИ')
        prepareSelectOptions(fullCatalog)
    }, [waitData])



    const prepareSelectOptions = (services)=>{
        const ss = services.filter(i => i.ТипНоменклатуры === 'Услуга')
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

    const makePrice = (type)=>{
        const x = fullCatalog.filter(i => (i.НоменклатураРодитель === type))
        const xSorted = sortData(x, 'НоменклатураБренд')
        setPrice(xSorted)
    }

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


    return (
        <>
            <TitleBlock name='Сервис и Ремонт' icon={<HomeRepairServiceIcon className='iconAlign' color="primary"/>}/>
            <div className='pageBody' style={{minHeight: '430px'}}>
                <FormControl sx={{ m: 1, minWidth: '100%', ml: 0 }}>
                    <InputLabel id="repairSelect">Услуги</InputLabel>
                    <Select
                        labelId="repairSelect" id="demo-simple-select-autowidth"
                        value={select}
                        onChange={handleChange}
                        autoWidth  label="Вид услуги"
                    >
                        {renderSelectOptions}
                    </Select>
                </FormControl>
                <Paper sx={{width: '100%', maxWidth: '100%', backgroundColor: '#ffffffed', minHeight: '500px'}}>
                    {waitData
                        ?
                        <>
                            <div className='listTitle'>
                                <div>Услуга</div>
                                <div>Описание</div>
                                <div>Цена</div>
                            </div>
                            {listItems}
                        </>
                        :
                        <Loader/>
                    }
                </Paper>
            </div>
        </>
    );
};



export default Repair;








