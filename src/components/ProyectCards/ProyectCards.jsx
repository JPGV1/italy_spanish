import React from 'react';
import './cards.css'

const ProyectCards = ({ project }) => {
    const { title, description, imageUrl, buttonUrl } = project;
  
    return (
      
        <div className="card">
          <img className='imgProyect'src={imageUrl} alt={title}  />
          <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            < a href={buttonUrl} className="card-button" target='_blank'>See More</a>
          </div>
        </div>
     
    );
  };
  
  export default ProyectCards;


