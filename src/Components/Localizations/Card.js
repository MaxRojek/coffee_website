import React from "react";

import "./Card.css";
const SpotCard = (props) => {
  return <div className="flex card shadow-5">{props.title}</div>;
};

export default SpotCard;
