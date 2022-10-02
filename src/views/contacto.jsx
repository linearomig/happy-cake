import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';



function Contacto() {
  return (
    <div>
    <Form>
        <Container>
            <h1 className='mt-5'>Cuéntanos ¿En qué te podemos ayudar?</h1>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripción</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="danger" type="enviar">Enviar</Button>
        </Container>
    </Form>
    </div>
  );
}

export default Contacto;