import React from "react";
import "./About.css";
import { Media } from "reactstrap";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";
const About = () => {
  return (
    <div className="square">
      <div className="row">
        <div className="column">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", height: "650px" }}>
          
                    <Media style={{ fontSize: "18px"  }}>
                      <Media body style={{ minHeight: "fit-content" }}>
                        <Media heading>O nas</Media>
                        Jesienią 1991 roku miały miejsce dwa istotne wydarzenia w życiu rodziny Klapec: we wrześniu
                        narodziny Pawła Klapca, a już miesiąc później, czyli w październiku, otwarcie pierwszego lokalu
                        firmy Klapec. W tamtym czasie Małgorzata i Krzysztof Klapcowie założyli firmę, która zajmowała
                        się tylko produkcją lodów. Wraz z upływem lat i, z rozwojem firmy, zaczęło przybywać produktów w
                        menu. W końcu w lodziarni pojawiło się ciasto i kawa, tym samym lokal przekształcił się już
                        bardziej w kawiarnię. Kawa stała się nieodłącznym elementem egzystencji zarówno właścicieli, jak
                        i klientów lodziarni. Ziarna kawy zaczęły być wykorzystywane do wypieków oraz do produkcji
                        lodów.
                      </Media>
                    </Media>
               
          </div>
        </div>

        <div className="column">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/55/Coffee_bean_transparent.png"
            className="img-fluid"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default About;
