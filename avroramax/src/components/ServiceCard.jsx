// src/components/ServiceCard.jsx
import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3 className="service-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
