import './App.css';
//import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from './api/axiosConfig';
import Home from './components/Home';
import Nav from './components/Nav';
import CreateiPhone from './components/CreateiPhone';
import DeleteiPhone from './components/DeleteiPhone';
import HomePage from './components/HomePage';
import { Routes, Route } from 'react-router-dom';


function App() {

  const [iphones, setiPhones] = useState();

  const getiPhones = async () => {

    try {

      const response = await api.get("/api/iPhones");
      setiPhones(response.data);

    } catch(err) {

      console.log(err);

    }
  }

  useEffect(() => {
    getiPhones();
  }, [])
  //<HomePage iphones={iphones}></HomePage>
  return (
    <>
      <Nav></Nav>
      <HomePage iphones={iphones}></HomePage>
      <div className='main-container'>
        <Home iphones={iphones}></Home>
        <CreateiPhone />
        <DeleteiPhone iphones={iphones}/>
      </div>
    </>
  );
}

export default App;
