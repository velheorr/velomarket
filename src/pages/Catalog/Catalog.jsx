import '../../App.scss'
import "./Catalog.scss";
import {useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TitleBlock from "../../elements/TitleBlock";
import React from "react";


const Catalog = () => {
    const catalogItems = useSelector(state => state.catalog.catalogItems);


    const renderMainCatalogs = (catalogItems)=>{
        return  catalogItems.map((item, i) =>
            <div key={i} className='catalog-column'>
                <Link to={`/catalogs/${item.name}`} >
                    <div className='catalog-container'>
                        <div className="catalog-item">
                            <img src={item.img} alt=""/>
                        </div>
                        <div className='catalog-text'>{item.name}</div>
                    </div>
                </Link>
            </div>
        )
    }

    const catalogElements = renderMainCatalogs(catalogItems);

    return (
        <>
            <TitleBlock name='Каталог товаров' icon={<ShoppingCartIcon className='iconAlign' color="primary"/>}/>
            <div className='catalog-row'>{catalogElements}</div>
        </>
    );
};


export default Catalog;