import React, { useContext, useState } from 'react';
import { Data } from '../App';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const Viewproducts = () => {
  const navigate = useNavigate();
  const { product, cart, setcart, login } = useContext(Data);
  const { id } = useParams();
  const findView = product.find((item) => item.id === parseInt(id));
const[btn,setbtn]=useState(true);

  const addCart = () => {
    if (login) {
      // Check if the product is already in the cart
      if (!cart.some((item) => item.id === findView.id)) {
        setcart((prev) => [...prev, { ...findView, productprice: findView.price }]);
        toast.success("Your Product is Added");
      } else {
        toast.error("This product is already in your cart");
        setbtn(false);
      }
    } else {
      navigate('/login');
      toast.error("Please login");
    }
  };

  return (
    <div className='container mt-5 m-3'>
  <div className='row justify-content-center align-items-center'>
    <div className='col-md-6'>
      <Card className='w-100'>
        <Card.Img
          className='mx-auto' // Center the image horizontally
          style={{ width: "15rem", height: "10rem" }}
          variant='top'
          src={findView.img}
        />
        <Card.Body className='text-center'> {/* Center the text and inline elements */}
          <Card.Title>{findView.title}</Card.Title>
          <h3 className='text-warning'>Rs {findView.newPrice}</h3>
          <h5 className='text-danger'>{findView.company}</h5>

          {(btn) ? (
  <Button className='bg-success' variant='primary' onClick={addCart}>
    Add to Cart
  </Button>
) : (
  <Button className='bg-danger' variant='primary'  onClick={()=>navigate("/cart")}>
   G0 To Cart
  </Button>
)}


          
      </Card.Body>
      </Card>
    </div>
  </div>
</div>

  );
};

export default Viewproducts;
