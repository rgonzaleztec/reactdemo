import React from 'react';
import { Stack, Container, Row, Col, Button } from 'react-bootstrap';
import firebaseApp from "../../credenciales";
import {getFirestore, updateDoc, doc } from "firebase/firestore";

const firestore = getFirestore(firebaseApp);

const ListadoTareas = ({ arrayTareas, correoUsuario, setArrayTareas }) => {

async function eliminarTarea(idTareaEliminar) {
  // creamos un arreglo nuevo con los objetos que no son el que queremos eliminar
  // Un nuevo arreglo sin un elemento. Esto no lo elimina de firestore
  const nuevaArrayTareas = arrayTareas.filter((objetoTarea) => objetoTarea.id !== idTareaEliminar);
  // actualizar la BD 
  // Buscamos en la coleccion con el documento que hace referencia al correo del usuario para traer los datos
  const docuRef = doc(firestore,`usuarios/${correoUsuario}`);
  updateDoc(docuRef, {tareas: [...nuevaArrayTareas]});
  //actualizamos el estado esta funcion no tiene await porque no tenemos que esperar respuesta
  setArrayTareas(nuevaArrayTareas);


}

  return (
    <Container>
      <Stack>
        {arrayTareas.map((objetoTarea) => {
          return (
            <>
              <Row>
                <Col>{objetoTarea.descripcion}</Col>
                <Col>
                  <Button>Ver Archivo</Button>
                </Col>
                <Col>
                  <Button onClick={() => eliminarTarea(objetoTarea.id)}>
                    Eliminar Tarea
                  </Button>
                </Col>
              </Row>
              <hr />
            </>
          );
        })}
      </Stack>
    </Container>
  );
};

export default ListadoTareas;
