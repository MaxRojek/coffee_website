import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import "./Card.css";
const SpotCard = (props) => {
  return (
    <div class="flex card shadow-5">
      <a>{props.title}</a>
    </div>
  );
};

export default SpotCard;
