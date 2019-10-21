import React from 'react';
import {Link} from 'react-router-dom';

const ShowNextAppointments=(props)=>{
	let nextAppointmentsElArr = props.nextAppointments.map((appointment, index)=>{
		return (
			<Link to= {"/nextAppointment/" + appointment.id} key = {index}>
				
					<h1> Next Appointment </h1>
					<div className="form-div"> Service: {appointment.service}</div>
					<div className="form-div"> Name: {appointment.name}</div>
					<div className="form-div"> Date: {appointment.date}</div>
					<div className="form-div"> Time:{appointment.time}</div>
					<div className="form-div"> Amount: {appointment.amount}</div>
					<div className="form-div"> Location: {appointment.location}</div>
				
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