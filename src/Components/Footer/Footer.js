import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="contact">
      <div className="footer" id="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <h4> Bonkava </h4>
            </div>
            <div className="col-lg-3 col-sm-2 col-xs-3">
              <h3> Kontakt </h3>
              <ul>
                <li>
                  <a className="email" href="https://www.klapec.pl/">
                    {" "}
                    Cukiernia Klapec
                  </a>
                </li>
                <br />
                <li>
                  {" "}
                  <p> pawel@klapec.pl </p>{" "}
                </li>
                <li>
                  <p> +48730003715 </p>{" "}
                </li>
                <li>
                  <p> biuro@klapec.pl </p>{" "}
                </li>
              </ul>
            </div>
            {/* <div className="col-lg-3 col-sm-2 col-xs-3">
              <ul>
                <li>
                  {" "}
                  <h5>
                    {" "}
                    <a href="#" style={{ marginTop: "5em" }}>
                      {" "}
                      ABOUT US
                    </a>{" "}
                  </h5>
                </li>
                <li>
                  {" "}
                  <h5>
                    <a href="#"> CURRENT SERIES </a>{" "}
                  </h5>
                </li>
                <li>
                  {" "}
                  <h5>
                    <a href="#"> THE HOUSE </a>{" "}
                  </h5>
                </li>
                <li>
                  {" "}
                  <h5>
                    <a href="#"> LOOKING BACK </a>{" "}
                  </h5>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
