import React, { useContext } from 'react'
import SideBar from './SideBar'
import Card from 'react-bootstrap/Card';
import { Data } from '../App';
import { useNavigate } from 'react-router-dom';


const AdminHome = () => {
  const{userData,vieworder} =useContext(Data);
const navigate=useNavigate();
  return (
    <div className='d-flex'>
  <div>
  <SideBar/>
  </div>
<div className='d-flex mt-5'>

<div  >
        <Card 
          style={{ width: '18rem' }}
          className="mb-2 m-2 bg-success" 
          onClick={()=>navigate("/users")} 
        >
          <Card.Header>USERS</Card.Header>
          <Card.Body>
            <Card.Title> USERS </Card.Title>
            <Card.Text>
             {userData.length}
            </Card.Text>
          </Card.Body>
        </Card>
        </div>

        <div >
        <Card 
          style={{ width: '18rem' }}
          className="mb-2  m-2 bg-warning" 
          onClick={()=>navigate("vieworder")}
        >
          <Card.Header> ORDERS</Card.Header>
          <Card.Body>
            <Card.Title> ORDERS </Card.Title>
            <Card.Text>
             {vieworder.length}
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        <div >
        <Card 
          style={{ width: '18rem' }}
          className="mb-2  m-2 bg-danger"
        >
          <Card.Header> Sales</Card.Header>
          <Card.Body>
            <Card.Title>DELIVERY </Card.Title>
            <Card.Text>
              Some quick example text to 
             
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        <div >
        <Card 
          style={{ width: '18rem' }}
          className="mb-2  m-2  bg-primary"
        >
          <Card.Header> Sales</Card.Header>
          <Card.Body>
            <Card.Title> ORDERS </Card.Title>
            <Card.Text>
              Some quick example text to
             
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
   
</div>


    </div>
  )
}
export default AdminHome