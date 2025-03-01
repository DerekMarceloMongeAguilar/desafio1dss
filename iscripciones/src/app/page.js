// App.jsx
"use client";
import React, { useState } from 'react';
import styles from './index.css';
import { materias } from './data';
import Header from '../components/Header';
import MateriaList from '../components/MateriaList';
import ResumenInscripcion from '../components/ResumenInscripcion';


const App = () => {
  const [materiasInscritas, setMateriasInscritas] = useState([]);

  const inscribirMateria = (materia) => {
    setMateriasInscritas([...materiasInscritas, materia]);
  };

  const cancelarInscripcion = (id) => {
    setMateriasInscritas(materiasInscritas.filter((materia) => materia.id !== id));
  };

  const limpiarInscripciones = () => {
    setMateriasInscritas([]);
  };

  return (
    <div className="app">
      <Header numMateriasInscritas={materiasInscritas.length} />
      <MateriaList materias={materias} inscribirMateria={inscribirMateria} />
      <ResumenInscripcion
        materiasInscritas={materiasInscritas}
        cancelarInscripcion={cancelarInscripcion}
        limpiarInscripciones={limpiarInscripciones}
      />
    </div>
  );
};

export default App;
