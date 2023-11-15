import React, { useContext } from 'react'
import { Data } from '../App';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SideBar from './SideBar';

const Main = () => {
  const navigate=useNavigate();
    const {product}=useContext(Data);
  
    
       
        return (
    <div className='d-flex flex-wrap m-4' >

    {product.map((item)=>(
<>
<Card key={item.id} className='m-2' style={{ width: '17rem' }}>
      <Card.Img   style={{width:"15rem",height:"10rem"}}    variant="top" src={item.img} alt='Loading...' />
      <Card.Body style={{textAlign:"center", alignItems:"center"}}>
        <Card.Title className='mt-2'>{item.title}</Card.Title>
        <Card.Text>
        <h2> <del>RS {item.prevPrice}</del> </h2>
         <h2>RS  {item.newPrice}</h2>
       
        <h4 className='text-danger '>{item.company}</h4>

        
        </Card.Text>
        <Button   className='bg-primary'   onClick={()=>navigate(`/viewproducts/${item.id}`)} variant="danger">ViewProducts</Button>
       
      </Card.Body>
    </Card>
</>

    ))}



    </div>
  )
}

export default Main