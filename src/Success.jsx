import React from 'react'
import successicon from './Images/icon-success.svg';
import './Success.css';
const Success = ({signin, setSignin, eml}) => {
  const btnHandler = () =>{
    setSignin(!signin);
  }
  return (
    <div className='main'>
        <div className='main-body'>

            <img src={successicon} alt="" className='img'/>
            <h1 className='success-heading'>Thanks for subscribing!</h1>
            <p className='para'>
            A confirmation email has been sent to: <span>{eml}</span>. Please open it and click the button inside to confirm your subscription.
            </p>
            <button className='btn' onClick={btnHandler}>Dismiss message</button>

        </div>
    </div>
  )
}

export default Success
