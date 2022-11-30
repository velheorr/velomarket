import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';

import {Link} from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {setCatalogDataFilter} from "../pages/Catalog/CatalogSlice";
import {useDispatch} from "react-redux";
import {useState} from "react";



const Breadcrumb = ({catalog = false, backData = false, backTitle = ''}) => {
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
					href="/"
					onClick={resetFiltersFromCatalogs}
				>
					<ShoppingCartIcon sx={{ mr: 0.5 }}  fontSize="inherit" className='brIcon'/>
					<span className='brTitle'>Каталог</span>
				</Link>
				{
					backData
						?
						<Link to={backPath}
								   underline="hover"
								   color="inherit"
								   href="/"
						>
							<ShoppingCartIcon sx={{ mr: 0.5 }}  fontSize="inherit" className='brIcon'/>
							<span className='brTitle'>{backText}</span>
						</Link>
						:
						''
				}
				{
					backData
						?
						<Typography
							sx={{ display: 'flex', alignItems: 'center' }}
							color="text.primary"
						>
							<GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
							<span className='brTitle'>{backTitle}</span>
						</Typography>
						:
						''
				}
				{
					catalog
					?
						<Typography
							sx={{ display: 'flex', alignItems: 'center' }}
							color="text.primary"
						>
							<GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
							<span className='brTitle'>{catalog}</span>
						</Typography>
					:
					''
				}


			</Breadcrumbs>
		</div>
	);
}

export default Breadcrumb;