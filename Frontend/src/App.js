import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PreviousChat from './Component/PreviousChat/PreChat';
import NewChat from './Component/NewChat/NewChat';
import Mainpage from './Component/MainPage/MainPage';
import Login from './Component/Login/Login';
import Signup from './Component/SignUp/Signup';

export default function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async (req,res) => {
      try {
        const response = await axios.get('/message');
        setData(response.data)
        console.log(response.data)
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/newchat" element={<NewChat />} />
          <Route path="/prechat" element={<PreviousChat data={data}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

