import React from 'react';
import './experience.css'
const ExperienceBox = ({ logo, name, level }) => {
  return (
    <div className="programming-language-box">
      <img className="language-logo" src={logo} alt={name}  />
      <p id='progress-level'>{name} </p>
    </div>
  );
};

export default ExperienceBox;
