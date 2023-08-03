import React, { useEffect, useState } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
const [show,setShow]=useState(false);
const translate=()=>{
    if(window.scrollY>100){
        setShow(true);
    }else{
        setShow(false);
    }
}
useEffect(()=>{
    window.addEventListener("scroll",translate);

    return ()=>window.removeEventListener("scroll",translate);
},[]);



  return (
    <div className={`nav ${show && "nav-black"}`}>
        <div className='nav-contents'>
            <Link to="/">
            <img src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' className='nav-logo' alt='netflix logo'/></Link>
         <Link to='/profile'>   <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' className='nav-avatarlogo' alt='netflix avatarlogo'/></Link>

        </div>

    </div>
  )
}

export default Nav