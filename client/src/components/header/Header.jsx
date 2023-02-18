import doc from '../../Assets/doc.png'
import {Link } from 'react-router-dom'
import './header.css'


function Header() {
  return (
    <div className='rowh'>
          
    <div className='col'> 
    
    <h1 className='headerTitle'>Welcome to Tokur Anbessa Specialized hospital</h1>
    <div className="pListTitles">
        <h2>Make An Appointment with the Doctor</h2>
        <h3>Health is one of the most important things for us therefore immediately check your health for your good</h3>
             <button className='headerBtn'><Link to='/login'>Make Appointment</Link></button>
         </div>
    </div>
    <div className='col'> <img src={doc} alt=''  height="100%" width="100%" id="image-section"  /></div>
  </div>
  );
}

export default Header

 