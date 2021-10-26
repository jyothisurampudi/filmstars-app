import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
function Fotter() {
  return(
    <div className="fotter">
    <div class="container">
      <MDBFooter
        color="stylish-color-dark"
        className="page-footer font-small pt-4 mt-4"
      >
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="text-uppercase mb-3 mt-3 font-weight-bold" style={{color:"white"}}>
                FILM STARS
              </h5>
              <p style={{color:"white"}}>SUGGESTED THIS WEBSITE TO GET DETAILS OF ACTORS</p>
            </MDBCol>
            <hr className="clearfix w-100 d-md-none" />
            <MDBCol md="2">
              <h5 className="text-uppercase mb-1 mt-3 font-weight-bold" style={{color:"white"}}>
                ABOUT US
              </h5>
            </MDBCol>
            <hr className="clearfix w-100 d-md-none" />
            <MDBCol md="2">
              <h5 className="text-uppercase mb-1 mt-3 font-weight-bold" style={{color:"white"}}>
                CONTACT US
              </h5>
            </MDBCol>
            <hr className="clearfix w-100 d-md-none" />
            <MDBCol md="2">
              <h5 className="text-uppercase mb-1 mt-3 font-weight-bold" style={{color:"white"}}>
                REPORT
              </h5>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <hr />
        <div className="text-center py-1">
          <ul className="list-unstyled list-inline mb-0">
            <li className="list-inline-item">
              <h5 className="mb-1 color-white" style={{color:"white"}}>Register for free</h5>
            </li>
            <li className="list-inline-item">
              <a href="#!" className="btn btn-danger btn-rounded" style={{color:"white"}}>
                Sign up!
              </a>
            </li>
          </ul>
        </div>
        <hr />

        <div className="footer-copyright text-center py-1" style={{color:"white"}}>
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.MDBootstrap.com" style={{color:"white"}}> XRG PVT LMTD </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  </div>
  )
}
export default Fotter;
