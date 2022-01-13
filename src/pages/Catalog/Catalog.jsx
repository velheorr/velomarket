import "./Catalog.scss";
import Divider from "@mui/material/Divider";
import Slider from "../../Slider/Slider";
import {useParams, useRouteMatch, Link, Switch, Route} from "react-router-dom";
import MainCatalogs from "./MainCatalogs/MainCatalogs";
import {useDispatch, useSelector} from "react-redux";
import CatalogFiltersContainer from "./catalogFilters/catalogFiltersContainer";
import {openCatalog, openCatalogData, setFilteredBrand} from "./CatalogSlice";
import goods from "../../Data/goods.json";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";


const Catalog = () => {
/*    const catalogPage = useSelector(state => state.catalog.catalogPage);
    let { id } = useParams();
    let { path, url } = useRouteMatch();


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
    );*/
    const catalogItems = useSelector(state => state.catalog.catalogItems);
    const catalogPage = useSelector(state => state.catalog.catalogPage);
    const dispatch = useDispatch();



    const catalogFilters = (newCatalog)=>{
        let filterBrand = []
        const filtered = newCatalog.map(i => i.НоменклатураБренд)
        for (let str of filtered) {
            if (!filterBrand.includes(str)) {
                filterBrand.push(str);
            }
        }
        dispatch(setFilteredBrand(filterBrand));
    }
    const selectCatalog = (name)=>{
        if (name === catalogPage) return;

        dispatch(openCatalog(name))
        let newCatalog = goods.filter(i => i.ПутьПапки.includes(name))
        dispatch(openCatalogData(newCatalog))
        catalogFilters(newCatalog)
    }

    const renderCatalogs = (catalogItems)=>{
        return  catalogItems.map((item, i) =>
            <Grid key={i} item xs={4} sm={3} md={3} onClick={()=> selectCatalog(item.name)}>
                <Link to={`/catalog/${item.name}`}>
                    <div className='text'><img src={item.img} alt={item.name}/><div >{item.name}</div></div>
                </Link>
            </Grid>
        )
    }
    const elements = renderCatalogs(catalogItems);

    return (
        <div>
            <Slider/>
            <h2>
                <ListItem disablePadding className='menuHeader'>
                    <ListItemIcon><ShoppingCartIcon color='primary'/></ListItemIcon>
                    <ListItemText primary="Каталог"/>
                </ListItem>
            </h2>
            <Divider/>
            <Box sx={{ flexGrow: 1 }} className='wrapper'>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                    {elements}
                </Grid>
            </Box>

        </div>
    );
};


export default Catalog;