import React from "react";
//import "./Spots.css";
import SpotCard from "./Card.js";
const Spots = () => {
  return (
    <>
      <div id="localizations" style={{ marginTop: "20px", height: "fit-content" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "60px",
          }}
        >
          <h4> Kawa dostępna w naszych lokalach </h4>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              marginLeft: "10px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              flexDirection: "center",
              justifyContent: "center",
            }}
          >
            <SpotCard title="Gliwice, Strzelców Bytomskich 4" />
            <SpotCard title="Gliwice, Jasna 40" />
            <SpotCard title="Gliwice, Plac Inwalidów Wojennych 1" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Spots;
