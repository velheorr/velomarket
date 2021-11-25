import React from 'react';
import Typography from "@mui/material/Typography";
import s from "../Catalog.module.css";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";

const CatalogFilters = ({catalogData, catalogFilterElements}) => {
    return (
        <div>
            <Typography gutterBottom component="div" fontSize={16} fontWeight={600} align='center'>Параметры</Typography>
            <div className={s.filters}>Цена:</div>
            <TextField
                label="От"
                id="priceFrom"
                defaultValue=""
                size="small"
                className={s.filters}
            />
            <TextField
                label="До"
                id="priceTo"
                defaultValue=""
                size="small"
                className={s.filters}
            />
            <div className={s.filters}>Бренд:</div>
            <FormGroup>
                {catalogData ? catalogFilterElements : 'no data' }
            </FormGroup>
        </div>
    );
};

export default CatalogFilters;