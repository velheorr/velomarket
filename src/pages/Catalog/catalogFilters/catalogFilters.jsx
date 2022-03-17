import  "../Catalog.scss";
import {Controller, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {setCatalogDataFilter} from "../CatalogSlice";

import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {clearSymbol} from "../../../assets/functions";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import ButtonGroup from "@mui/material/ButtonGroup";



const CatalogFilters = ({catalogData}) => {
    const { register, handleSubmit, reset, control } = useForm();
    const filteredBrand = useSelector(state => state.catalog.filteredBrand);
    const filteredType = useSelector(state => state.catalog.filteredType);
    const filteredSize = useSelector(state => state.catalog.filteredSize);
    const dispatch = useDispatch();

    const onSubmit = data => {
        let minPrice = 0;
        let maxPrice = 1000000;
        let brandArr =[];
        let typeArr =[];
        let sizeArr =[];

        if (data['priceFrom'] && data['priceFrom'] > 0 && data['priceFrom'] <= maxPrice){minPrice = +data['priceFrom']} else {minPrice = 0;}
        if (data['priceTo'] && data['priceTo'] < maxPrice && data['priceTo'] > minPrice){maxPrice = +data['priceTo']} else {maxPrice = 1000000}

        console.log(data)

        const filerByObject = (arr, object)=>{
            for(let x in data[object]){
                if (data[object][x] === true) arr.push(x)
            }
        }
        filerByObject(brandArr, 'brand')
        filerByObject(typeArr, 'type')
        filerByObject(sizeArr, 'size')
// eslint-disable-next-line
        const catalogData_filtered = catalogData.filter(i => {
            if (+i.Цена >= minPrice && +i.Цена <= maxPrice) {

                brandArr.every(e => {
                    console.log(e)
                    if (i.НоменклатураБренд === e) return i.НоменклатураБренд;
                })



               /* if (brandArr.length > 0){
                    for (let key in brandArr){
                        if (i.НоменклатураБренд === brandArr[key]) return i.НоменклатураБренд;
                    }
                } else {
                    return i.НоменклатураБренд;
                }*/


            }
        })
        return dispatch(setCatalogDataFilter(catalogData_filtered))
    };


    const renderCatalogFilters =(filterdata, filterBy)=> {
        if (!filterdata) return;
        return filterdata.map((item, i) => {
            const name = clearSymbol(item)
            if (name.length < 1) return;
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
    const catalogFilterBrand = renderCatalogFilters(filteredBrand, 'brand');
    const catalogFilterType = renderCatalogFilters(filteredType, 'type');
    const catalogFilterSize = renderCatalogFilters(filteredSize, 'size');

    const resetForm = ()=>{
        reset()
        dispatch(setCatalogDataFilter(''))
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
                        catalogData
                            ?
                                <div>
                                    <Chip className='filterName' variant="outlined" color="info" size="small" label="Бренд:"/>
                                    <FormGroup className='filterCheckBox'>{catalogFilterBrand}</FormGroup>
                                </div>
                            : ''
                    }
                    {
                        filteredType.length > 1
                            ?
                                <div>
                                    <Chip className='filterName' variant="outlined" color="info" size="small" label="Тип:"/>
                                    <FormGroup className='filterCheckBox'>{catalogFilterType}</FormGroup>
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