import React from 'react';
import './referencebox.css'
const ReferenceBox = ({ name, position, phone, email }) => {
  return (
    <div className="reference-box">
      <h3>{name}</h3>
      <p><strong>Description:</strong> {position}</p>
      
    </div>
  );
};

export default ReferenceBox;
