import  "../Catalog.scss";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {filtersState, setCatalogDataFilter, setFilteredBrand, setFilteredSize} from "../CatalogSlice";
import Button from "@mui/material/Button";
import {clearSymbol, filterCatalogBy} from "../../../assets/functions";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import ButtonGroup from "@mui/material/ButtonGroup";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";
import {useEffect, useState} from "react";
import CheckBox from "../../../elements/CheckBox";

const CatalogFilters = ({className}) => {
    const { register, handleSubmit, reset } = useForm();
    const filteredBrand = useSelector(state => state.catalog.filteredBrand);
    const filteredType = useSelector(state => state.catalog.filteredType);
    const filteredSize = useSelector(state => state.catalog.filteredSize);
    const catalogData = useSelector(state => state.catalog.catalogData);
    const viewChoise = useSelector(state => state.catalog.viewChoise);

    const dispatch = useDispatch();

    const [selectType, setSelectType] = useState('All');

    useEffect(()=>{
        if (viewChoise){
            handleChange('',viewChoise)
        }

    }, [viewChoise, catalogData])

    const handleChange = (event, link = '') => {
        let x = link
        if (event) {
            x = event.target.value
        }
        setSelectType(x);
        let filtered;
        reset()
        if (x === 'All') {
            dispatch(setCatalogDataFilter(catalogData))
            filtered = catalogData
            resetForm()
        } else {
            filtered = catalogData.filter(el => el.Тип === x)
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

        let brandArr = data.brand;
        let sizeArr =data.size;

        if (data['priceFrom'] && data['priceFrom'] > 0 && data['priceFrom'] <= maxPrice){minPrice = +data['priceFrom']}
        if (data['priceTo'] && data['priceTo'] < maxPrice && data['priceTo'] > minPrice){maxPrice = +data['priceTo']}

        let filteredData = catalogData
        if (selectType !== 'All') {
            filteredData = catalogData.filter(el => el.Тип === selectType)
        }

        const filterCheck = (arr, path)=> {
            if (arr && arr.length > 0) {
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
        let sortFilter = [...filterdata].sort();
        if (!sortFilter) return;
        return sortFilter.map((item, i) => {
            const name = clearSymbol(item)
            if (name.length < 1) return null;
            return <CheckBox key={i} item={item} register={register} filterBy={filterBy}/>
        })
    }

    const renderCatalogSelect = (filteredType)=>{
        return filteredType.filter(i => i !== '')
                            .sort()
                            .map((el, i) =>{
            return <MenuItem key={i} value={el}>{el}</MenuItem>
        })
    }

    const catalogFilterType = renderCatalogSelect(filteredType);

    const catalogFilterBrand = renderCatalogFilters(filteredBrand, 'brand');
    const catalogFilterSize = renderCatalogFilters(filteredSize, 'size');

    const resetForm = ()=>{
        reset({brand: false})
        dispatch(filtersState(true))
        setSelectType('All')
        renewFilters(catalogData)
        dispatch(setCatalogDataFilter(catalogData))
    }

    return (
        <div className={className}>
            <Paper className='filtersContainer' elevation={3}>
                <div className='filterHeader'>Параметры</div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {
                        filteredType.length > 1 && viewChoise === ''
                            ?
                            <FormControl fullWidth sx={{mt:1}}>

                                <InputLabel id="typeS">Тип:</InputLabel>
                                <Select
                                    labelId="typeS" id='selector'
                                    value={selectType}
                                    label="Тип"
                                    onChange={handleChange}
                                >
                                    <MenuItem value='All'>Все</MenuItem>
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
                                    <div className='filterCheckBox'>{catalogFilterBrand}</div>
                                </div>
                            : ''
                    }
                    {
                        filteredSize.length > 1
                            ?
                            <div>
                                <Chip className='filterName' variant="outlined" color="info" size="small" label="Размер:"/>
                                <div className='filterCheckBox'>{catalogFilterSize}</div>
                            </div>
                            : ''
                    }
                   {/* <Chip className='filterName' variant="outlined" color="info" size="small" label="Показывать товары:"/>
                    <div className='filterCheckBox'>
                        <CheckBox register={register} filterBy={'available'} item='Только в наличии'/>
                    </div>*/}
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