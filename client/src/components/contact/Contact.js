import React from 'react'
import loc from '../../Assets/loc.png'
import './contact.css'

function Contact() {
  return (
    <div className="container">
    <div className="card">
    <div className="card-title">
        <h2> Contact Us</h2>
        </div>
        <div className="card-body">
           
            <div className="label">
            <h5>You can reach us through the following address</h5>
              <input className="inp" 
                name="name"
                type="text"
                placeholder="Your Name"
              />
            
              <input className="inp" 
                name="email"
                type="email"
                placeholder="Your Email"
              />
           
            
           
              <textarea  className="inp" placeholder='Message' name="message" cols={30} rows={10} >
               
              </textarea>
              <button type="submit" className="btn btn-success"> Send</button>
            </div>
            <div className='location'>
                <h5>Location</h5>
            <div className='img'> <img src={loc} alt=''  height="100%" width="100%" id="image-section"  /></div>

            </div>
        
       
      </div>
      </div>
      </div>



  )
}

export default Contact
