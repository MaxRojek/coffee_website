import React from "react";

import "./Card.css";
const SpotCard = (props) => {
  return (
    <div className="flex card shadow-5">
      <a>{props.title}</a>
    </div>
  );
};

export default SpotCard;
