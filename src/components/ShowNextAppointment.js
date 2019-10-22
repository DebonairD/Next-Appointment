import React from 'react';
import {Link} from 'react-router-dom';

const ShowNextAppointment=(props)=>{
	const [appointment, setAppointment] = React.useState({});

	React.useEffect(()=>{
		const id = props.match.params.id;
		fetch("http://nextappointment.cfapps.io/" + id)
			.then((res)=>res.json())
			.then((appointmentRes)=>{
					setAppointment(appointmentRes);
			})
	}, [props.match]);
	const deleteNextAppointment=(id)=>{
		fetch("http://nextappointment.cfapps.io/nextAppointment/" + id, {
			method: 'delete'
		}).then(()=>{
			props.fetchAppointments();
			props.history.push('/');
	})
}

	return(
		<div>
			<div className="form-div"> Service(s): {appointment.service}</div>
			<div className="form-div"> Name: {appointment.name}</div>
			<div className="form-div"> Date: {appointment.date}</div>
			<div className="form-div"> Time: {appointment.time}</div>
			<div className="form-div"> Total: {appointment.amount}</div>
			<div className="form-div"> Location: {appointment.location}</div>
			<button className="delete-button" onClick={()=>deleteNextAppointment(appointment.id)}>Delete</button>
			<Link to={"/edit/nextAppointment/" + appointment.id}><button>Edit</button></Link>
		</div>
			
	)
}

export default ShowNextAppointment;