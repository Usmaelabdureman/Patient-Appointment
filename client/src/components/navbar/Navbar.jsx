import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import logoo from '../../Assets/logo.png'
import './navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
    <div className='navContainer'>
      <div className="logoo">
        <Link to='/'><img src={logoo} alt="Lion logo" /></Link>
      </div>
      <ul>
    <>
        <li>
          <button className='navButton'>
        <Link to='/login'><FaSignInAlt />Login</Link></button>
    </li>
    <li>
    <button className='navButton'>
        <Link to='/register'><FaUser />Register</Link></button>
    </li>
        </>
        
      </ul>
    </div>
    </div>
  )
}

export default Navbar
