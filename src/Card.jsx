import React, { useState } from 'react'
import successicon from './Images/icon-success.svg';
import './Card.css'
import signup from './Images/illustration-sign-up-desktop.svg'
const Card = ({signin, setSignin, emailGetter}) => {

    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const isValidEmail = emailRegex.test(newEmail);

        setIsValid(isValidEmail);
      };

    const handleSubmit = () => {
            if(isValid && email !== ''){
                setSignin(!signin);
            }
            emailGetter(email);
    }  

  return (
    <div className='card'>
        <div className='card-body'>
            <div className='content'>
                <h1>Stay Updated!</h1>

                <p className='first-para'>Join 60,000+ product managers receiving monthly updates on:</p>
                <div className='list'>
                    <img src={successicon} alt="tick mark" className='tick-img'/>
                    <p>Product discovery and building what matters</p>
                    </div>
                <div className='list'>
                    <img src={successicon} alt="tick mark" className='tick-img'/>
                    <p>Measuring to ensure updates are a success</p>
                    </div>
                <div className='list'>
                    <img src={successicon} alt="tick mark" className='tick-img'/>
                    <p>And much more!</p>
                    </div>

                    <label htmlFor="email"><h5>Email address</h5></label>
                    <input type="text" name="email" id="email" placeholder="email@company.com" value={email} onChange={handleEmailChange}/>
                    {isValid ? (
                <p></p>
                ) : (
                    <p style={{ color: 'red' }}>Invalid email address.</p>
                )}
                    <button onClick={handleSubmit}>Subscribe to monthly newsletter</button>
             </div>
             <img src={signup} alt="" className='signup-img'/>
        </div>
    </div>
  )
}

export default Card
