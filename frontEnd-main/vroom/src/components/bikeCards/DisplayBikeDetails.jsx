import React from 'react'
import { useNavigate } from 'react-router-dom'
import Audi from "../../assets/audir8.jpg"


const DisplayCarDetail = () => {
  const navigate =useNavigate();
  const handleBook=()=>{
    navigate("/userdetail");
  }
  return (
    <div>
        <div className="container">
      <div className="row parent items-center">
        <div className="col-2">
   <img src={Audi}alt="" />
        </div>
        <div className="col-2">
         
          <label className="loc">Kawasaki Ninja</label>
          <br />
          <span col-2>
             Automatic : Petrol <br /> 2 seats
          </span>
        </div>
        <div className="col-2">
          <label className='travel'> 23k kms driven</label>
         
        
        </div>
       
        <div className="col-2">
          <h2 className='head'>&#x20a8; 2500 </h2>
        </div>
        <div className="col-2">
          <button onClick={handleBook} class="viewAll">Book</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default DisplayCarDetail