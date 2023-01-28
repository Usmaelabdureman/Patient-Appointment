import React from 'react'

function AppointmentModal({ setShowModal }) {
    const onChange = () => {
        setShowModal((prev) => !prev)
    }
    return (
        <div className='modal-cont'>
            <div className='input-cont'>
            <h3>Appointment Form</h3>
            <div class="mb-3">
                <label className="form-label">Patient Name</label>
                <input type="text" class="form-control" placeholder="" />
            </div>
            <div class="mb-3">
                <label className="form-label">Patient Phone Number</label>
                <input type="text" class="form-control" placeholder="" />
            </div>
            <div class="mb-3">
                <label className="form-label">Card Number</label>
                <input type="text" class="form-control" placeholder="" />
            </div>
            <div class="mb-3">
                <label className="form-label">Specialization</label>
                <input type="text" class="form-control" placeholder="" />
            </div>
            <div class="mb-3">
                <label className="form-label">Doctor Name</label>
                <input type="text" class="form-control" placeholder="" />
            </div>
            <div class="mb-3">
                <label className="form-label">Date</label>
                <input type="text" class="form-control" placeholder="" />
            </div>
            <div class="mb-3">
                <label className="form-label">Time</label>
                <input type="text" class="form-control" placeholder="" />
                </div>
                <div className="d-grid gap-2 d-md-block ">
                    <button className="btn btn-primary " type="button">Make An Appointment</button>
                </div>
            </div>
            </div>
    )
}

export default AppointmentModal