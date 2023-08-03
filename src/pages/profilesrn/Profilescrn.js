import React from 'react';
import Nav from '../../components/nav/nav';
import { useSelector } from 'react-redux';
import {selectUser} from '../../slice/userSlice';
import './Profilescrn.css';
import { signOut } from 'firebase/auth';
import {auth} from '../../firebase/firebase';


const Profilescrn = () => {
    const user=useSelector(selectUser);
    const logout=()=>{
        signOut(auth);
    }
  return (
    <div className='profilescrn'>
        <div className='profilescrn-container'>
            <Nav />
            <div className='profilescrn-body'>
                <h1>Edit Profile</h1>
                <div className='profilescrn-details'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" className='avatarimg' />
                    <div className='profilescrn-info'>
                    <h2>{user.email}</h2>
                    <div className='profilescrn-plans'>
                    <h3>Plans</h3>
                    
                    <button className='profilescrn-btn' onClick={logout}>Sign Out</button>
                    </div></div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default Profilescrn