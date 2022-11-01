import React from "react"
import {Container, Row, Col, Button, Form} from "react-bootstrap";

const Search = () => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={}>
            <Row>
              <Col xs={9}>
                <Form.Control placeholder="Search for a new image" />
              </Col>
              <Col>
                <Button variant="primary" type="submit">Search</Button>
              </Col>
            </Row>
          </Form>
          </Col>
      </Row>
    </Container>
  )
}

export default Search