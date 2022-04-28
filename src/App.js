import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import './App.css';
import { login, logout, selectUser, selectuser } from './features/userSlice';
import {auth} from './firebase';
import HomeScreen from './pages/HomeScreen';
import LoginScreen from './pages/LoginScreen';
import ProfileScreen from './pages/ProfileScreen';

function App() {


const dispatch = useDispatch();



  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        //Logged In
        console.log('Logged In',userAuth);
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email,
        }))


      }
      else{
        //Logged Out
        console.log('Not Logged In');
        dispatch(logout());
      }
    });
    return unsubscribe;
  },[]);


  const user =  useSelector(selectUser);
  
  return (
    <div className="app">
   
   
     <Router>

    {!user ?(<LoginScreen/>):(
       <Routes>

       <Route path='/profile' element={ <ProfileScreen /> } /> 
       <Route  path='/' element={ <HomeScreen /> } />

       
 
     </Routes>
    ) }

       

    </Router>
    </div>  
  );
}

export default App;
