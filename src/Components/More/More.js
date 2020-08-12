import React from "react";
import "./More.css";
// const More = () => {
//   return (
//     <div style={{ height: "100vh", alignItems: "center", display: "flex", justifyContent: "center" }}>jakisn napis</div>
//   );
// };
// export default More;
const More = () => {
  return (
    <section class="containerBlock">
      <div className="imageBlock"></div>
      <div className="textArticle">
        <article>
          <h4>Twórca ?</h4>
          <div className="article">
            Paweł Klapec, poszukując smakowych inspiracji do produkcji lodów, trafiał na różne ziarna kawy. Zasmakowały
            mu takie, które nie są dostępne w Gliwickich lokalach. Nie mógł się zdecydować jednak, która kawa jest jego
            ulubioną, więc postanowił zmieszać trzy ziarna kawy, najbardziej mu odpowiadające, dzięki czemu powstała
            podstawowa mieszanka kawy firmy Bonkava. Bonkava jest nową marką kawy, której autorem jest właśnie Paweł
            Klapec.
          </div>
        </article>
      </div>
    </section>
  );
};
export default More;
