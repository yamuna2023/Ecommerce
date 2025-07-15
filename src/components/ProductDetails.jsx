import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/ProductService';
import { Image, Row, Col, Button, Container } from 'react-bootstrap';

const ProductDetails = () => {
  const { id } = useParams();
  const [prodDetails, setProdDetails] = useState(null);

  useEffect(() => {
    getProductById(id)
      .then(res => {
        console.log(res.data);
        setProdDetails(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  if (!prodDetails) return <div className="text-center py-5">Loading...</div>;

  return (
    <Container className="py-5">
      <h2 className="mb-4">Product Details</h2>
      <Row>
        <Col md={5} className="text-center mb-4">
          <Image
            src={prodDetails.image}
            height={400}
            width="100%"
            style={{ objectFit: 'contain' }}
            rounded
          />
        </Col>
        <Col md={7}>
          <h3>{prodDetails.title}</h3>
          <p><strong>Category:</strong> {prodDetails.category}</p>
          <p><strong>Price:</strong> ${prodDetails.price}</p>
          <p>{prodDetails.description}</p>
          <p><strong>Rating:</strong> {prodDetails?.rating?.rate} / 5</p>
          <Button variant="success">Add to Cart</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
