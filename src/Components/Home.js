import React from "react";
import "./Home.css";
import About from "./About/About.js";
import More from "./More/More.js";
import Spots from "./Localizations/Spots.js";
import { Spring } from "react-spring/renderprops";
import Footer from "./Footer/Footer.js";

const Home = () => {
  return (
    <>
      <div class="container2">
        <div class="box">
          <Spring from={{ opacity: 0, marginTop: -500 }} to={{ opacity: 1, marginTop: 0 }}>
            {(props) => (
              <div style={props}>
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
            )}
          </Spring>
        </div>
      </div>
      <div class="container3" id="about">
        <About />
      </div>
      <div class="container3">
        <More />
      </div>
      <div class="container3">
        <Spots />
      </div>

      <Footer />
    </>
  );
};

export default Home;
