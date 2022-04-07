import '../../App.scss'
import "./Catalog.scss";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import Divider from "@mui/material/Divider";
import Slider from "../../Slider/Slider";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";


const Catalog = () => {
    const catalogItems = useSelector(state => state.catalog.catalogItems);

    const renderCatalogs = (catalogItems)=>{
        return  catalogItems.map((item, i) =>
            <Grid key={i} item xs={4} sm={3} md={3} >
                <Link to={`/catalogs/${item.name}`}>
                    <div className='text'><img src={item.img} alt={item.name}/><div >{item.name}</div></div>
                </Link>
            </Grid>
        )
    }
    const elements = renderCatalogs(catalogItems);

    console.log(catalogItems)

    return (
        <>
            <Slider/>
            <ListItem disablePadding className='pageTitle'>
                <ListItemIcon><ShoppingCartIcon color='primary'/></ListItemIcon>
                <ListItemText primary="Каталог"/>
            </ListItem>
            <Divider/>
            <Box sx={{ flexGrow: 1 }} className='wrapper'>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                    {elements}
                </Grid>
            </Box>
            <div className='wrapper2'>
                <Grid container spacing={4} rowSpacing={4} columns={{ xs: 1, sm: 7, md: 10, lg: 10 }} className='catalogItems'>
                    <Grid item xs={1} sm={3} md={4} lg={3}>
                        <div style={{backgroundImage: `url(${catalogItems[6].img})`}}><div>{catalogItems[6].name}</div></div>
                    </Grid>
                    <Grid item xs={1} sm={3} md={4} lg={3}>
                        <div style={{backgroundImage: `url(${catalogItems[7].img})`}}>{catalogItems[7].name}</div>
                    </Grid>
                    <Grid item xs={1} sm={3} md={4} lg={3}>
                        <div style={{backgroundImage: `url(${catalogItems[8].img})`}}>{catalogItems[8].name}</div>
                    </Grid>
                    <Grid item xs={1} sm={3} md={4} lg={3}>
                        <div style={{backgroundImage: `url(${catalogItems[9].img})`}}>{catalogItems[9].name}</div>
                    </Grid>
                    <Grid item xs={1} sm={3} md={4} lg={3}>
                        <div style={{backgroundImage: `url(${catalogItems[10].img})`}}>{catalogItems[10].name}</div>
                    </Grid>
                    <Grid item xs={1} sm={3} md={4} lg={3}>
                        <div style={{backgroundImage: `url(${catalogItems[11].img})`}}>{catalogItems[11].name}</div>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};


export default Catalog;