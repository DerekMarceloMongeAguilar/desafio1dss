// ResumenInscripcion.jsx
import React from 'react';

const ResumenInscripcion = ({ materiasInscritas, cancelarInscripcion, limpiarInscripciones }) => {
  const totalUnidades = materiasInscritas.reduce((acc, materia) => acc + materia.unidades, 0);

  return (
    <div className="resumen">
      <h2>Resumen de Inscripción</h2>
      {materiasInscritas.length > 0 ? (
        <>
          <ul>
            {materiasInscritas.map((materia) => (
              <li key={materia.id}>
                <h3>{materia.nombre}</h3>
                <button onClick={() => cancelarInscripcion(materia.id)}>Cancelar</button>
              </li>
            ))}
          </ul>
          <p>{`Total de unidades valorativas: ${totalUnidades}`}</p>
          <button onClick={limpiarInscripciones}>Limpiar Inscripciones</button>
        </>
      ) : (
        <p>No tienes materias inscritas.</p>
      )}
    </div>
  );
};

export default ResumenInscripcion;
