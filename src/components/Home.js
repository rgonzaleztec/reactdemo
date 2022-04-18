import React from 'react';
import firebaseApp from '../../credenciales';
import { getAuth, signOut } from 'firebase/auth';
import { Container, Button } from 'react-bootstrap';

const auth = getAuth(firebaseApp);

const Home = () => {
  return (
    <Container>
      <h4>Bienvenido, sesion iniciada</h4>
      <Button onClick={() => signOut(auth)}> Cerrar sesion </Button>
    </Container>
  );
};

export default Home;
