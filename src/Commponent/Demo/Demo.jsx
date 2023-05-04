import React from 'react'
import { Form, Input, DatePicker, Button, Table,Space} from "antd";
//import "./demo.css"
import axios from 'axios';
import { useState } from "react";
//import { AiOutlineSwap } from 'react-icons/ai';

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



export function Demo() {



  const userName = JSON.parse(localStorage.getItem("user"));
   
    const onChangeHandler =()=>{
        console.log("ghhj");
    }




    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState(null); 
    const [dates, setDates] = useState(null); 
    const [data, setData] = useState(null)

    const submitHandler = async () =>{
       // console.log(source, destination, date);
       const response = await axios.get(`https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights`);
       console.log("response", response.data);

       const data = response.data.map( flights => {
        return {
                from: flights.from,
                to: flights.to,
                depature: [flights.departure.departureDate,'|',flights.departure.departureTime],
                return: [flights.return.returnDate,"|",flights.return.returnTime],
                name: flights.airlineName,
                vie: flights.via,
                price: flights.price,
               
                duration: flights.duration,
        }
               
       })
       setData(data);
    };
    const column = 
    [
        {
           title:"From",
           dataIndex:"from",
           key:"from",
        },
         {
            title:"To",
            dataIndex:"to",
            key:"to",
         },
         {
            title:"Depature",
            dataIndex:"depature",
            key:"depature",
         },
      
         {
            title:"Return",
            dataIndex:"return",
            key:"return",
         },
         {
            title:"Name",
            dataIndex:"name",
            key:"name",
         },
         {
            title:"Vie:",
            dataIndex:"vie",
            key:"vie",
         },
         {
            title:"Duration",
            dataIndex:"duration",
            key:"duration",
         },
         {
          title: '',
          key: '',
          sorter: true,
          render: () => (
          <Space>
             <a href='/checkout'><Button type='primary' htmlType="submit" onChange={onChangeHandler}>Button</Button></a>
           </Space>
            ),
         },
   
]
   
     
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
            <li className='navItem' >
               <a href='/home' className='navLink flights'><AiFillHome className='icon'/>Home</a>
            </li>
            <li className='navItem'>
               <a href='/demo' className='navLink'><RiFlightTakeoffFill className='icon'/>Flights</a>
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
                <button className='btn' style={{marginLeft:"10px"}}>
                  <a href='/signup'>SingUp</a>
                </button>
              </div>
            </ul>
            </div>
          </div></section>



    <div className='form-container'>
        <div className='home' >
        <Form className='form-wrapper'  style={{backgroundColor:"#fff",height:"150px",width:"80%", border:"2px solid grey", borderRadius:"10px"}}>
            <div>
                <label htmlFor='from'>FROM</label>
            <Form.Item 
            id='from' 
            name={"from"} 
            rules={[
                { 
                    required:true,
                    message:"please input your from location!",
                }
            ]}>
            <Input value={source} onChange={(e) => setSource(e.target.value)}/>
            </Form.Item>
            </div>


            <div>
                <label htmlFor='to'>To</label>
            <Form.Item
            id='to' 
             name={"To"}
             rules={[
                {   
                    required:true,
                    message:"please input your to location!",
                }
            ]}>
            <Input  value={destination} onChange={(e) => setDestination(e.target.value)}/>
            </Form.Item>
            </div>

           <div>
            <label htmlFor='date'>Despenture</label>
            <Form.Item>
                <DatePicker 
                id='date'
                onChange={(date, dateString) => {
                    //console.log("date ----",date);
                    //console.log("dateString ----",dateString);
                    console.log(date,dateString);
                    setDate(dateString);
                    }}/>
            </Form.Item>
            </div>

            <div>
            <label htmlFor='date'>Return</label>
            <Form.Item>
                <DatePicker 
                id='date'
                onChange={(dates, datesString) => {
                    //console.log("date ----",date);
                    //console.log("dateString ----",dateString);
                    console.log(dates,datesString);
                    setDate(datesString);
                    }}/>
            </Form.Item>
            </div>
    
            <div>
            <Form.Item>
                <Button type='primary' htmlType="submit" onClick={submitHandler} className='betn' style={{marginTop:"20px",width:"100px"}}>Search</Button>
            </Form.Item>
            </div>
        </Form>
      
   
   

     </div>
     <Table columns={column} dataSource={data}  className='tablecolumn' style={{color:"red"}}/>
       
     </div>
     </div>
   
       
  )
}

