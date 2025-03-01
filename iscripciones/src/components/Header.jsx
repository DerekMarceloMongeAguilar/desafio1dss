// Header.jsx
import React from 'react';

const Header = ({ numMateriasInscritas }) => {
  return (
    <header className="header">
      <h1>Aplicación de Inscripción a Materias</h1>
      <p>Materias inscritas: {numMateriasInscritas}</p>
    </header>
  );
};

export default Header;
