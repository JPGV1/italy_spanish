import React from 'react';
import './experience.css'
const ExperienceBox = ({ logo, name, level }) => {
  return (
    <div className="programming-language-box">
      <img className="language-logo" src={logo} alt={name}  />
      <div className="progress-bar">
        <div className="progress" style={{ width: level }}>
          <div className="progress-marker"></div>
        </div>
      </div>
      <p id='progress-level'>{name} </p>
    </div>
  );
};

export default ExperienceBox;
