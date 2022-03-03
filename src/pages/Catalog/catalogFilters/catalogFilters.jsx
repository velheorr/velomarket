import  "../Catalog.scss";
import {Controller, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {setCatalogDataFilter} from "../CatalogSlice";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {clearSymbol} from "../../../assets/functions";


const CatalogFilters = ({catalogData}) => {
    const { register, handleSubmit, reset, control } = useForm();
    const filteredBrand = useSelector(state => state.catalog.filteredBrand);
    const dispatch = useDispatch();

    const onSubmit = data => {
        let minPrice = 0;
        let maxPrice = 1000000;
        let brandArr =[]

        if (data['priceFrom'] && data['priceFrom'] > 0 &&data['priceFrom'] <= maxPrice){minPrice = +data['priceFrom']} else {minPrice = 0;}
        if (data['priceTo'] && data['priceTo'] < maxPrice && data['priceTo'] > minPrice){maxPrice = +data['priceTo']} else {maxPrice = 1000000}

        for (let key in data){
            if (data[key] === true){brandArr.push(key)}
        }
// eslint-disable-next-line
        const catalogData_filtered = catalogData.filter(i => {
            if (+i.Цена >= minPrice && +i.Цена <= maxPrice) {
                if (brandArr.length > 0){
                    for (let key in brandArr){
                        if (i.НоменклатураБренд === brandArr[key]) return i.НоменклатураБренд;
                    }
                } else {
                    return i.НоменклатураБренд;
                }
            }
        })
        return dispatch(setCatalogDataFilter(catalogData_filtered))
    };


    const renderCatalogFilters =(filterdata)=> {
        if (!filterdata) return;
        return filterdata.map((item, i) => {
            const name = clearSymbol(item)
            return <FormControlLabel
                key = {i}
                label = {name}
                control = {
                <Controller
                    name={item}
                    control={control}
                    render={({field: {value, ...field}}) => (
                        <Checkbox {...field} checked={!!value}/>
                    )}
                />
                }
            />
        })
    }
    const catalogFilterElements = renderCatalogFilters(filteredBrand);

    const resetForm = ()=>{
        reset()
        dispatch(setCatalogDataFilter(''))
    }

    return (
        <div>
            <Typography gutterBottom component="div" fontSize={16} fontWeight={600} align='center'>Параметры</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='filters'>Цена:</div>
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
                />
                <div className='filters'>Бренд:</div>
                <FormGroup>
                    {catalogData ? catalogFilterElements : 'no data' }
                </FormGroup>
                <div><Button type="submit">Применить фильтры</Button></div>
                <div><Button onClick={resetForm}>Сбросить</Button></div>
            </form>
        </div>
    );
};

export default CatalogFilters;