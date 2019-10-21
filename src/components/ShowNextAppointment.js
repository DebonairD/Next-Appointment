import React from 'react';
import {Link} from 'react-router-dom';

const ShowNextAppointment=(props)=>{
	const [appointment, setAppointment] = React.useState({});

	React.useEffect(()=>{
		const id = props.match.params.id;
		fetch("http://localhost:8080/nextAppointment/" + id)
			.then((res)=>res.json())
			.then((appointmentRes)=>{
					setAppointment(appointmentRes);
			})
	}, [props.match]);
	const deleteNextAppointment=(id)=>{
		fetch("http://localhost:8080/nextAppointment/" + id, {
			method: 'delete'
		}).then(()=>{
			props.fetchAppointments();
			props.history.push('/');
	})
}

	return(
			<ul>
				<div>
				<li> Service(s): {appointment.service}</li>
				<li> Name: {appointment.name}</li>
				<li> Date: {appointment.date}</li>
				<li> Time: {appointment.time}</li>
				<li> Total: {appointment.amount}</li>
				<li> Location: {appointment.location}</li>
				<button onClick={()=>deleteNextAppointment(appointment.id)}>Delete</button>
				<Link to={"/edit/nextAppointment/" + appointment.id}><button>Edit</button></Link>
				</div>
			</ul>
	)
}

export default ShowNextAppointment;