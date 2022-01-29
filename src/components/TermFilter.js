import React, { useContext } from "react";
import { Col, Form, Button } from "react-bootstrap";
import SearchContext from "../contexts/SearchContext";

const TermFilter = () => {
    const {
        setAuthor,
        resetAuthor
    } = useContext(SearchContext);
    return (
        <>
          <Col as="h1" className="text-center mt-4">
            Busca tus albums favoritos🎶
          </Col>
          <Col className="d-flex justify-content-center">
            <Form className="d-flex-column mt-4">
              <Form.Group>
                <Form.Label>Autor/a y/o Título:</Form.Label>
                <Form.Control
                  type="input"
                  onChange={e => setAuthor(e.target.value)} />
              </Form.Group>
              <Button className="mt-4"
                onClick={resetAuthor}
                type="reset"
                variant="outline-info">
                Reset
              </Button>
             </Form>
            </Col>
        </>
    )
}

export default TermFilter;
