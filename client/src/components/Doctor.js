import React from "react";
import { useNavigate } from "react-router-dom";
import doc from '../Assets/doc.png'


function Doctor({ doctor }) {
  const navigate = useNavigate();
  return (
    <div
      className="card p-2 cursor-pointer"
      onClick={() => navigate(`/book-appointment/${doctor._id}`)}
    >
      <img className="logo" src={doc} alt="Admin Photo"/>
      <h1 className="card-title">
      
        {doctor.firstName} {doctor.lastName}
      </h1>
      <hr />
      <p>
        <b>Phone Number : </b>
        {doctor.phoneNumber}
      </p>
      <p>
        <b>Address : </b>
        {doctor.address}
      </p>
      {/* <p>
        <b>Fee per Visit : </b>
        {doctor.feePerCunsultation}
      </p> */}
      <p>
        <b>Timings : </b>
        {doctor.timings[0]} - {doctor.timings[1]}
      </p>
    </div>
  );
}

export default Doctor;
