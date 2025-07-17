import React from 'react';

const IdeasCard = ({ image, title, date }) => {
  return (
    <div className="ideas-card">
    <img
    src="https://www.ums.ac.id/__image__/uploads/8rr2OLM9JaoPW44uNyGHCTr6D8UwGjPqU7mybqTZ.webp"
    alt={title}
    loading="lazy"
    />
      <p className="date">{date}</p>
      <h3 className="title">{title}</h3>
    </div>
  );
};

export default IdeasCard;
