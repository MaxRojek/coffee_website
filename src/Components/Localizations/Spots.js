import React from "react";
//import "./Spots.css";
import SpotCard from "./Card.js";
const Spots = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          marginLeft: "10px",
          width: "90%",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",

          justifyContent: "space-between",
        }}
      >
        <SpotCard />
        <SpotCard />
        <SpotCard />
      </div>
    </div>
  );
};
export default Spots;
