// src/components/TeamMember.jsx
import React from 'react';

const TeamMember = ({ name, position, description }) => {
  return (
    <div className="team-member">
      <div className="team-info">
        <h3 className="team-name">{name}</h3>
        <p className="team-position">{position}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TeamMember;
