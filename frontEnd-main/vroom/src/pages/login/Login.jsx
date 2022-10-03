import React, { useState } from "react";
import "./login.scss";
import{Link} from 'react-router-dom';
// import axios from 'axios';
import {  useNavigate } from "react-router-dom";
import loginimg from "../../assets/signupImage.webp";

const Login = () => {
  const navigate=useNavigate();
  // const userRef=userRef();
  // const eerRef=useRef();  
  const [username,setUserName]=useState(""); 
  const [password,setPassword]=useState(" "); 
  // const [eerMsg,setErrMsg]=useState("");
  // const [success,setSuccess]=useState("");
  // const [validate,setValidate]= useState("");


   

  // useEffect(()=>{
  //   userRef.current.focus();
  // });

  // useEffect(()=>{
  //   setErrMsg("");
  // },[username,password])

  const handleSubmit= async(event)=>{

    if(username==='akshatjain' && password==="123456")
    navigate("/");
    else
    alert("please enter correct password!");
    // const url = `http://localhost:8080/api/user/getusername/${username}`;
    // await function getUserByid(){
    //   try{
    //     axios.get(url).then(response=>{
    //       setValidate(response.data);
    //     })
    //   }
    //   catch(e){
    //     console.log(e);
    //   }
    };
    
    // event.preventDefault();
    // setUserName("");
    // setPassword("");
    // setSuccess(true);

  
  return (
    <>
  
 
      <section className="Form my-4 mx-5">
       {/* <p ref={eerRef} className={eerMsg ? "eermsg":"offscreen"} aria-live="assertive">{eerMsg}</p> */}
        <div className="container">
          <div className="row no-gutters">
            <div className=" image col-lg-5">
               <img
                src={loginimg}
                className="d-block w-100"
                alt="..."
                width="200px"
                height="200px" 
              /> 
            </div>
            <div className="col-lg-7">
              <h1 className="font-weight-bold py-3 pt=5">Login to your account</h1>
              {/* <h4>Login to your account</h4> */}
              <form method="POST" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                    onChange={(event)=>{
                      setUserName(event.target.value)
                    }}
                    value={username}
                      type="text"
                      placeholder="Enter your User Name"
                      className="form-control my-3 p-4"
                      name="username"
                      id="username"
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                    onChange={(event)=>{
                      setPassword(event.target.value)
                    }}
                      type="password"
                      placeholder="Enter your password"
                      className="form-control my-3 p-4 "
                      name="password"
                      required
                      value={password}
                      id="password"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <button  type="submit" className="loginSubmit mb-2">
                  
                      Login
                    </button>
                  </div>
                </div>
               
              </form>
              <a className="a" href="/">  
                </a>
                <p>
                  Don't have account?
                  <Link to="/signup" >
                 SignUp
                </Link> 
                </p>
            </div>
          </div>
        </div>
      </section>
     
      
  
    </>
  );
  
};

export default Login;
