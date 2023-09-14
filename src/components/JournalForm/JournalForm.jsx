import {useState} from 'react';

import './JournalForm.css';
import Button from '../Button/Button';

const JournalForm = ({onSubmit}) => {


	const [formValid,setFromValid]=useState({
		title:true,
		text:true,
		date:true
	});

	

	const addJournalItem=e=>{
		e.preventDefault();

		const formData=new FormData(e.target);
		const formProps=Object.fromEntries(formData);

		let isFormValid=true;

		if(!formProps.title?.trim().length){
			setFromValid(state=>({...state,title:false}));
			isFormValid=false;
		}else{
			setFromValid(state=>({...state,title:true}));
		}

	

		if(!formProps.text?.trim().length){
			setFromValid(state=>({...state,text:false}));
			isFormValid=false;
		}else{
			setFromValid(state=>({...state,text:true}));
		}

		if(!formProps.date.length){
			setFromValid(state=>({...state,date:false}));
			isFormValid=false;
		}else{
			setFromValid(state=>({...state,date:true}));
		}
		if(!isFormValid){
			return;
		}

		onSubmit(formProps);
	};
    
	return (
		<form className='journal-form' onSubmit={addJournalItem}>
			<input type="text" name='title' style={{border:formValid.title?null:'3px solid red'}}/>
			<input type="date" name="date" style={{border:formValid.date?null:'3px solid red'}}/>
			<input type="text" name="tag"  />
			<textarea name="text" id="text" cols="30" rows="10" style={{border:formValid.text?null:'3px solid red'}}></textarea>
			<Button text="Save me" />
		</form>
	);
};

export default JournalForm;