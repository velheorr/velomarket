import "./Catalog.scss";
import Divider from "@mui/material/Divider";
import Slider from "../../Slider/Slider";
import {useParams} from "react-router-dom";
import MainCatalogs from "./MainCatalogs/MainCatalogs";


const Catalog = () => {

    let { id } = useParams();


    return (
        <>
            <Slider/>
            <MainCatalogs/>




        </>
    );
};


export default Catalog;