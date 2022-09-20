import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [navibtn, setNavibtn] = useState(false);
  const [navleft, setNavleft] = useState(true);
  const [navright, setNavright] = useState(true);

  const btnClick = () => {
    setNavibtn(!navibtn);
    setNavleft(!navleft);
    setNavright(!navright);
  };

  return (
    <div>
      <div className="barre-de-navigation">
        <div className="logo">
          <Link to="/">
            <img src="12.png" alt="logo" width="100px"></img>
          </Link>
        </div>
        {navleft ? (
          <div className="nav" id="nav-left">
            <li className="nav-item">
              <Link to="/" className="home">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <a href="#service" className="nav-sacl">
                SERVICE
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-sacl">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-sacl">
                CONTACT
              </a>
            </li>
          </div>
        ) : (
          ""
        )}
        {navright ? (
          <div className="nav" id="nav-right">
            <li className="nav-item">
              <Link to="/" className="nav-sacl">
                login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="sing-up">
                sign up
              </Link>
            </li>
          </div>
        ) : (
          ""
        )}
      </div>
      <button className="btnClick" onClick={btnClick}>
        {navibtn ? "=" : "x"}
      </button>
    </div>
  );
}
