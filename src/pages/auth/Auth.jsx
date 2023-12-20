import React, { useState } from 'react';
import './auth.css';




const Login = () => {
      const handleClick= ()=>{
          if(loginScreen){
            setLoginMessage(!loginMessage);
            setPassword('')
          }else if(!loginScreen){
              setEmail('');
              setFirstnName('');
              setLastName('');
              setPassword('');
              setRegisterMessage(!registerMessage);
          }
      }

      const handleScreen = ()=>{
              if(loginScreen){
                setLoginScreen(!loginScreen);
                setLoginMessage(false);
              }else if(!loginScreen){
                setLoginScreen(!loginScreen)
                setRegisterMessage(false)
              }
      }

  const [loginScreen,setLoginScreen]=  useState(true);
  const [registerMessage,setRegisterMessage]=  useState(false);
  const [loginMessage,setLoginMessage] = useState(false);
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [firstname,setFirstnName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email,setEmail] = useState('');

  return (
    <div className='Auth'>

      <div className="auth__box">

        
        {
          loginScreen ? (<div className="auth__box-heading">Login</div>) : (<div className="auth__box-heading">Register</div>)
        }

{ loginScreen &&
         (

        <div className="auth__box-inputs-login">

            <div className="input__item">
            <div className="input__item-title">Username:</div>
            <input type="text" className="input__item-input" placeholder='john_123' onChange={(e)=>setUsername(e.target.value)}/>
          </div>
          <div className="input__item">
            <div className="input__item-title">Password:</div>
            <input type="password" className="input__item-input" onChange={(e)=>setPassword(e.target.value)}/>
          </div>

        </div>

         )}
        
        {!loginScreen &&
                  <div className="authbox__inputs-register">

                     <div className="input__item">
            <div className="input__item-title">First Name:</div>
            <input type="text" className="input__item-input" placeholder='Adam' onChange={(e)=>setFirstnName(e.target.value)}/>
          </div>
          <div className="input__item">
            <div className="input__item-title">Last Name:</div>
            <input type="text" className="input__item-input" placeholder='Smith' onChange={(e)=>setLastName(e.target.value)}/>
          </div>
          <div className="input__item">
            <div className="input__item-title">Email:</div>
            <input type="email" className="input__item-input" placeholder='123@gmail.com' onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="input__item">
            <div className="input__item-title">Password:</div>
            <input type="password" className="input__item-input" onChange={(e)=>setPassword(e.target.value)}/>
          </div>

                </div>
              }
         
        
    
        {
          loginMessage && (
            <div className="login__message">Service is not currently Available.</div>
          )
        }

        {
          registerMessage &&
          <div className="login__message green">Your account is created</div>
        }
        
        
          
       {loginScreen ? (<div className='new__account' onClick={handleScreen }>Create new account</div>) : (<div className='new__account' onClick={handleScreen}>Already have a account?</div>)}
           
            

       {loginScreen ? <button className="auth__button" onClick={handleClick}>Login</button> : <button className="auth__button" onClick={handleClick}>Register</button> } 

      </div>

    </div>
  )
}

export default Login
