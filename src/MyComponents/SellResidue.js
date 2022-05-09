import React, { Component } from 'react'
import SideNavBar from './SideNavBar'
import { Link, useNavigate } from 'react-router-dom';
import './NewStyleFile/globalstyle.css'


const SellResidue = () => {
  let navigate = useNavigate();
  return (
    <>

<div className='sellResidueWrapper' style={{ background: "rgb(248,248,255)" }}>
                    <div className="container-fluid" style={{ height: "100%" }}>
                    <SideNavBar />
                      <div className="row">
                        <div className="col text-center align-self-center">
                          <img className="img-fluid" src="assets/img/residue.jpeg" style={{ width: "700px", height: "600px",marginLeft:"100px" }} />
                        </div>
                        <div
                          className="col-lg-5 col-xl-5"
                          style={{ background: "rgb(248,248,255)", "min-height": "888px" }}
                        >
                          <h2
                            className="text-center"
                            style={{ "margin-top": "126px", "margin-bottom": "83px" }}
                          >
                            Sell Residue
                          </h2>
                          <form className="text-center" style={{ padding: "68px" }}>
                            <div className="form-group">
                              <input
                                className="form-control"
                                type="text"
                                style={{ "border-radius": "25px" }}
                                name="residue-type"
                                placeholder="Type of residue"
                              />
                            </div>
                            <div className="form-group">
                              <input
                                className="form-control"
                                type="text"
                                style={{ "border-radius": "25px" }}
                                name="Quantity"
                                placeholder="Quantity"
                              />
                            </div>
                            <div className="form-group">
                              <input
                                className="form-control"
                                type="text"
                                style={{ "border-radius": "25px" }}
                                name="Price"
                                placeholder="Price"
                              />
                            </div>
                            <div className="form-group">
                              <input
                                className="form-control"
                                type="text"
                                style={{ "border-radius": "25px" }}
                                name="Location"
                                placeholder="Location"
                              />
                            </div>
                            <br></br>
                            <Link to=''>
                            <button
                              className="btn btn-info btn-lg"
                              type="button" style={{"backgroundColor":"#172578"}}
                              onClick={() => {
                                console.log("Sell Button Clicked");
                              }}
                            >
                              {" "}
                              Sell
                            </button>
                            </Link>
                            <br></br>
                            {/* <Link to='/Home'>
                            <button
                              className="btn btn-primary btn-block mb-5"
                              type="button"
                              onClick={() => {
                                console.log("Signup Button Clicked");
                              }}
                            >
                              Back to Homepage
                              
            
                            </button>
                            </Link> */}
            
                          </form>
                           <div>
                            
                            <div className="text-right" style={{ "margin-right": "50px" }}>
                              <img src="assets/img/AFL.jpg" style={{ width: "108px" ,marginTop:"170px"}} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className='BackBox'>
                      <button className='btn btn-primary' onClick={()=>{navigate('/home')}}>Go To Home</button>
                    </div>
                  </div>


    </>
  )
}

export default SellResidue

// export class SellResidue extends Component {

            
//             render() {
//               let navigate = useNavigate();

//                 return (
//                   <div className='sellResidueWrapper' style={{ background: "rgb(248,248,255)" }}>
//                     <div className="container-fluid" style={{ height: "100%" }}>
//                     <SideNavBar />
//                       <div className="row">
//                         <div className="col text-center align-self-center">
//                           <img className="img-fluid" src="assets/img/residue.jpeg" style={{ width: "700px", height: "600px",marginLeft:"100px" }} />
//                         </div>
//                         <div
//                           className="col-lg-5 col-xl-5"
//                           style={{ background: "rgb(248,248,255)", "min-height": "888px" }}
//                         >
//                           <h2
//                             className="text-center"
//                             style={{ "margin-top": "126px", "margin-bottom": "83px" }}
//                           >
//                             Sell Residue
//                           </h2>
//                           <form className="text-center" style={{ padding: "68px" }}>
//                             <div className="form-group">
//                               <input
//                                 className="form-control"
//                                 type="text"
//                                 style={{ "border-radius": "25px" }}
//                                 name="residue-type"
//                                 placeholder="Type of residue"
//                               />
//                             </div>
//                             <div className="form-group">
//                               <input
//                                 className="form-control"
//                                 type="text"
//                                 style={{ "border-radius": "25px" }}
//                                 name="Quantity"
//                                 placeholder="Quantity"
//                               />
//                             </div>
//                             <div className="form-group">
//                               <input
//                                 className="form-control"
//                                 type="text"
//                                 style={{ "border-radius": "25px" }}
//                                 name="Price"
//                                 placeholder="Price"
//                               />
//                             </div>
//                             <div className="form-group">
//                               <input
//                                 className="form-control"
//                                 type="text"
//                                 style={{ "border-radius": "25px" }}
//                                 name="Location"
//                                 placeholder="Location"
//                               />
//                             </div>
//                             <br></br>
//                             <Link to=''>
//                             <button
//                               className="btn btn-info btn-lg"
//                               type="button" style={{"backgroundColor":"#172578"}}
//                               onClick={() => {
//                                 console.log("Sell Button Clicked");
//                               }}
//                             >
//                               {" "}
//                               Sell
//                             </button>
//                             </Link>
//                             <br></br>
//                             {/* <Link to='/Home'>
//                             <button
//                               className="btn btn-primary btn-block mb-5"
//                               type="button"
//                               onClick={() => {
//                                 console.log("Signup Button Clicked");
//                               }}
//                             >
//                               Back to Homepage
                              
            
//                             </button>
//                             </Link> */}
            
//                           </form>
//                            <div>
                            
//                             <div className="text-right" style={{ "margin-right": "50px" }}>
//                               <img src="assets/img/AFL.jpg" style={{ width: "108px" ,marginTop:"170px"}} />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>


//                     <div className='BackBox'>
//                       <button className='btn btn-primary' onClick={navigate('/home')}>Go To Home</button>
//                     </div>
//                   </div>
//                 );
//               }
// }

// export default SellResidue