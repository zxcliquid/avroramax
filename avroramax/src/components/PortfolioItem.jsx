// src/components/PortfolioItem.jsx
import React from 'react';

const PortfolioItem = ({ imgSrc, title, description }) => {
  return (
    <div className="portfolio-item">
      <img src={imgSrc} alt={title} />
      <div className="portfolio-overlay">
        <h3 className="portfolio-title">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
