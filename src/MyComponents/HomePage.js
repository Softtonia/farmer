import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import NewNavbar from './NewNavbar';
// import Navbar from './Navbar'
import SideNavBar from './SideNavBar';

export class HomePage extends Component {
  render() {
    return (
        
      <div>
          {/* <Navbar /> */}

          <NewNavbar/>
      <div id="wrapper">
      
         <SideNavBar />
    <div class="page-content-wrapper pt-3">
      <div class="container-fluid pt-3">
            <div class="row d-none">
                <div class="col">
                    <div class="btn-group" style={{"width": "141px", "marginLeft": "500px"}}><Link to="/sellresidue"><button class="btn btn-primary" type="button" style={{"backgroundColor": "#172578"}}>Sell Residue</button></Link>
                </div>
            </div>
            <div class="col">
                <div class="btn-group" style={{"width": "80px"}}><button class="btn btn-primary" type="button" style={{"backgroundColor": "#172578"}}>Buy</button><button class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" type="button" style={{"backgroundColor": "#172578"}}></button>
                    <div class="dropdown-menu"><Link to="/buy"><a class="dropdown-item" href="#">New Equipment</a></Link><Link to="/u"><a class="dropdown-item" href="#">Used Equipment</a></Link>
                    </div>
                </div>
            </div>
      </div>
    </div>

              
            
          </div>
          <div class="container-fluid pt-3">
              <div class="row">
                  <div class="col">
                      <div class="card shadow-sm">
                          <div class="card-header d-xl-flex align-items-xl-center">
                              <h6 class="flex-fill mb-0">Buyers</h6>
                              {/* <div class="btn-group" role="group">
                                  <button class="btn" type="button"><i class="fa fa-sort-amount-desc"></i> Sort</button>
                              <button class="btn" type="button"><i class="fa fa-filter"></i> Filter</button></div> */}
                          </div>
                          <div class="table-responsive">
                              <table class="table">
                                  <thead>
                                      <tr>
                                          <th colspan="2">Available Buyers<div class="btn-group" role="group">
                                  <button class="btn" type="button"><i class="fa fa-sort-amount-desc"></i></button></div></th>
                                          <th class="text-center" style={{"width": "178px"}}>Place</th>
                                          <th style={{"width": "84px"}}>Distance<div class="btn-group" role="group">
                                  <button class="btn" type="button"><i class="fa fa-sort-amount-desc"></i></button></div></th>
                                          <th style={{"width": "56px"}}></th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                  <tr>
                                          <td style={{"width": "75px"}}><img class="border rounded-circle border-white shadow-sm" src="assets/img/Farmer.png" style={{"max-width": "51px"}} /></td>
                                          <td>
                                              <p className='mb-0'><strong>Buyer-1</strong></p><small>Updated 1 day ago</small></td>
                                          <td class="text-center">
                                              <h6 className='mb-0'>Ludhiana</h6><small>6:30</small></td>
                                          <td><p>  3 km</p></td>
                                         
                                  </tr>
                 
                                    <tr>
                                          <td style={{"width": "75px"}}><img class="border rounded-circle border-white shadow-sm" src="assets/img/Farmer.png" style={{"max-width": "51px"}} /></td>
                                          <td>
                                              <p className='mb-0'><strong>Buyer-2</strong></p><small>Updated 1 day ago</small></td>
                                          <td class="text-center">
                                              <h6 className='mb-0'>Jalandhar</h6><small>6:30</small></td>
                                          <td><p>  1 km</p></td>
                                         
                                      </tr>
                                    <tr>
                                          <td style={{"width": "75px"}}><img class="border rounded-circle border-white shadow-sm" src="assets/img/Farmer.png" style={{"max-width": "51px"}} /></td>
                                          <td>
                                              <p className='mb-0'><strong>Buyer-3</strong></p><small>Updated 1 day ago</small></td>
                                          <td class="text-center">
                                              <h6 className='mb-0'>Mohali</h6><small>6:30</small></td>
                                          <td><p>  600 m</p></td>
                                         
                                      </tr>
                                    <tr>
                                          <td style={{"width": "75px"}}><img class="border rounded-circle border-white shadow-sm" src="assets/img/Farmer.png" style={{"max-width": "51px"}} /></td>
                                          <td>
                                              <p className='mb-0'><strong>Buyer-4</strong></p><small>Updated 1 day ago</small></td>
                                          <td class="text-center">
                                              <h6 className='mb-0'>Ludhiana</h6><small>6:30</small></td>
                                          <td><p>  8 km</p></td>
                                         
                                      </tr>
                                    <tr>
                                          <td style={{"width": "75px"}}><img class="border rounded-circle border-white shadow-sm" src="assets/img/Farmer.png" style={{"max-width": "51px"}} /></td>
                                          <td>
                                              <p className='mb-0'><strong>Buyer-5</strong></p><small>Updated 1 day ago</small></td>
                                          <td class="text-center">
                                              <h6 className='mb-0'>Jalandhar</h6><small>6:30</small></td>
                                          <td><p>  5 km</p></td>
                                         
                                      </tr>
                                   
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
    )
  }
}

export default HomePage