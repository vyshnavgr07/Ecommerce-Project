import React, { useContext } from 'react'
import { Data } from '../../App'
import SideBar from '../SideBar';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTypography } from 'mdb-react-ui-kit'
const Vieworder = () => {
 const    {vieworder,setvieworder}=useContext(Data)
 

  return (
    <div  className='d-flex'>
<div  >
<SideBar/>
</div>

<div>


      <section className="navu h-100" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol md="10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                 ORDER DETAILS
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

              {vieworder.map((item) => (
                <MDBCard key={item.id} className="rounded-3 mb-4">
                  <MDBCardBody className="p-4">
                    <MDBRow className="justify-content-between align-items-center">
                      <MDBCol md="2" lg="2" xl="2">
                        <MDBCardImage
                          className="rounded-3"
                          fluid
                          src={item.img}
                          alt="products"
                        />
                      </MDBCol>
                      <MDBCol md="3" lg="3" xl="3">
                        <p className="lead fw-normal mb-2">{item.title}</p>
                        <p>
                          <span className="text-muted">Size: </span>M{" "}
                          <span className="text-muted">Color: </span>Grey
                        </p>
                      </MDBCol>
                      <MDBCol
                        md="3"
                        lg="3"
                        xl="2"
                        className="d-flex align-items-center justify-content-around"
                      >
                     <MDBTypography tag="h5" className="mb-0">
                       <b>Price </b>  {item.newPrice}
                        </MDBTypography>



                        {/* Additional content here */}
                      </MDBCol>
                      <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                        <MDBTypography tag="h5" className="mb-0 text-danger">
                        <b>Quntity</b>  {item.quantity}
                        </MDBTypography>
                      </MDBCol>
                      
                     </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              ))}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      </div>
    </div>
  )
}

export default Vieworder