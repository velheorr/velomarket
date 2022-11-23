import './Modal.scss'
import {Button, Divider} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

import {showModal} from "./ModalSlice";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import {api} from '../api/api'


const Modal = () => {
	const dispatch = useDispatch()
	const { register, handleSubmit, formState: { errors }, } = useForm();

	const onSubmit = data =>{
		api.sendContact(data)
		dispatch(showModal(false))

	};


	// закрытие и очистка модального окна
	const closeModal = ()=>{
		dispatch(showModal(false))
	}


	return (
		<div className='modal'>
			<Paper className='modalContent' elevation={3}>
				<div className='close' >
					<div>Свяжитесь с нами</div>
					<Button size="small" sx={{color: '#000'}} onClick={closeModal}>X</Button>
				</div>
				<Divider sx={{mb: '10px'}}/>
				<div className='modalBody'>
					<form onSubmit={handleSubmit(onSubmit)}>
						<TextField {...register("name")} className='mb'
								   size="small" fullWidth label="Имя"/>
						<TextField {...register("contact", {required: 'Укажите телефон или почту для связи'})}
								   size="small" fullWidth label="Телефон или почта" className='mb'
								   error={errors.contact && true}
								   helperText={errors.contact && <span style={{color: 'red'}}>{errors.contact.message}</span>}/>
						<div className='mb'><TextField {...register("text")} sx={{backgroundColor: '#fff'}}
										size="small" fullWidth label="Ваш вопрос" multiline rows={4}/></div>
						<div style={{textAlign: 'center'}}><Button size="small" variant="outlined" type="submit" startIcon={<SendIcon/>}>Отправить</Button></div>
					</form>
				</div>
			</Paper>
		</div>
	);
};

export default Modal;