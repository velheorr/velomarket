import '../../App.scss'
import PhoneIcon from "@mui/icons-material/Phone";
import PinDropIcon from '@mui/icons-material/PinDrop';
import logo from "../Header/img/logo.png";

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footerline'></div>
			<div className='footerLeft'>
				<img className='botLogo' src={logo} alt={'velomarketkoleso.ru'}/>
			</div>
			<div className='footerRight' style={{backgroundImage: logo}}>
				<div className='footerTitle'>ВЕЛОМАРКЕТ "КОЛЕСО"</div>
				<p><PinDropIcon className="iconAlign" fontSize="small"/> г.Пермь, ул. Борчанинова 62</p>
				<p><PhoneIcon className="iconAlign" fontSize="small"/> +7 (902) 471-37-69</p>
			</div>

		</div>
	);
};

export default Footer;