import '../../App.scss'
import "./Catalog.scss";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Slider from "../../Slider/Slider";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


const Catalog = () => {
    const catalogItems = useSelector(state => state.catalog.catalogItems);

    const renderMainCatalogs = (catalogItems)=>{
        return  catalogItems.map((item, i) =>
            <div key={i} className='catalog-column'>
                <Link to={`/catalogs/${item.name}`}>
                    <div className='catalog-container'>
                        <div className='catalog-text'>{item.name}</div>
                        <div className="catalog-item">
                            <img src={item.img} alt=""/>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }

    const catalogElements = renderMainCatalogs(catalogItems);

    return (
        <>
            <Slider/>
            <div className='paddingTB blockTitle'><ShoppingCartIcon className='iconAlign' color="primary" /> Каталог товаров</div>

            <div className='wrapper2'>
               <div className='catalog-row'>{catalogElements}</div>
            </div>
        </>
    );
};


export default Catalog;