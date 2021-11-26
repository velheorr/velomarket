import React from 'react';
import Typography from "@mui/material/Typography";
import s from "../Catalog.module.css";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import {Controller, useForm} from "react-hook-form";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {useSelector} from "react-redux";
import {setCatalogDataFilter} from "../CatalogSlice";

const CatalogFilters = ({catalogData}) => {
    const { register, handleSubmit, reset, control } = useForm();
    const filteredBrand = useSelector(state => state.catalog.filteredBrand);
    const onSubmit = data => {
        console.log(data)
        //console.log(catalogData)
        let minPrice;
        let maxPrice;
        let brandArr =[]

        if(data.priceFrom > 0){minPrice = data.priceFrom}
        if(data.priceTo > 0){maxPrice = data.priceTo}

        for (let key in data){
            if (typeof Number(data[key]) && data[key] > 0 || data[key] === true){
                console.log(data[key])
                brandArr.push(key)
            }

        }
        console.log(brandArr)



    };




    const renderCatalogFilters =(filterdata)=>{
        if (!filterdata) return;
        return filterdata.map((item, i)=> <FormControlLabel
            key={i}
            label={item}
            control={
                <Controller
                    name={item}
                    control={control}
                    render={({ field: { value, ...field } }) => (
                        <Checkbox {...field} checked={!!value} />
                    )}
                />
            }
             />);
    }
    const catalogFilterElements = renderCatalogFilters(filteredBrand);


    return (
        <div>
            <Typography gutterBottom component="div" fontSize={16} fontWeight={600} align='center'>Параметры</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={s.filters}>Цена:</div>
                <TextField
                    {...register("priceFrom", {min: 0})}
                    label="От"
                    defaultValue=""
                    size="small"
                    className={s.filters}
                    type="number"
                />
                <TextField
                    {...register("priceTo", {min: 0})}
                    label="До"
                    defaultValue=""
                    size="small"
                    className={s.filters}
                    type="number"
                />
                <div className={s.filters}>Бренд:</div>
                <FormGroup>
                    {catalogData ? catalogFilterElements : 'no data' }
                </FormGroup>
                <div><Button type="submit">Применить фильтры</Button></div>
                <div><Button onClick={()=>reset()}>Сбросить</Button></div>
            </form>
        </div>
    );
};

export default CatalogFilters;