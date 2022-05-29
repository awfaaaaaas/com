import React from 'react'
import Paris from './Paris.jpg'

function  Profile () {

  return (
    <div>  
        <h1 style={{
                paddingLeft:500,
                color: 'red',
        }}
        >This is my Profile</h1>
        <img
        style={{
            paddingTop:5,
            paddingLeft:299,
                height: 500,
                width: 700
                
              } }
         src={Paris} alt='Paris' />
        
    </div>
  )
}

export default Profile;