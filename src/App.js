import React, { useEffect, useState } from 'react';
import './App.css';
import { FiSettings } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { AiOutlineBell } from "react-icons/ai";
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import PrimarySearchAppBar from './MenuNav';
import LoginPage from './LoginPage';
import Cancellation from './Cancellation';
import Login from './Login';
import Counter from './feature/counter/Counter';

const validPerson = {
  name: 'ancyAnthony@gmail.com'
}

function App() {
  const [allowed, setAllowed] = useState(false)
  let userData = JSON.parse(localStorage.getItem('userData'))
  useEffect(() => {
    if (validPerson.name == userData?.userName) {
      setAllowed(true)
    }
  }, [])
  return (
    <>
    <Counter/>
      {/* {allowed && allowed ?
        <PrimarySearchAppBar /> :
        <LoginPage />} */}
      {/* <Cancellation /> */}
      {/* <LoginPage/> */}
      {/* <Login/> */}
    </>
  );
}

export default App;
