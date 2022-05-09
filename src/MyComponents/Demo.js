import React, { useState } from 'react'

const Demo = () => {

    let [email, setEmail] = useState();
    let [password, setPassword] = useState();

    
  let checklogin = () =>{
    console.log(email,password)

    fetch('https://www.getpostman.com/collections/421394b1c79d9d4ab536', {
      method: "POST",
      headers:{
        "Accept" : "application/json",
        "Content-Type" : "application/json"

      },
      body:JSON.stringify(
        {
          "username": 'sa@da.co',
          "password": 'password'
      }
      )
    })

    .then(res => res.json())
        .then(data => {console.log(data) })
  }

  return (<>
  

  <div className=''>
      <button onClick={()=>{checklogin()}}>click</button>
  </div>
  

  
  </>)
}

export default Demo