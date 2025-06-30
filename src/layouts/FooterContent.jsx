import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
const FooterContent = () => {
    return (
        <section>
            <Container className='bg-light text-dark'>
  <Row>
    <Col xs={3} className="mb-4">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card Title-1</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    <Col xs={3} className="mb-4">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card Title-2</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    <Col xs={3} className="mb-4">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card Title-3</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    <Col xs={3} className="mb-4">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card Title-4</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>

        </section>
    )
}

export default FooterContent