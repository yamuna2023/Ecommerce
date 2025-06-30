import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ProductList({product}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} height={250} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          Price : {product.price}
        </Card.Text>
        <Button as={Link} variant="primary" to={`/product-details/${product.id}`}>More Details</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductList;