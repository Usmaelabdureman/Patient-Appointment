import { Button } from 'bootstrap'
import React, { useState } from 'react'
import Navbar from '../components/navbar'
import appointment from "../image/appointment.png"
import AppointmentModal from './appointmentModal'

function Homepage() {
    const [showModal, setShowModal] = useState(false)
    const onChange = () => {
        setShowModal((prev)=>!prev)
    }
    return (
        <div>
            <Navbar />
            <div className='home-div'>

                <div className='parent-div'>
                    <div className='desc'>
                        <p className='desc'>Tikur Anbessa Patient Appointment is an application made just
                            for you so that you don't have to m Anbessa Patient Appointment is an application made just
                            for you so that you don't have to m ove form where you are in order to make appointment
                        </p>
                        <ul>
                            <li>easy </li>
                            <li>fast </li>
                            <li>efiicient</li>
                        </ul>
                        <p className='desc'>Tikur Anbessa Patient Appointment is an application made just
                            for for you so that you don't have to m ove form where you are in order to make appointment
                        </p>
                    </div>
                    <img src={appointment} height="400" width="500" />
                </div>
                <div className="d-grid gap-2 d-md-block , appoint-button">
                    <button onClick={onChange} className="btn btn-primary" type="button">Make An Appointment</button>
                </div>
                <p className='desc'>Tikur Anbessa Patient Appointment is an application made just
                            for you so that you don't have to m Anbessa Patient Appointment is an application made just
                            for you so that you don't have to m ove form where you are in order to make appointment
                        </p>
                        <ul>
                            <li>easy </li>
                            <li>fast </li>
                            <li>efiicient</li>
                        </ul>
            </div>     
            {showModal && <AppointmentModal setshowModal={setShowModal}/>}
        </div>
    )
}

export default Homepage