import React from 'react'
import IPhones from '../components/IPhones'
import CreateiPhone from '../components/CreateiPhone'
import DeleteiPhone from '../components/DeleteiPhone'

const IPhonesLayout = ({iphones}) => {
  return (
    <div>
      <div className='main-container'>
          <IPhones iphones={iphones}/>

      </div>
      <div className='utilities-container'>
        <CreateiPhone iphones={iphones}/>
        <DeleteiPhone iphones={iphones}/>
      </div>
    </div>

  )
}

export default IPhonesLayout