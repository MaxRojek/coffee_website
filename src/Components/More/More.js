import React from "react";
import "./More.css";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";

const More = () => {
  return (
    <section className="containerBlock">
      <div className="imageBlock"></div>
      <div className="textArticle">
        <article>
          <h4>Twórca ?</h4>
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <Spring
                delay={500}
                to={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateX(0)" : "translateX(200px)" }}
              >
                {({ opacity }) => (
                  <div style={{ opacity }} className="article">
                    Paweł Klapec, poszukując smakowych inspiracji do produkcji lodów, trafiał na różne ziarna kawy.
                    Zasmakowały mu takie, które nie są dostępne w Gliwickich lokalach. Nie mógł się zdecydować jednak,
                    która kawa jest jego ulubioną, więc postanowił zmieszać trzy ziarna kawy, najbardziej mu
                    odpowiadające, dzięki czemu powstała podstawowa mieszanka kawy firmy Bonkava. Bonkava jest nową
                    marką kawy, której autorem jest właśnie Paweł Klapec.
                  </div>
                )}
              </Spring>
            )}
          </VisibilitySensor>
        </article>
      </div>
    </section>
  );
};
export default More;
