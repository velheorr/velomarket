import  "../Catalog.scss";
import {Controller, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {filtersState, setCatalogDataFilter, setFilteredBrand, setFilteredSize} from "../CatalogSlice";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {clearSymbol, filterCatalogBy} from "../../../assets/functions";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import ButtonGroup from "@mui/material/ButtonGroup";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {useEffect, useState} from "react";




const CatalogFilters = () => {
    const { register, handleSubmit, reset, control } = useForm();
    const filteredBrand = useSelector(state => state.catalog.filteredBrand);
    const filteredType = useSelector(state => state.catalog.filteredType);
    const filteredSize = useSelector(state => state.catalog.filteredSize);
    const catalogData = useSelector(state => state.catalog.catalogData);
    const dispatch = useDispatch();

    const [selectType, setSelectType] = useState('All');

    const handleChange = (event) => {
        setSelectType(event.target.value);
        resetForm()
        let filtered;
        console.log(event.target.value)
        if (event.target.value === 'All') {
            console.log(event.target.value)
            dispatch(setCatalogDataFilter(catalogData))
            filtered = catalogData
        } else {
            filtered = catalogData.filter(el => el.Тип === event.target.value)
            dispatch(setCatalogDataFilter(filtered))
        }
        renewFilters(filtered)
    };

    const renewFilters = (filtered)=>{
        const brand = filterCatalogBy(filtered, 'НоменклатураБренд')
        dispatch(setFilteredBrand(brand));
        const size = filterCatalogBy(filtered, 'Размер')
        dispatch(setFilteredSize(size));
    }

    const onSubmit = data => {
        let minPrice = 0;
        let maxPrice = 1000000;
        let brandArr =[];
        let sizeArr =[];

        if (data['priceFrom'] && data['priceFrom'] > 0 && data['priceFrom'] <= maxPrice){minPrice = +data['priceFrom']} else {minPrice = 0;}
        if (data['priceTo'] && data['priceTo'] < maxPrice && data['priceTo'] > minPrice){maxPrice = +data['priceTo']} else {maxPrice = 1000000}

        const filerByObject = (arr, object)=>{
            for(let x in data[object]){
                if (data[object][x] === true) arr.push(x)
            }
        }
        filerByObject(brandArr, 'brand')
        filerByObject(sizeArr, 'size')

        let filteredData = catalogData
        if (selectType !== 'All') {
            filteredData = catalogData.filter(el => el.Тип === selectType)
        }

        const filterCheck = (arr, path)=> {
            if (arr.length > 0) {
                let x = filteredData.filter(el => {
                    for (let key in arr){
                        if (el[path] === arr[key]) return el
                    }
                })
                return filteredData = x
            }
        }
         filterCheck(brandArr, 'НоменклатураБренд')
         filterCheck(sizeArr, 'Размер')
         if (brandArr.length > 0 || sizeArr.length > 0){
             if (filteredData.length  === 0){dispatch(filtersState(false))}
             else { dispatch(filtersState(true))}
         }
         return dispatch(setCatalogDataFilter(filteredData))
    };


    const renderCatalogFilters =(filterdata, filterBy)=> {
        if (!filterdata) return;
        return filterdata.map((item, i) => {
            const name = clearSymbol(item)
            if (name.length < 1) return null;
            return  <FormControlLabel
                key = {i}
                label = {name}
                control = {
                    <Controller
                        name={`${filterBy}.${item}`}
                        defaultValue={false}
                        control={control}
                        render={({field: {value, ...field}}) => (
                            <Checkbox {...field} checked={!!value}/>
                        )}
                    />
                }
            />
        })
    }
    const renderCatalogSelect = ()=>{
        return filteredType.map((el, i) =>{
            if (el.length <1) return null;
            return <MenuItem key={i} value={el}>{el}</MenuItem>
        })
    }
    const catalogFilterType = renderCatalogSelect(filteredType);

    const catalogFilterBrand = renderCatalogFilters(filteredBrand, 'brand');
    const catalogFilterSize = renderCatalogFilters(filteredSize, 'size');

    const resetForm = ()=>{
        reset()
        dispatch(filtersState(true))
        setSelectType('All')
        renewFilters(catalogData)
        dispatch(setCatalogDataFilter(catalogData))
    }

    return (
        <div >
            <Paper className='filtersContainer'>
                <div className='filterHeader'>Параметры</div>
                <Divider sx={{mb: '10px'}}/>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/*<div className='filters'>Цена:</div>
                <TextField
                    {...register("priceFrom", {min: 0})}
                    label="От"
                    defaultValue=''
                    size="small"
                    variant="outlined"
                    className='filters'
                    type="number"
                />
                <TextField
                    {...register("priceTo", {min: 0})}
                    label="До"
                    defaultValue=""
                    size="small"
                    variant="outlined"
                    className='filters'
                    type="number"
                />*/}
                    {
                        filteredType.length > 1
                            ?
                            <FormControl fullWidth sx={{mt:1}}>
                                <InputLabel id="typeS">Тип:</InputLabel>
                                <Select
                                    labelId="typeS" id='selector'
                                    value={selectType}
                                    label="Тип"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={'All'}>Все</MenuItem>
                                    {catalogFilterType}
                                </Select>
                            </FormControl>
                            : ''
                    }

                    {
                        catalogData
                            ?
                                <div>
                                    <Chip className='filterName' variant="outlined" color="info" size="small" label="Бренд:"/>
                                    <FormGroup className='filterCheckBox'>{catalogFilterBrand}</FormGroup>
                                </div>
                            : ''
                    }
                    {
                        filteredSize.length > 1
                            ?
                            <div>
                                <Chip className='filterName' variant="outlined" color="info" size="small" label="Размер:"/>
                                <FormGroup className='filterCheckBox'>{catalogFilterSize}</FormGroup>
                            </div>
                            : ''
                    }

                    <Divider/>
                    <ButtonGroup sx={{mt: '10px'}} variant="text" size="small" fullWidth>
                        <Button type="submit">Применить</Button>
                        <Button onClick={resetForm}>Очистить</Button>
                    </ButtonGroup>
                </form>
            </Paper>
        </div>
    );
};

export default CatalogFilters;