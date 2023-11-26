import './App.css';
import { useEffect, useState } from 'react';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';
import api from './api/axiosConfig';
import Nav from './components/Nav';
import Footer  from './components/Footer';
import HomePage from './components/HomePage';
import IPhonesLayout from './pages/IPhonesLayout';
import BlogLayout from './pages/BlogLayout';
import RepairsLayout from './pages/RepairsLayout';


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
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path ="/" element={<HomePage/>} />
          <Route path ="/iPhones" element={<IPhonesLayout iphones={iphones}/>} />
          <Route path="/repairs" element ={<RepairsLayout/>}/>
          <Route path="/blog" element={<BlogLayout/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
