import React from 'react'
import { Button, Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { clear, deleteFromCart } from '../rtk/slices/cart-slice';

const Cart = () => {
  const  cart  = useSelector(state => state.cart);
  console.log(cart)

  const dispatch =useDispatch()

  const totalPrice=cart.reduce((acc,product)=>{
    acc+=product.price * product.quantity;
    return acc
  },0)
  return (
    <Container>
    <h1 className='py-5'>WELCOME TO CART </h1>
    <Button variant='primary' className='mb-3'
     onClick={()=>dispatch(clear())}>Clear</Button>
     <h5>TotalPrice:{totalPrice.toFixed(2)}$</h5>
    <Table striped bordered hover size='sm'>
      <thead>
        <tr>
          <th>id</th>
          <th>Title</th>
          <th>Image</th>
          <th>Price</th> 
          <th>Quantity</th>  
          <th>Actions</th>       
        </tr>
      </thead>
      {cart.map((product)=> <tbody key={product.id}>
        <tr>
          <td>{product.id}</td>
          <td>{product.title}</td>
          <td><img alt={product.title} style={{width:'100px',height:'100px'}} src={product.images[0]}  /></td>
          <td>{product.price}</td>
          <td>{product.quantity}</td>
          <td><Button variant='danger' onClick={()=>dispatch(deleteFromCart(product))}>Delete</Button></td>
        </tr>
      </tbody>
      )}
     
    </Table>
    
    </Container>
  )
}

export default Cart