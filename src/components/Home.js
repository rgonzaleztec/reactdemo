import React, { useEffect, useState } from 'react';
import firebaseApp from '../../credenciales';
import { getAuth, signOut } from 'firebase/auth';
import { Container, Button } from 'react-bootstrap';
import Agregartarea from '../components/Agregartarea';
import ListadoTareas from '../components/ListadoTareas';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const Home = ({ correoUsuario }) => {
  const [arrayTareas, setArrayTareas] = useState(null);
  const fakeData = [
    {
      id: 1,
      descripcion: 'tarea feasible 1',
      url: 'https://picsum.photos/420',
    },
    {
      id: 2,
      descripcion: 'tarea feasible 2',
      url: 'https://picsum.photos/420',
    },
    {
      id: 3,
      descripcion: 'tarea feasible 3',
      url: 'https://picsum.photos/420',
    },
  ];

  async function buscarDocumentoOrCrearDocumento(idDocumento) {
    // Crear la referencia al documento que necesitamos dentro de la collecion
    const docRef = doc(firestore, `usuarios/${idDocumento}`);
    // Busquemos el documento
    const consulta = await getDoc(docRef); // exista o no siempre tenemos un objeto
    if (consulta.exists()) {
      // El documento si existe vamos a retornarlo
      const infoDocu = consulta.data(); // lo convierto de data a objeto
      return infoDocu.tareas; // devuelvo un arreglo de tareas
    } else {
      await setDoc(docRef, { tareas: [...fakeData] });
      const consulta = await getDoc(docRef); // ya se creo consultamos
      const infoDocu = consulta.data(); // lo convierto de data a objeto
      return infoDocu.tareas;
    }
  }

  useEffect(() => {
    async function fetchTareas() {
      const tareasObtenidas = await buscarDocumentoOrCrearDocumento(
        correoUsuario
      );
      setArrayTareas(tareasObtenidas);
    }
    fetchTareas();
  }, []);

  return (
    <Container>
      <h4>Bienvenido {correoUsuario} , sesion iniciada</h4>
      <Button onClick={() => signOut(auth)}> Cerrar sesion </Button>
      <hr />
      <Agregartarea
        arrayTareas={arrayTareas}
        setArrayTareas={setArrayTareas}
        correoUsuario={correoUsuario}
      />
      {arrayTareas ? (
        <ListadoTareas
          arrayTareas={arrayTareas}
          setArrayTareas={setArrayTareas}
          correoUsuario={correoUsuario}
        />
      ) : null}
    </Container>
  );
};

export default Home;
