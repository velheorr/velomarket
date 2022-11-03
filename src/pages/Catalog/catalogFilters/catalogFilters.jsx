import  "../Catalog.scss";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {filtersState, setCatalogDataFilter, setFilteredBrand, setFilteredSize} from "../CatalogSlice";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import {clearSymbol, filterCatalogBy, sortData} from "../../../assets/functions";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import ButtonGroup from "@mui/material/ButtonGroup";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";
import {useState} from "react";

const CatalogFilters = ({className}) => {
    const { register, handleSubmit, reset } = useForm();
    const filteredBrand = useSelector(state => state.catalog.filteredBrand);
    const filteredType = useSelector(state => state.catalog.filteredType);
    const filteredSize = useSelector(state => state.catalog.filteredSize);
    const catalogData = useSelector(state => state.catalog.catalogData);
    const dispatch = useDispatch();

    const [selectType, setSelectType] = useState('All');


    const handleChange = (event) => {
        setSelectType(event.target.value);
        let filtered;
        reset()
        if (event.target.value === 'All') {
            dispatch(setCatalogDataFilter(catalogData))
            filtered = catalogData
            resetForm()
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
            return <div className='checkBox' key = {i}>
                <input type='checkbox' id={item} {...register(`${filterBy}`)} value={item} />
                <label htmlFor={item}>{item}</label>
            </div>
        })
    }
    /*const renderCatalogSelect = (filteredType)=>{
        let x = []

        return filteredType.map((el, i) =>{
            if (el.length <1) return null;
            x.push(el)
            return <MenuItem key={i} value={el}>{el}</MenuItem>
        })
        console.log(x)
    }*/
    const renderCatalogSelect = (filteredType)=>{
        let x = []

        let y = filteredType.map((el, i) =>{
            if (el.length <1) return null;
            x.push(el)
            return <MenuItem key={i} value={el}>{el}</MenuItem>
        })
        console.log(x.sort())
        return y

    }
    /*let x = filteredType.sort()
    console.log(x)*/


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
               {/* <Divider sx={{mb: '10px'}}/>*/}
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