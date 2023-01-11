import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import logo from '../Assets/sign-upimg.svg'

function Register() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone:'',
        password: '',
        confrimPassword: '',
    })
    const { firstName, lastName,phone, password, confirmPassword } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(() => {

        if (isError) {
            toast.error(message)
        }

        if (isSuccess || user) {
            toast.success("User created Successfully!") &&
            navigate('/')
        }
        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            toast.error('Password do not match')
        } else {
            const userData = {
                firstName,lastName, phone, password
            }
            dispatch(register(userData))
        }
    }

    if (isLoading) {
        return <Spinner />
    }

    return <>
       <div className='container' >
            <div className='row '>
            <div className='col-md-3 col-sm-6'>
                    <img src={logo} alt='..' width={400} />
                </div>
                <div className='col-md-6 offset-md-2 col-sm-6'>
                    <div className='card bg-white ' style={{"border-radius":"15px","height": "90%"}}>
                         {/* <h1 className='text-center' >
                            <FaUser /> Register
                        </h1> */}
                        <h2 className='text-center'>Create New account</h2>
                  
                  <form onSubmit={onSubmit}>
                  <div className='row ml-2'>
                  <div className='col form-group'>
                  <label htmlFor='firstName'></label>
                          <input
                           type="text"
                           className="form-control" 
                           id="firstName " name='firstName' 
                           value={firstName} 
                           placeholder='Enter First Name' 
                           onChange={onChange} />
                  </div>
                  <div className='col form-group'>
                  <label htmlFor='lastName'></label>
                          <input
                           type="text"
                           className="form-control" 
                           id="lastName " name='lastName' 
                           value={lastName} 
                           placeholder='Enter Last Name' 
                           onChange={onChange} />
                  </div>
                  </div>
                      <div className="form-group">
                      <label htmlFor='phone'></label>
                          <input 
                          type="tel" 
                          className="form-control" 
                          id="phone " name='phone' 
                          value={phone} 
                          placeholder='Enter your phone' 
                          onChange={onChange} />
                      </div>
                      <div className="form-group mt-2">
                          <input 
                          type="password" 
                          className="form-control" id="password " name='password' value={password} placeholder='Enter password' onChange={onChange} />
                      </div>
                      <div className="form-group mt-2">
                          <input type="password" className="form-control" id="confirmPassword " name='confirmPassword' value={confirmPassword} placeholder='Confirm password' onChange={onChange} />
                      </div>
                      
                      <button type="submit" className='btn btn-primary btn-lg btn-block mt-3'>Submit</button>
                    
                  </form>

                    </div>
                  
                       
                </div>
            </div>
        </div>
    </>
}

export default Register
