// MateriaList.jsx
import React from 'react';

const MateriaList = ({ materias, inscribirMateria }) => {
  return (
    <div className="materia-list">
      <h2>Materias Disponibles</h2>
      <div className="materia-container">
        {materias.map((materia) => (
          <div className="materia-card" key={materia.id}>
            <h3>{materia.nombre}</h3>
            <p>{materia.descripcion}</p>
            <p>{`Horario: ${materia.horario}`}</p>
            <p>{`Profesor: ${materia.profesor}`}</p>
            <p>{`Unidades valorativas: ${materia.unidades}`}</p>
            <button onClick={() => inscribirMateria(materia)}>Inscribir</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MateriaList;
