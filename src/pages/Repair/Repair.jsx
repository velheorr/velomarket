import React from 'react';
import s from "../Contacts/Contacts.module.css";
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import Divider from "@mui/material/Divider";

const Repair = () => {
    return (
        <div className={`${s.grey_txt}`}>
            <h2><HomeRepairServiceIcon fontSize="small"/> Сервис и Ремонт</h2>
            <Divider/>
            <p>Прайс</p>
        </div>
    );
};

export default Repair;