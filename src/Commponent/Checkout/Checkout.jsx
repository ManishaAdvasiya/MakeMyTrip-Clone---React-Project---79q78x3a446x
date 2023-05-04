import React from 'react'

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

export function Checkout() {

  const userName = JSON.parse(localStorage.getItem("user"));

  return (
    <>
     
     <div>
     <section className='navBarSection'>
      <div className='header'>
        <div className='logoDiv'>
          <a className='logo'>
           <img className='flex'  src="https://th.bing.com/th?id=OIP.gmTiRWgMzn2XfcpShG4XVAHaCW&w=350&h=111&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"/>
          </a>
          </div>
          <div className='navBar' style={{marginLeft:"170px"}}>
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
                <a href='#' className='navLink'><FaUserAlt className='icon'/>{userName.name}</a>
 
              </li>
             
             
              <div className='headerBtns flex'>
                <button className='btn loginBtn'>
                  <a href='/'>Login</a>
                </button>
                <button className='btn' style={{marginLeft:"10px"}}>
                  <a href='/signup'>SingUp</a>
                </button>
              </div>
            </ul>
            </div>
          </div></section>






      <div className='py-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-5'>
              <div className='card' style={{ marginTop: "150px" }}>
                <div className='card-header'>
                  <h4>Fare Summary</h4>
                </div>
                <table className='table'>
                <div>
                  <thead>
                    <tr>
                      <th>Base Fare</th>
                      <td>120000</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{marginTop:"60px"}}>
                    <th>Fee & Sucharges</th>
                      <td>750</td>
                     
                    </tr>
                    <tr>
                      <th>price</th>
                      <td>750</td>
                    </tr>
                  </tbody>
                  </div>
            </table>
              </div>
         
            </div>


            <div className='col-md-5'>
              <div className='card' style={{ marginTop: "150px" }}>
                <div className='card-header'>
                  <h4>Payment Method</h4>
                </div>
                <div className='card-body'>
                  <div className='column'>
                    <div className='col-md-12'>
                      <div className='form-group'>
                        <input type="text" name='firstname' placeholder='Name on Card' className='form-control' />
                      </div>
                    </div>
                    <div className='col-md-12'>
                      <div className='form-group'>
                        <input type="text" name='firstname' placeholder='Card Number' className='form-control' />
                      </div>
                    </div>
                    <div className='col-md-12'>
                      <div className='form-group mb-3'>
                        <input type="text" name='firstname' placeholder='Expiry Date' className='form-control' />
                      </div>
                    </div>
                    <div className='col-md-12'>
                      <div className='form-group mb-3'>
                        <input type="text" name='firstname' placeholder='CVV' className='form-control' />
                      </div>
                    </div>
                    <div className='col-md-5'>
                      <div className='form-group'>
                        <input type="button" name='firstname' placeholder='pay' value="pay"className='form-control'  style={{backgroundColor: "grey",color:"#fff"}} />
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
      </div>
    </>

  )
}

