import React, { useContext } from 'react'
import { Data } from '../../App'
import Img1 from "./user.jpg"
import { MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTypography } from 'mdb-react-ui-kit'
import Table from 'react-bootstrap/Table';
import SideBar from '../SideBar';

const Users = () => {
  const {userData}=useContext(Data)
  console.log(userData);
return (
 
    <div className='d-flex'>
    <div>
      <SideBar/>
    </div>
   
      <div style={{width:"100%"}}>  
      <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol md="10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                  USER DETAILS
                </MDBTypography>
                <div>
                  <p className="mb-0">
                    <span className="text-warning"> </span>
                    <a href="#!" className="text-danger">
                  <i className="fas fa-angle-down mt-1"></i>
                    </a>
                  </p>
                </div>
              </div>

              {userData.map((item) => (
                <MDBCard key={item.id} className="rounded-3 mb-4">
                  <MDBCardBody className="p-4">
                    <MDBRow className="justify-content-between align-items-center">
                      <MDBCol md="2" lg="2" xl="2">
                        <MDBCardImage
                          className="rounded-3"
                          fluid
                          src={Img1}
                          alt="products"
                        />
                      </MDBCol>
                      <MDBCol md="3" lg="3" xl="3">
                      <MDBTypography tag="h5" className="mb-0">
                    <b>USERNAME</b>    {item.userName}
                        </MDBTypography>

                      </MDBCol>
                      <MDBCol
                        md="3"
                        lg="3"
                        xl="2"
                        className="d-flex align-items-center justify-content-around"
                      >
                    


                    <MDBTypography tag="h5" className="mb-0">
                    <b>password</b>    {item.password}
                        </MDBTypography>


                        {/* Additional content here */}
                      </MDBCol>
                      <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                        <MDBTypography tag="h5" className="mb-0">
                        <b>EMAIL:ID</b>  {item.emailId}
                        </MDBTypography>
                       
                      </MDBCol>

                      
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              ))}
            </MDBCol>
          </MDBRow>
        </MDBContainer>


 
</div>
    </div>
  )
}

export default Users