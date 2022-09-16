import React from "react";
import Nav from "./Nav";
import Separe from "./Separe";

export default function Head() {
  return (
    <div className="header" id="head">
      <Nav />
      <div className="head-one">
        <div className="row">
          <div className="col-6" id="coca-coffee">
            <h1>COCA COFFEE</h1>
            <p className="small">
              SERVICE FOR OFFICE <br />
              BREACKROOMS AND
              <br />
              FREE DELIVRY
            </p>
            <a href="#service">
              <button>OUR SERVICE</button>
            </a>
          </div>
          <div className="col-6" id="img">
            <img src="2.png" alt="font"></img>
          </div>
        </div>
      </div>
      <Separe />
    </div>
  );
}
