import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Homepg from "./pages/home/Homepg";

import Loginscreen from './pages/loginscreen/Loginscreen';
import {useSelector,useDispatch} from 'react-redux';
import {selectUser,login,logout} from './slice/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from './firebase/firebase';
import Profilescrn from './pages/profilesrn/Profilescrn';

const App = () => {
  // const user=null;
  const user=useSelector(selectUser);
 
  const dispatch=useDispatch();
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(authUser)=>{

      if(authUser){
        console.log(authUser);
        dispatch(
          login({
            email:authUser.email,
            uid:authUser.uid,
          })
        );
      }else{
        dispatch(logout());
      }
    })
    return unsubscribe;
  },[])
  return (
    <div className='app'>
    <Router>
     {!user?
    <Loginscreen />
     :
     <Routes>
      <Route path="/" element={<Homepg/>} />
      <Route path="/profile" element={<Profilescrn/>} />
     </Routes>
     }
    </Router>
    </div>
  )
}

export default App;