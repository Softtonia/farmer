import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class ChangePassword extends Component {
    render() {
      return (
        <div className="container-fluid" style={{"height": "100%;"}}>
            <div className="row">
            <div className="col-lg-5 col-xl-5" style={{"background": "#ffffff","min-height": "888px"}}>
            <h2 className="text-center" style={{"margin-top": "126px","margin-bottom": "83px"}}>Change Password</h2>
                <form className="text-center" style={{"padding": "68px"}}>
                    
                    <div className="form-group"><input className="form-control" type="text" style={{"border-radius": "25px"}} name="PWD" placeholder="New Password"/></div>
                    <div className="form-group"><input className="form-control" type="text" style={{"border-radius": "25px"}} name="PWD" placeholder="Confirm New Password"/></div>
                    <br></br>
                    <Link to="/"><button className="btn btn-primary btn-block mb-5" type="button" onClick={()=>{console.log('Signup Button Clicked');}} >Change my Password</button></Link></form>
        </div>
        </div>
        </div>
      )
    }
}

export default ChangePassword