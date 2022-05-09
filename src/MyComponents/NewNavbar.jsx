import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NewStyleFile/newnavbar.css'
import { Link, useNavigate } from 'react-router-dom';

const NewNavbar = () => {
    let navigate = useNavigate()
  return (<>
  
  
  <div className='navbarWrapper'>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="navbar-brand" onClick={()=>{navigate('/home')}} > <img src='assets/img/AFL.jpg' alt='img' /> </div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mx-auto">
      <li class="nav-item my-md-auto my-2 active">
      <div class="btn-group" ><Link to="/sellresidue"><button class="btn btn-primary" type="button">Sell Residue</button></Link> </div>

      </li>
      <li class="nav-item my-md-auto my-2">
      <button className="btn btn-primary btn1" type="button">Buy</button><button className="btn btn-primary dropdown-toggle dropdown-toggle-split btn2" data-toggle="dropdown" type="button" ></button>
      </li>

    </ul>

    <div className='profileBox'>
      <img src='assets/img/User_New.png' alt='img' />
  </div>

  </div>

 
</nav>
  </div>
  
  </>)
}

export default NewNavbar