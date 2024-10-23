import React from 'react';

function ProjectCard({ src, h3, p, onClick }) {
  return (
    <div  onClick={onClick}>
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </div>
  );
}

export default ProjectCard;
