import '../../App.scss'
import "./Catalog.scss";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Slider from "../../Slider/Slider";
import Grid from "@mui/material/Grid";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


const Catalog = () => {
    const catalogItems = useSelector(state => state.catalog.catalogItems);

    const renderMainCatalogs = (catalogItems)=>{
        return  catalogItems.map((item, i) =>
            <Grid key={i} item xs={1} sm={3} md={4} lg={3}>
                <Link to={`/catalogs/${item.name}`}>
                    <div style={{backgroundImage: `url(${item.img})`}} className='item'>
                        <div className='text'>{item.name}</div>
                    </div>
                </Link>
            </Grid>
        )
    }

    const catalogElements = renderMainCatalogs(catalogItems);

    const renderMainCatalogs2 = (catalogItems)=>{
        return  catalogItems.map((item, i) =>
            <div key={i} item  className='catalog-column'>
                <Link to={`/catalogs/${item.name}`}>
                    <div className='catalog-container'>
                        <div className='catalog-text'>{item.name}</div>
                        <div style={{backgroundImage: `url(${item.img})`}} className='catalog-item'></div>
                    </div>
                </Link>
            </div>
        )
    }

    const catalogElements2 = renderMainCatalogs2(catalogItems);

    return (
        <>
            <Slider/>
            <div className='paddingTB blockTitle'><ShoppingCartIcon className='iconAlign' color="primary" /> Каталог товаров</div>

            <div className='wrapper3'>
               <div className='catalog-row'>{catalogElements2}</div>
            </div>

            <div className='wrapper2'>
                <Grid container spacing={4} rowSpacing={4} columns={{ xs: 1, sm: 7, md: 10, lg: 10 }} className='catalogItems'>
                    {catalogElements}
                </Grid>
            </div>
        </>
    );
};


export default Catalog;