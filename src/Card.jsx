// Card.jsx
import React from 'react';

function Card({ title,overview, onMoreClick }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <button onClick={() => onMoreClick(title,overview)}>More</button>
    </div>
  );
}

export default Card;
