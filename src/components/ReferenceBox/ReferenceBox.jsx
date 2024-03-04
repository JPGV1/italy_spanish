import React from 'react';
import './referencebox.css'
const ReferenceBox = ({ name, position, phone, email }) => {
  return (
    <div className="reference-box">
      <h3>{name}</h3>
      <p><strong>Cargo:</strong> {position}</p>
      <p><strong>Teléfono:</strong> {phone}</p>
      <p><strong>Correo electrónico:</strong> {email}</p>
    </div>
  );
};

export default ReferenceBox;
