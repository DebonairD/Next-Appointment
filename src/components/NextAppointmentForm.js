import React from 'react';

const NextAppointmentForm=(props)=>{
	const [id, setId] = React.useState(0);
	const [name, setName] = React.useState("");
	const [service, setService] = React.useState("");
	const [location, setlocation] = React.useState("");
	const [time, setTime] = React.useState("");
	const [date, setDate] = React.useState("");
	const [amount, setAmount] = React.useState("");
const onServiceInput=(e)=>{
	setService(e.target.value);
}
const onNameInput=(e)=>{
	setName(e.target.value);
}
const onLocationInput=(e)=>{
	setlocation(e.target.value);
}	
const onDateInput=(e)=>{
	setDate(e.target.value);
}	
const onTimeInput=(e)=>{
	setTime(e.target.value);
}
const  onAmountInput=(e)=>{
	setAmount(e.target.value);
}
const handleCreateClick=()=>{
	fetch('http://NextAppointment.cfapps.io/nextAppointment', {
		method:'post',
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			service: service,
			name: name,
			location: location,
			date: date,
			time: time,
			amount: amount
		})
	}).then(()=>{
		props.fetchAppointments();
			setService("");
			setName("");
			setlocation("");
			setDate("");
			setTime("");
			setAmount("");
			props.history.push('/');
	})
}
const handleUpdateClick=()=>{

	fetch('http://NextAppointment.cfapps.io/nextAppointment/' + id, {
		method:'put',
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			service: service,
			name: name,
			location: location,
			date: date,
			time: time,
			amount: amount
		})
	}).then(()=>{
		props.fetchAppointments();
			setId(0);
			setService("");
			setName("");
			setlocation("");
			setDate("");
			setTime("");
			setAmount("");
			props.history.push('/');
		})
}
React.useEffect(()=>{
	let id = props.match ? props.match.params.id : 0;
	setId(id);
}, [props.match])
let buttonAction;
if(id){
	buttonAction = <button className="form-button" onClick={handleUpdateClick}>Update</button>
} else {
	buttonAction = <button className="form-button" onClick={handleCreateClick}>Create</button>	
}
return(
	<div>
		<h1>Next Appointment Form</h1>
		  
			<div className="form-div"><input type ="text" value={service}  onChange={onServiceInput}  placeholder = "Service"/></div>
			<div className="form-div"><input type ="text" value={name}     onChange={onNameInput}     placeholder = "Name"/></div>
			<div className="form-div"><input type ="text" value={location} onChange={onLocationInput} placeholder = "Location"/></div>
			<div className="form-div"><input type ="text" value={date}     onChange={onDateInput}     placeholder = "Date"/></div>
			<div className="form-div"><input type ="text" value={time}     onChange={onTimeInput}     placeholder = "Time"/></div>
			<div className="form-div"><input type ="text" value={amount}   onChange={onAmountInput}   placeholder = "Amount"/></div>
		  
		 {buttonAction}
	</div>	
	)
}

export default NextAppointmentForm;
