import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ProductList({ product }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={product.image}
        height="250"
        style={{ objectFit: 'contain', padding: '1rem' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fs-6">{product.title}</Card.Title>
        <Card.Text>
          <strong>Price:</strong> ${product.price}
        </Card.Text>
        <Button
          as={Link}
          to={`/product-details/${product.id}`}
          variant="primary"
          className="mt-auto"
        >
          More Details
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductList;
