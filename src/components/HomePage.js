import React, { useEffect, useState } from 'react'
import './HomePage.css'
import api from '../api/axiosConfig';

const HomePage = ({iphones}) => {
    const [latestIPhone, setPhone] = useState([]);
    const getPhoneData = async () => {
        try {
            const response = await api.get("http://localhost:8080/api/getLatestPhone?latest=true");
            setPhone(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPhoneData();
    })



  return (
    <div className='home-container'>
        <div className='latest-iphone-repair-container'>
            <h1>{latestIPhone.name}</h1>
            <p>{latestIPhone.model}</p>
            <p>{latestIPhone.configuration}</p>
            <img alt="black iPhone" src={latestIPhone.imgUrl}></img>

        </div>
        <div className='latest-blog-container'>
            <h1>Blog</h1>
        </div>
    </div>
  )
}

export default HomePage