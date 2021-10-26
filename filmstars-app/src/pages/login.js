import React from "react";
import { Link, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function Login() {
  return (
    <div className="Login">
        <div className="shadow p-3 mb-5 bg-white rounded" id="card-shadow">
                    <div className="card">
                    <div class="card-header">
                                       <h2 style={{color:"blue"}}> LOGIN</h2>
                                    </div> 
                            <div className="card-body">
                                <h5 className="card-title">USERNAME</h5>
                                <input type="email" className="form-control" placeholder="Enter email" />
                                <h5 className="card-title">PASSWORD</h5>
                                <input type="password" className="form-control" placeholder="Enter password" />
                                <table>
                                        <div className="row rememberme">
                                             <div className="col-1"><input type="checkbox" className="custom-control-input" id="customCheck1" /></div>
                                              <div className="col-11"><label className="custom-control-label" htmlFor="customCheck1">Remember me</label></div>
                                        </div>   
                                </table>         
                                <table>
                                    <div className="row">
                                        <div className="col-6"><Link to ="signup"><button type="submit" className="btn btn-primary btn-block">Submit</button></Link></div>
                                        <div className="col-6">
                                            <Link to="/logout"><button type="submit" className="btn btn-primary btn-block">LogOut</button>
                                            </Link>
                                        </div>
                                    </div>    
                                </table>        
                                <p className="forgot-password text-right">
                                <a href="#">Forgot password?</a>
                                </p>
                                {/* <h5 className="card-title">Email address</h5>
                                <input type="email" className="form-control" placeholder="Enter email" /> */}
                            </div>
                        </div>
                    </div>      
                    {/* <form class="form-class">
                        <h3 class="login">LogIn</h3>

                        <div className="form-group">
                            <label><b>Email address</b></label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label><b>Password</b></label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>
                    </form> */}
        </div>
   
  );
}
export default Login;
