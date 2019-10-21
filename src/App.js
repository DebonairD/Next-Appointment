import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ShowNextAppointments from './components/ShowNextAppointments';
import NextAppointmentForm from './components/NextAppointmentForm';
import ShowNextAppointment from './components/ShowNextAppointment';

class App extends React.Component{
  constructor() {
    super()
    this.state={
        nextAppointments:[]
      }
    }
    fetchAppointments=()=>{
      fetch("http://localhost:8080/nextAppointments")
      .then((res)=>res.json())
      .then((appointments)=>{
        this.setState({nextAppointments: appointments})
      })
  }
  componentDidMount(){
    this.fetchAppointments();
  }
  render(){
  return (
    <Router>
      <nav>
        <ul>
         <li>
          <Link to="/">Appointments</Link>
         </li>
         <li>
          <Link to="/create">Create</Link>
         </li>
        </ul>
      </nav>
        <div id= "content_body">
          <Switch>
            <Route path="/nextAppointment/:id" render={(props)=>(
              <ShowNextAppointment{...props} fetchAppointments={this.fetchAppointments} />
              )}/>
            <Route path="/edit/nextAppointment/:id" render={(props)=>(
              <NextAppointmentForm {...props} fetchAppointments={this.fetchAppointments} />
              )}/>
            <Route path="/create" render={(props)=>(
              <NextAppointmentForm {...props} fetchAppointments={this.fetchAppointments} />
              )}/>
            <Route exact path="/" render={(props)=>(
              <ShowNextAppointments {...props} fetchAppointments={this.fetchAppointments} nextAppointments={this.state.nextAppointments} />
            )}/>
          </Switch>
        </div>
    </Router>
  );
 }
}
export default App;
