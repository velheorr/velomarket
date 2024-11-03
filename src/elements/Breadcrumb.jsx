import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import GrainIcon from '@mui/icons-material/Grain';
import {Link} from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {setCatalogDataFilter} from "../pages/Catalog/CatalogSlice";
import {useDispatch} from "react-redux";


const Breadcrumb = ({catalog = false, backData = false, backTitle = '', viewChoise = ''}) => {
	const dispatch = useDispatch();

	const resetFiltersFromCatalogs = ()=>{
		dispatch(setCatalogDataFilter([]))
	}

	let backPath;
	let backText;
	if(backData) {
		backText = backData.split('\\')[0]
		backPath = `/catalogs/${backText}`
	}

	return (
		<div className='navBreadcrumb' role="presentation" >
			<Breadcrumbs aria-label="breadcrumb">
				<Link to={`/`}
					underline="hover"
					color="inherit"
					onClick={resetFiltersFromCatalogs}
					className='brTitle brLink'
				>
					<ShoppingCartIcon sx={{ mr: 0.5 }}  fontSize="inherit" className='brIcon'/>
					<span>Каталог</span>
				</Link>
				{
					backData
						?
						<Link to={backPath}
							underline="hover"
							className='brTitle brLink'
						>
							<span>{backText}</span>
						</Link>
						:
						''
				}
				{
					catalog
					?
						<Link to={`/catalogs/${catalog}`} underline="hover" className='brLink'>
							<Typography	sx={{ display: 'flex', alignItems: 'center' }}>
								<GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
								<span className='brTitle brLink'>{catalog}</span>

							</Typography>
						</Link>
					:
					''
				}
				{
					viewChoise && catalog !== viewChoise
						?
						<Typography	sx={{ display: 'flex', alignItems: 'center' }}>
							<GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
							<span className='brTitle'>{viewChoise}</span>
						</Typography>
						:
						''
				}
			</Breadcrumbs>
		</div>
	);
}

export default Breadcrumb;