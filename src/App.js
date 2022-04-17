import React, { useState, userEffect } from 'react';
import './style.css';
import Home from './components/Home';
import Logueo from './components/Logueo';

export default function App() {
  const [usuarioGlobal, setUsuarioGlobal] = useState(null);
  return <>{usuarioGlobal ? <Home /> : <Logueo />}</>;
}
