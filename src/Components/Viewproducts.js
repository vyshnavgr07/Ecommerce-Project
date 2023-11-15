import React, { useContext } from 'react';
import { Data } from '../App';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const Viewproducts = () => {
    const navigate=useNavigate()
    const {product,cart,setcart,login}=useContext(Data);
   
    const {id}=useParams();
    const findView=product.find((item)=>item.id===parseInt(id))
    
    // const addCart=()=>{
    //     if(login){
    //     if(cart.id =! findView.id){
            
    //     }
    //         setcart((prev)=>[...prev,{...findView,productprice:findView.price},])
    //         toast.success("Your Product is Added")
    //     }else{
           
    //           navigate('/login')
    //           toast.error("plese login")
    //     }
    // }

    const addCart = () => {
        if (login) {
            // Check if the product is already in the cart
            if (!cart.some(item => item.id === findView.id)) {
                setcart((prev) => [...prev, { ...findView, productprice: findView.price }]);
                toast.success("Your Product is Added");
            } else {
                toast.error("This product is already in your cart");
            }
        } else {
            navigate('/login');
            toast.error("Please login");
        }
    }
    

    return (
        <div>
            <div className='mt-5' style={{alignItems:"center"}}>
            
                <Card className='w-25 m-auto mt-5'>
                    <Card.Img         variant="top" src={findView.img} />
                    <Card.Body>
                        <Card.Title>{findView.title}</Card.Title>
                        <h3 className='text-warning' >Rs {findView.newPrice}</h3>
                        <h5 className='text-danger'>{findView.company}</h5>
                      
                        <Button className="bg-success"   variant="primary" onClick={addCart}>Add Cart</Button>
                        
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Viewproducts;
