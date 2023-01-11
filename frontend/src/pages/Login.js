import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate,Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import logins from '../Assets/login-img.svg'

function Login() {
    const [formData, setFormData] = useState({
        phone: '',
        password: '',
    })
    const { phone, password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(() => {

        if (isError) {
            toast.error(message)
        }

        if (isSuccess || user) {
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

        const userData = {
            phone,
            password,
        }
        dispatch(login(userData))
    }
    if (isLoading) {
        return <Spinner />
    }
    return (
        <div className='container'>
            <div className='row'>
            <div className='col-md-3 col-sm-6'>
                    <img src={logins} alt='login-page' width={400} />
                </div>
                <div className='bg-light col-md-6 offset-md-2 col-sm-6 card mt-4'>
                    <h1>
                        <FaSignInAlt /> Login
                    </h1>
                    <h2>Login to your account</h2>

                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor='phone'></label>
                            <input
                                type="tel"
                                className="form-control"
                                id="phone "
                                name='phone'
                                value={phone}
                                placeholder='Enter your phone'
                                onChange={onChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor='password'></label>
                            <input
                                type="password"
                                className="form-control"
                                id="password " name='password'
                                value={password}
                                placeholder='Enter password'
                                onChange={onChange} />
                        </div>
                        <div className="form-group">
                            <button type="submit" className='btn btn-primary mt-2'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login
