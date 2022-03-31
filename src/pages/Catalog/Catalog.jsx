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
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";



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
            <Box sx={{ flexGrow: 1 }} className='wrapper2'>
                <Grid container spacing={4} rowSpacing={4}>
                    <Grid item md={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={catalogItems[0].img}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    gdf
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item md={4}>
                        <div style={{width: '100%', height: 200, backgroundImage: `url(${catalogItems[0].img})`, backgroundRepeat: 'no-repeat'}}>1</div>
                    </Grid>
                    <Grid item md={4}>
                        <div>1</div>
                    </Grid>
                    <Grid item md={4}>
                        <div>1</div>
                    </Grid>
                    <Grid item md={4}>
                        <div>1</div>
                    </Grid>
                    <Grid item md={4}>
                        <div>1</div>
                    </Grid>

                </Grid>
            </Box>
        </>
    );
};


export default Catalog;