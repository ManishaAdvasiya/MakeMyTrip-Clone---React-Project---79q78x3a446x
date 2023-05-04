import React from 'react'
import "./Navbar.css";
import { RiFlightTakeoffFill } from 'react-icons/ri';
import { FaHotel } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { GiAirBalloon } from 'react-icons/gi';
import { FaTrain } from 'react-icons/fa';
import { FaBusAlt } from 'react-icons/fa';
import { AiFillCar } from 'react-icons/ai';
import { GiMoneyStack } from 'react-icons/gi';
import { TbPlaneInflight } from 'react-icons/tb';
import { GiSwordman } from 'react-icons/gi';
import { AiFillHome } from 'react-icons/ai';
//import { BsFillGrid3X3GapFill } from 'react-icons/bs';


export function Navbar () {
  //code toggle
  

  
  return (
    <section className='navBarSection'>
      <div className='header'>
        <div className='logoDiv'>
          <a className='logo'>
           <img className='flex'  src="https://th.bing.com/th?id=OIP.gmTiRWgMzn2XfcpShG4XVAHaCW&w=350&h=111&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"/>
          </a>
          </div>
         <div className='navBar'>
            <ul className='navLists flex'>
            <li className='navItem'>
               <a href='/home' className='navLink flights'> <AiFillHome className='icon'/>Home</a>
            </li>
            <li className='navItem'>
               <a href='/demo' className='navLink'> <RiFlightTakeoffFill className='icon'/>Flights</a>
            </li>

              <li className='navItem'>
                <a href='/Train' className='navLink'> <FaTrain className='icon'/>Trains</a>
              </li>
              <li className='navItem'>
                <a href='/Hotel' className='navLink'> <FaHotel className='icon'/>Hotals</a>
              </li>
              <li className='navItem'>
                <a href='#' className='navLink'> <FaHome className='icon'/>Stays</a>
              </li>
              <li className='navItem'>
                <a href='#' className='navLink'> <GiAirBalloon className='icon holiday'/>Holiday</a>
              </li>
              <li className='navItem'>
                <a href='#' className='navLink'> <FaBusAlt className='icon'/>Buses</a>
              </li>
               <li className='navItem'>
                <a href='#' className='navLink'><AiFillCar className='icon'/>Cabs</a>
              </li>
              <li className='navItem'>
                <a href='#' className='navLink'><GiMoneyStack className='icon'/>Forex</a>
              </li>
              <li className='navItem'>
                <a href='#' className='navLink'><TbPlaneInflight className='icon'/>ChartedFlight</a>
              </li>
              <li className='navItem'>
                <a href='#' className='navLink'><GiSwordman className='icon'/>Acitvites</a>
              </li>
             
              <div className='headerBtns flex'>
                <button className='btn loginBtn'>
                  <a href='/login'>Login</a>
                </button>
                <button className='btn' style={{marginLeft:"10px"}}>
                  <a href='/'>SingUp</a>
                </button>
              </div>
            </ul>
         {/*div className='closeNavbar'>
              <AiFillCloseCircle className='icon'/>
  </div>*/}
            </div>
            {/*<div onClick={showNav}className='toggleNavbar'>
              <BsFillGrid3X3GapFill className="icon"/>
</div>*/}
   </div>
</section>
  )
}

export default Navbar;