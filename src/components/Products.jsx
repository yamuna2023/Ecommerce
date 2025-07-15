import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../services/ProductService';
import { Col, Row, Container } from 'react-bootstrap';
import ProductList from './ProductList';

const Products = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then(res => {
        console.log(res.data);
        setProductData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Latest Products</h2>
      <Row className="g-4">
        {productData.map(product => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductList product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
