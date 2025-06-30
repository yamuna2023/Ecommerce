import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/ProductService';
import { Image, Row,Col, Button } from 'react-bootstrap';
const ProductDetails = () => {
    const {id}=useParams();
    const [prodDetails,setProdDetails]=useState('');
    useEffect(()=>{
       getProductById(id)
       .then(res=>{
          console.log(res.data);
          setProdDetails(res.data)
       })
       .catch(err=> console.log(err))
    },[id])
  return (
    <div className='container'>
       <h2> Product Details</h2>
       <Row>
           <Col xs={4}>
              <Image src={prodDetails.image} height={400} width={300}/>
           </Col>
            <Col xs={8}>
               <h2> {prodDetails.title} </h2>
               <p> Category : {prodDetails.category} </p>
               <p> <b>Price : {prodDetails.price}</b> </p>
               <p>
                  {prodDetails.description}
               </p>
                <p> <b>Rating : {prodDetails?.rating?.rate}</b> </p>
                <Button variant='primary'> Add cart</Button>
           </Col>
       </Row>
    </div>
  )
}

export default ProductDetails