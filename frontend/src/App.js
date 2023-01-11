import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/navbar/Navbar';
import Landing from './pages/landing/Landing';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <>  
    <Router>  
    <div className='container'>
      <Navbar />
      <Routes> 
        <Route path='/' element = {<Landing />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/register' element = {<Register />} />
      </Routes>
    </div>
    </Router>
    <ToastContainer />
    </>


  );
}

export default App;
