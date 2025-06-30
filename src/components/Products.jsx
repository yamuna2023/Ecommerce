import React, { useEffect,useState} from 'react'
import { getAllProducts } from '../services/ProductService';
import { Col, Row } from 'react-bootstrap';
import ProductList from './ProductList';
const Products = () => {
    const [productData,setProductData]=useState([]);
    useEffect(()=>{
      getAllProducts()
      .then(res=>{
         console.log(res.data);
         setProductData(res.data);
      })
      .catch(err=> console.log(err))
    },[]);
  return (
    <div className='container'>
        <h2> Latest Products</h2>
        <Row>
            {productData.map(product=> 
                <Col xs={4} key={product.id}>
                    <ProductList product={product}/>
                </Col>
            )}
        </Row>
    </div>
  )
}

export default Products