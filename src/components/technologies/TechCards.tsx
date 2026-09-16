import React from "react";

const TechCards = ({ technologies }) => {
  return (
    <div>
      {technologies.map((technology) => (
        <li>{technology.name}</li>
      ))}
    </div>
  );
};

export default TechCards;

