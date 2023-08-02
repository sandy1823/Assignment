import React, { useEffect, useState } from 'react';
import './App.css';
import { FiSettings } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { AiOutlineBell } from "react-icons/ai";
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import PrimarySearchAppBar from './MenuNav';
import LoginPage from './LoginPage';

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
      {allowed && allowed ?
        <PrimarySearchAppBar /> :
        <LoginPage />}
    </>
  );
}

export default App;
{/* <Row gutter={16}>
        <Col span={8}>
          <Card title="Revenue" bordered={false}>
        
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Sales" bordered={false}>

          </Card>
        </Col>
        <Col span={8}>
          <Card title="Costs" bordered={false}>

          </Card>
        </Col>
      </Row> */}
