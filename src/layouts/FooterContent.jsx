import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const FooterContent = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center text-center">
          {[1, 2, 3, 4].map((num) => (
            <Col
              key={num}
              xs={12}
              sm={6}
              md={6}
              lg={3}
              className="d-flex justify-content-center mb-4"
            >
              <Card style={{ width: '100%', maxWidth: '18rem' }} className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>Card Title-{num}</Card.Title>
                  <Card.Text>
                    Discover the latest offers on our top-selling products. Limited-time discounts available shop now and save big!                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FooterContent;
