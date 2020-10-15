import React from "react";
import "./Home.css";
import About from "./About/About.js";
import More from "./More/More.js";
import Spots from "./Localizations/Spots.js";

import Footer from "./Footer/Footer.js";

const Home = () => {
  return (
    <>
      <div className="container2">
        <div className="box">
         
              <div >
                <img src={require("../img/bonkava_black.png")} alt="logo" className="img" />
                <p
                  style={{
                    color: "black",
                    fontSize: "40px",
                    width: "70%",
                    paddingLeft: "30px",
                  }}
                >
                  Nowa jakość smaku
                </p>
              </div>
          
        </div>
      </div>
      <div className="container3" id="about">
        <About />
      </div>
      <div className="container3">
        <More />
      </div>
      <div className="container3">
        <Spots />
      </div>

      <Footer />
    </>
  );
};

export default Home;
