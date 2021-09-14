import React from 'react';
import { Form, Container, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export default function Search(props) {

  const [search, setSearch] = React.useState('');
  
  return (
    <Container>
      <h1>PokeSearch</h1>
      <div className="search-container">
        <Form className="mt-2">
          <Form.Row className="align-items-center">
            <Col className="my-1" Style="display:flex">
              <Form.Control
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar Pokemon" />

                <Button className="btn btn-light border" onClick={(e) => props.getPokemon(search)}>
                  <FontAwesomeIcon icon= {faSearch} />
                </Button>
            </Col>
          </Form.Row>
        </Form>
      </div>
    </Container>
  )
}