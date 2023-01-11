import doc from '../../Assets/doc.png'
import './header.css'

function Header() {
  return (
    <div className='pList'>
    <div className="pListItem">
        <h1 className='headerTitle'>Welcome to Tokur Anbessa Specialized hospital</h1>
        <div className="pListTitles">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum vero esse sunt</h1>
            <button className='headerBtn'>Make Appointment</button>
        </div>

    </div>
    <div className="pListItem">
        <img src={doc} alt='' className="pListImg" />
        
        </div>

    </div>


    // <div className='header1'>
    //     <div className="headerContainer">
    //   <div className="headerList">
    //   <div>
    //   <h1 className='headerTitle'>Welcome to Tokur Anbessa Specialized hospital</h1>
    //   <p className='headerDesc'>
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum vero esse sunt
    //      nobis consequatur at totam beatae perspiciatis in repudiandae voluptatum enim culpa, 
    //     dolores minima eveniet placeat sint illo fugit.
    //   </p>
    //   <button className='headerBtn'>Make Appointment</button>
    //   </div>
    //   <div className='headerListItem active'>
    //         <img src={doc} alt='doc ' />
    //         <span>Stays</span>
    //     </div>
    //   </div>
      
    //   </div>
    // </div>
  )
}

export default Header
