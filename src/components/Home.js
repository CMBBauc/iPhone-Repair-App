import React from 'react'
import './Home.css'







const Home = ({iphones}) => {

  //let model = document.getElementsByClassName('iphone-model');

  return (
    iphones?.map((iphone) => {
        return(
              <div className='iphone-container'>
                <div className='text-container'>
                  <h1 className='iphone-name'>{iphone.name}</h1>
                  <p>{iphone.id}</p>
                  <div className='iphone-model'>{iphone.model}</div>
                  <img alt="iPhone" className="iphone-image"  src={iphone.imgUrl} />
                </div>
              </div>
        )
    })
  )
}

export default Home