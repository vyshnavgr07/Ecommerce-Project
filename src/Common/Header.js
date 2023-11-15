import React, { useContext } from 'react'
import { Navbar,Nav,Container, Button, Form} from 'react-bootstrap'
import {BsCartFill} from 'react-icons/bs'
import { MdAdminPanelSettings } from 'react-icons/md';
import "./Header.css"
import { useNavigate } from 'react-router-dom'
import { Data } from '../App'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify'

const Header = () => {
  const navigate=useNavigate();
  const {login,setLogin,userData,cart,setcart}=useContext(Data);
 console.log(userData);

  const logout=()=>{
    setLogin(false);
    navigate("/");
    setcart([])
toast.error("YOu have loged out")
  }
 
  const carticon=()=>{
    if(login){
      navigate("/cart")
    }else{
      toast.error("pleese Login")
    }
  }

  return (
    <div>
{/* --------------------------------------------------navbar----------------------------------------------------------- */}
 <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"   className='font-weight-bold  text-danger' style={{ fontSize:'3rem' }} onClick={()=>navigate("/")} ><i>Happy Feet</i></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 fw-bold"
            style={{ maxHeight: '100px'  }}
            navbarScroll
          >
            <Nav.Link onClick={()=>navigate("/main")}>All Catogory</Nav.Link>
            <Nav.Link onClick={()=>navigate("/men")}>MEN</Nav.Link>
            <Nav.Link onClick={()=>navigate("/women")}>WOMEN</Nav.Link>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
            

</Nav>


<nav   className='d-flex my-3 nav-left  fw-bold' style={{ maxHeight: '100px' }}
            navbarScroll
>
  
{(login===false)? (
  <Nav.Link className='text-success'  onClick={()=>navigate('/login')}>Login</Nav.Link> ) :(
    <>
    <Nav.Link className='text-danger'>{userData.userName}</Nav.Link>
  
    <Nav.Link className='text-danger'  onClick={logout}>LogOut</Nav.Link>
    </>
  )
   
}

<BsCartFill style={{width:"10rem", height:'2rem'}}      onClick={carticon} />
<MdAdminPanelSettings  style={{width:"10rem", height:'2rem'}}   onClick={()=>navigate("/adminlogin")} />

</nav>




 </Navbar.Collapse>
      </Container>
    </Navbar>





{/* ------------------------------------------------------------------------------------------------------------------------------------------- */}


















    </div>
  )
}

export default Header