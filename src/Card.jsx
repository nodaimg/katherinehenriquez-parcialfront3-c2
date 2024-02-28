
import React from "react";

const Card = ({ error }) => {
  return (
    <div className="card">
      <h3>Elige un color</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Card;
