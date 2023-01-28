import React from 'react'
import Banner from "../../Assets/Banner.png"
import hospital from "../../Assets/hospital.webp"
import scan from "../../Assets/scanReview.jpg"
import Navbar from '../../components/navbar/Navbar'
import "./stylesheet.css"

function Landingpage() {
  return (
      <div>
          <h1>
              Welcome To Tikur Anbessa Online Patient Appointment Website
          </h1>
          <p>Tikur Anbessa Patient Appointment is an application made just
                        for you so that you don't have to m Anbessa Patient Appointment is an application made just
                        for you so that you don't have to m ove form where you are in order to make appointment
      </p>
      <div class="d-grid gap-2 d-md-block">
  <button class="btn btn-primary" type="button">Sign Up</button>
  <button class="btn btn-primary" type="button">Log In</button>
</div>
          <img src={hospital}  className="img-spec"/>
          <img src={Banner} className="img-spec" />
          <img src={scan} className="img-spec" />
    </div>
  )
}

export default Landingpage