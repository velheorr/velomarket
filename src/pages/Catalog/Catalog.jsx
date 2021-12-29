import "./Catalog.scss";
import Divider from "@mui/material/Divider";
import Slider from "../../Slider/Slider";
import {useParams} from "react-router-dom";
import MainCatalogs from "./MainCatalogs/MainCatalogs";
import {useSelector} from "react-redux";
import CatalogFiltersContainer from "./catalogFilters/catalogFiltersContainer";


const Catalog = () => {
    const catalogPage = useSelector(state => state.catalog.catalogPage);
    let { id } = useParams();


    return (
        <>
            <Slider/>
            {
                catalogPage === ''
                ?
                <MainCatalogs/>
                :
                <CatalogFiltersContainer/>
            }

        </>
    );
};


export default Catalog;