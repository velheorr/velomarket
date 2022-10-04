import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {useState} from "react";
import {NavLink} from "react-router-dom";

const SmallMenu =({css,openModal})=> {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<>
			<Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }} className={css}>
					<IconButton
						onClick={handleClick}
						sx={{ ml: 2 }}
						aria-controls={open ? 'account-menu' : undefined}
						aria-haspopup="true"
						aria-expanded={open ? 'true' : undefined}
					>
						<MenuIcon/>
					</IconButton>
			</Box>
			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: 'visible',
						filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
						mt: 1.5,
						'& .MuiAvatar-root': {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						'&:before': {
							content: '""',
							display: 'block',
							position: 'absolute',
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: 'background.paper',
							transform: 'translateY(-50%) rotate(45deg)',
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			>
				<NavLink to="/" exact className={isActive => (isActive ? 'active' : '')}><MenuItem>Каталог</MenuItem></NavLink>
				<NavLink to="/repair" className={isActive => (isActive ? 'active' : '')}><MenuItem>Сервис и Ремонт</MenuItem></NavLink>
				<NavLink to="/delivery" className={isActive => (isActive ? 'active' : '')}><MenuItem>Оплата и Доставка</MenuItem></NavLink>
				<NavLink to="/contacts" className={isActive => (isActive ? 'active' : '')}><MenuItem>Контакты</MenuItem></NavLink>
				<a href="#/"><MenuItem onClick={openModal}>Обратная связь</MenuItem></a>
			</Menu>
		</>
	);
}

export default SmallMenu;