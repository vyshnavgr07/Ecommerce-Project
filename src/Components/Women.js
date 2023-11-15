import React from 'react'
import { Data } from '../App'
import { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Women = () => {
  const navigate=useNavigate()
    const {product}=useContext(Data)
    const Wproduct=product.filter((item)=>item.gender==="wommen")
    console.log(Wproduct);
  return (
    
    <div  className='d-flex flex-wrap m-4'>
       {Wproduct.map((item)=>(
    

<Card  className='' style={{ width: '18rem' }}>
      <Card.Img    style={{width:"15rem", height:"10rem"}  }  variant="top" src={item.img} />
      <Card.Body>
        <Card.Title  className='m-2'>{item.title}</Card.Title>
        <Card.Text>
        <h2> <del>RS {item.prevPrice}</del> </h2>
        <h2>RS  {item.newPrice}</h2>
        
        </Card.Text>
        <Button    onClick={()=>navigate(`/viewproducts/${item.id}`)}   variant="primary">viewproducts</Button>
      </Card.Body>
    </Card>








    




       ))}






    </div>
  )
}

export default Women