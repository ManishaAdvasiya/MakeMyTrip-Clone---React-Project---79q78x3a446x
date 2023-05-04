import React from 'react'
import "./Home.css";
import { AiOutlineArrowRight } from 'react-icons/ai';

import { RiFlightTakeoffFill } from 'react-icons/ri';
import { FaHotel } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { GiAirBalloon } from 'react-icons/gi';
import { FaTrain } from 'react-icons/fa';
import { FaBusAlt } from 'react-icons/fa';
import { AiFillCar } from 'react-icons/ai';
import { GiMoneyStack } from 'react-icons/gi';
import { TbPlaneInflight } from 'react-icons/tb';
import { FaUserAlt } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';




export function Home() {
  const navigate = useNavigate();
 const userName = JSON.parse(localStorage.getItem("user"));

 const handleLogout = ()=>{
  localStorage.removeItem("loggedin")
  navigate("/login");
 }
  return (
    <div>
    
      <section className='navBarSection'>
      <div className='header'>
        <div className='logoDiv'>
          <a className='logo'>
           <img className='flex'  src="https://th.bing.com/th?id=OIP.gmTiRWgMzn2XfcpShG4XVAHaCW&w=350&h=111&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"/>
          </a>
          </div>
          <div className='navBar' style={{marginLeft:"150px"}}>
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
                <a href='#' className='navLink'> <FaBusAlt className='icon'/>Buses</a>
              </li>
              <li className='navItem'>
                <a href='#' className='navLink'> <GiAirBalloon className='icon holiday'/>Holiday</a>
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
                <a href='#' className='navLink'><FaUserAlt className='icon'/>{userName.name}</a>
              </li>
             
              <div className='headerBtns flex'>
                <button className='btn loginBtn'>
                  <a href='/'>Login</a>
                </button>
             
                <button 
                
                type='butoon'
                 className='btn' style={{marginLeft:"10px"}}>
                 <a href='/signup'>Signup</a>
                </button>
              </div>
            </ul>
            </div>
          </div></section>
  
  <div className='home'>
    <div className='homeCard grid'>
        <div className='bookways'>
          <div className='oneway'>
             <input type='radio' name='way' value='oneway'/>
             <span>OneWay</span>
           </div>
            <div className='roundway'>
             <input type='radio' name='way'  value='roundway'/>
             <span>Roundway</span>
          </div>
          <div className='multiway' >
             <input type='radio' name='way'  value='multiway'/>
             <span>MultiWay</span>
          </div>
          <div className='BookFlights'>
            <p>Book International and Domestic Flights</p>
          </div>
    </div>
   
<div className='form_container'>
  <form>
    <div className='LocationDistains'>
      <div className='locationDiv'>
          <label htmlFor='From'>From</label>
          <input type='text' placeholder='location' className='input1' />
        </div>
        <div className='distDiv'>
          <label htmlFor='To'>To</label>
          <input type='text' placeholder='Distains'  className='input1'/>
        </div>
        <div className='depaDiv'>
          <label htmlFor='Departure'>Departure</label>
          <input type='Date' placeholder='Departure'  className='input1' />
        </div>

        <div className='returDiv'>
          <label htmlFor='Return'>Return</label>
          <input type='Date' placeholder='Return'  className='input1' />
        </div>
        <div className='traveller'>
          <label htmlFor='traveller'>Traveller & class</label>
           <input type='Date' placeholder='Date'  className='input1'/>
        </div>
     </div>


  <div className='makemyflex hrtlcenter flightfare'>
    <div className='makeflex hrtlcenter'>
      <span  style={{fontSize:"13px", color:"#4a4a4a;",fontWeight:"700;",fontFamily:"'Lato', sans-serif;"}}>Select A <br></br>Fare Type</span>
      <ul className='specialFareNew'>
        <li  className='wrapFilter activeItem'>
          <input type="radio" value="regularfare" />
          <span  style={{fontSize:"10px", color:"#4a4a4a;",fontWeight:"700; bold;",paddingLeft:"5px"}}>Regular<br></br> Fares</span>
        </li>
        <li  className='wrapFilter activeItem'>
          <input type="radio" value="regularfare" />
          <span  style={{fontSize:"10px", color:"#4a4a4a;",fontWeight:"700;",paddingLeft:"5px" }}>Armed Forces<br></br>
          Fares</span>
        </li>
        <li  className='wrapFilter activeItem'>
          <input type="radio" value="regularfare" />
          <span  style={{fontSize:"10px", color:"#4a4a4a;",fontWeight:"700;",paddingLeft:"5px" }}>Student<br></br>
                Fares</span>
        </li>
        <li  className='wrapFilter activeItem'>
          <input type="radio" value="regularfare" />
          <span  style={{fontSize:"10px", color:"#4a4a4a;",fontWeight:"700;",paddingLeft:"5px" }}>Senior Citizen<br></br>
            Fares</span>
        </li>
        <li  className='wrapFilter activeItem'>
          <input type="radio" value="regularfare" />
          <span  style={{fontSize:"10px", color:"#4a4a4a;",fontWeight:"700;",paddingLeft:"5px" }}>Doctors & Nurses<br></br>
Fares</span>
        </li>
        <li  className='wrapFilter activeItem'>
          <input type="radio" value="regularfare" />
          <span  style={{fontSize:"10px", color:"#4a4a4a;",fontWeight:"700;",paddingLeft:"5px" }}>Double Seat<br></br>
          Fares</span>
        </li>
      </ul>

      <span  style={{fontSize:"13px", color:"#4a4a4a;",fontWeight:"700;",paddingLeft:"150PX",fontFamily:"'Lato', sans-serif;" }}>Trending Searches:</span>
      <ul className='specialFareNews'>
      <li  className='wrapFilter activeItem'>
      <span  style={{fontSize:"10px", color:"#4a4a4a;",fontWeight:"700;",paddingLeft:"5px" }}>Bangaluru <AiOutlineArrowRight value={{ color: 'blue', size: '50px' }}/> Channnai</span>
      </li>
      </ul>
    </div>
       <button className='btn btns'>SEARCH</button>
  </div>
  </form> 
</div>
</div>
</div>
</div>    

  )
}



//export default Home;