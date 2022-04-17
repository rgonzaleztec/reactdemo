import React, { useState } from 'react';
import { Stack, Container, Form, Button } from 'react-bootstrap';
import firebaseApp from '../../credenciales';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(firebaseApp);

const Logueo = () => {
  const [estaRegistrandose, setEstaRegistrandose] = useState(false);

  async function submitHandler(e) {
    e.preventDefault();
    const correo = e.target.formBasicEmail.value;
    const contrasena = e.target.fromBasicPassword.value;
    console.log(correo, contrasena);
  }

  return (
    <Container>
      <Stack gap={3}>
        <h1>{estaRegistrandose ? 'Regsitrate' : 'Inicia Sesion'}</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            {estaRegistrandose ? 'Regsitrate' : 'Inicia Sesion'};
          </Button>
        </Form>

        <Button variant="primary" type="submit" style={{ width: '300px' }}>
          Aceder con Google
        </Button>

        <Button
          style={{ width: '300px' }}
          variant="secondary"
          onClick={() => estaRegistrandose(!estaRegistrandose)}
        >
          {estaRegistrandose
            ? 'Tienes cuenta, Inicia Sesion'
            : 'No tienes cuenta, Registrate'}
        </Button>
      </Stack>
    </Container>
  );
};

export default Logueo;
