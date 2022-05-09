import React, { Component } from 'react'
import NewNavbar from './NewNavbar';
// import Navbar from './Navbar'
import SideNavBar from './SideNavBar'

export class Connections extends Component {
    state = { PassengerCapacity: 0 }


    Increase() {
        this.setState({ PassengerCapacity: ++this.state.PassengerCapacity });
        console.log(this.state.PassengerCapacity);
    }
    Decrease() {
        if (this.state.PassengerCapacity == 1) return;
        this.setState({ PassengerCapacity: --this.state.PassengerCapacity });
    }
    render() {
        return (
            <div>
                {/* <Navbar /> */}
                <NewNavbar />
                <div id="wrapper">

                    <SideNavBar />

                    <div className="page-content-wrapper pt-3">
                        {/* <div class="container-fluid pt-3">
                            <div class="row">
                                <div class="col">
                                    <h4 class="text-secondary"></h4>
                                </div>
                                <div class="col">
                                    <div class="btn-group" style={{"width": "141px"}}><button class="btn btn-primary" type="button">Sell Residue</button>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="btn-group" style={{"width": "80px"}}><button class="btn btn-primary" type="button">Buy</button><button class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" type="button"></button>
                                        <div class="dropdown-menu"><a class="dropdown-item" href="#">New Equipment</a><a class="dropdown-item" href="#">Used Equipment</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="container-fluid pt-3">
                        
                        <div className='row my-3'>
                        <div className='col-12'>
                            <p>Filter by</p>
                        </div>
                            <div className='col-md-3 filterBox'>
                            <select class="form-select">
                            <option selected>--select--</option>
                            <option >Low to High</option>
                            <option >High to Low</option>
                            </select>
                            </div>

                            <div className='col-md-3 filterBox'>
                            <select class="form-select">
                            <option selected>Industry</option>
                            <option >Buyer</option>

                            </select>
                            </div>
                        </div>
                            <div class="row">
                                <div class="col">
                                    <div class="card shadow-sm">
                                        <div class="card-header">
                                            <h5 class="mb-0">Connections List</h5>
                                        </div>
                                        <div class="card-body"></div>
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th style={{ "width": "75px" }}>Sn.</th>
                                                        <th>Type</th>
                                                        <th>Product</th>
                                                        <th>Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Industry 1<br /></td>
                                                        <td>Harvester</td>
                                                        <td>150000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Buyer 1</td>
                                                        <td>Residue</td>
                                                        <td>1000</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="container"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-right" style={{ "margin-right": "50px" }}>
                  <img src="assets/img/AFL.jpg" style={{ width: "108px", marginTop: "400px" }} />
                </div>
            </div>
        )
    }
}

export default Connections