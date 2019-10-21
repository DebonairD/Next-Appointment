import React from 'react';
import {Link} from 'react-router-dom';

const ShowNextAppointments=(props)=>{
	let nextAppointmentsElArr = props.nextAppointments.map((appointment, index)=>{
		return (
			<Link to= {"/nextAppointment/" + appointment.id} key = {index}>
				<ul>
					<h1> Next Appointment </h1>
					<li>  {appointment.service}</li>
					<li>  {appointment.name}</li>
					<li>  {appointment.date}</li>
					<li>  {appointment.time}</li>
					<li>  {appointment.amount}</li>
					<li>  {appointment.location}</li>
				</ul>
			</Link>
		)
	})
	return(
		<div>
			<h1>Show Next Appointment</h1>
			{nextAppointmentsElArr}
		</div>
	)
}

export default ShowNextAppointments;