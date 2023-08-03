import React, { useState } from 'react';
import './Loginscreen.css';
import Signinpg from '../singninpg/Signinpg';

const Loginscreen = () => {
  const [signin,setSignin] = useState(false);
  return (
    <div className='loginscrn'>
        <div className='loginscrn-container'>
            <img className='loginscrn-logo' alt="loginscreen logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"/>
            <button  className='loginscrn-btn' onClick={()=>setSignin(true)}>Signin</button>
            <div className='loginscrn-gradient'/>
           </div>
           <div className='loginscrn-body'>
           {signin? (
                <Signinpg/>
            ):(<>
                <h1>Unlimited films, TV programms and more</h1>
                <h2>Watch anywhere, cancel at any time.</h2>
                <h3>Ready to watch? Enter your email to create your membership.</h3>
                <div className='loginscrn-input'>
                    <input type='text' className='loginscrn-inputbox' placeholder='Email Address'/>
                    <button onClick={()=>setSignin(true)} className='loginscrn-getstart'>GET STARTED</button>

                </div>
                </>
            )}

           </div>
    </div>
  )
}

export default Loginscreen;