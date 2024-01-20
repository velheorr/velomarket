import React, {useEffect, useState} from 'react';
import './elements.scss'
import {Button} from "@mui/material";
import Loader from "../assets/loader/Loader";

const Price = ({data}) => {
	const [space, setSpace] = useState(data);
	const [viewPrice, setViewPrice] = useState(false)
	const [load, setLoad] = useState(false)

	useEffect(()=>{
		addSpaceToPrice()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [space])

	const addSpaceToPrice = ()=>{
		if (data.length > 3){
			if (data.length <= 3){
				return setSpace(data)
			} else if (data.length === 4) {
				let out = data.split('')
				out.splice(1, 0, " ")
				return setSpace(out.join(''))
			} else if (data.length === 5) {
			let out = data.split('')
			out.splice(2, 0, " ")
			return setSpace(out.join(''))
		}
			/*let out = data.split('')
			out.splice(2, 0, " ")
			setSpace(out.join(''))*/
			return
		}
	}

	const toggleViewPrice = ()=>{
		setViewPrice(true)
		setTimeout(function (){
			setLoad(true);
		}, 1000)

	}


	return (
		<div className='itemPrice'>
			{
				!viewPrice
					? <Button color="secondary" size="small" onClick={toggleViewPrice}>Нажмите, чтобы узнать цену</Button>
					: !load
						? <Loader text={'Получение цены...'} css={{fontSize: '14px', width: '150px'}}/>
						: <div >Цена: {space} <span className='price'>₽</span></div>
			}

		</div>

	);
};

export default Price;