import  './footer.css'
import logo from '../../Assets/logo.png'

function Footer() {
  return (
    <div className='footer'>
        <div className="fLists">
            <ul className="fList">
               
                <li className="fListItem"><img src={logo}alt='' /></li>
                
            </ul>
            <ul className="fList">
               
                <h2>Navigation </h2>
                <li className="fListItem">About</li>
                <li className="fListItem">Services</li>
            </ul>
            <ul className="fList">
               
                <li><br/></li>
                <li><br/></li>
                <li className="fListItem">Information</li>
                <li className="fListItem">Register</li>
            </ul>
            <ul className="fList">
                
                <li><br/></li>
                <li><br/></li>
                <li className="fListItem">Doctors</li>
                <li className="fListItem">Dentists</li>
            </ul>
            <ul className="fList">
                <h2>Contacts</h2>
                <li  className="fab fa-facebook-f">Countries</li>
                <li className="fListItem">Countries</li>
            </ul>
        </div>
       <div className="fText">Copyright @2023  Tikur Anbessa</div>
    </div>
  )
}

export default Footer
