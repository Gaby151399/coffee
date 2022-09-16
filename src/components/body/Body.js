import React from "react";
import Customer from "./Customer";

export default function Body() {
  return (
    <div className="body" id="service">
      <h2>OUR SERVICE</h2>
      <div className="row" id="row-card">
        <div className="col">
          <img src="coffee-1.png" alt="coffee"></img>
          <h6>COCA COFFEE</h6>
          <button>$</button>
        </div>
        <div className="col">
          <img src="coffee-2.png" alt="coffee"></img>
          <h6>COCA COFFEE</h6>
          <button>$</button>
        </div>
        <div className="col">
          <img src="coffee-3.png" alt="coffee"></img>
          <h6>COCA COFFEE</h6>
          <button>$</button>
        </div>
        <div className="col">
          <img src="coffee-4.png" alt="coffee"></img>
          <h6>COCA COFFEE</h6>
          <button>$</button>
        </div>
      </div>
      <div className="about" id="about">
        <div className="row" id="row-about">
          <div className="col-6">
            <img src="13.png" alt=""></img>
          </div>
          <div className="col-6" id="about-para">
            <h2>ABOUT US</h2>
            <p className="small">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              deserunt laborum nihil molestias earum autem facilis dolor? Quae
              hic, porro ratione repellat voluptatem quos aspernatur numquam
              iusto recusandae dolore minus!Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ab deserunt laborum nihil molestias
              earum autem facilis dolor? Quae hic, porro ratione repellat
              voluptatem quos aspernatur numquam iusto recusandae dolore
              minus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              deserunt laborum nihil molestias earum autem facilis dolor? Quae
              hic, porro ratione repellat voluptatem quos aspernatur numquam
              iusto recusandae dolore minus! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ab deserunt laborum nihil molestias
              earum autem facilis dolor? Quae hic, porro ratione repellat
              voluptatem quos aspernatur numquam iusto recusandae dolore
              minus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              deserunt laborum nihil molestias earum autem facilis dolor? Quae
              hic, porro ratione repellat voluptatem quos aspernatur numquam
              iusto recusandae dolore minus!Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ab deserunt laborum nihil molestias
              earum autem facilis dolor? Quae hic, porro ratione repellat
              voluptatem quos aspernatur numquam iusto recusandae dolore minus!
            </p>
            <a href="#contact">
              <button>CONTACT US</button>
            </a>
          </div>
        </div>
      </div>
      <Customer />
      <div className="contact p-20" id="contact">
        <h3>CONTACT</h3>
        <div className="row">
          <div className="col-3" id="m-c-a">
            <ul>
              <li>
                EMAIL:
                <br />
                <span>binagabyarson@gmail.com</span>
              </li>
            </ul>
            <ul>
              <li>
                ADRESS:
                <br />
                <span>Antananarivo Madagascar</span>
              </li>
            </ul>
            <ul>
              <li>
                PHONE:
                <br />
                <span>+261 32 64 312 31</span>
              </li>
            </ul>
          </div>
          <div className="col-3" id="form">
            <form method="SEND">
              <input
                type="name"
                id="name"
                placeholder="name"
                className="formulaire"
              ></input>
              <input
                type="FirstName"
                id="firstName"
                placeholder="first name"
                className="formulaire"
              ></input>
              <input
                type="email"
                id="email"
                placeholder="e-mail"
                className="formulaire"
              ></input>
              <textarea
                type="message"
                placeholder="message"
                className="formulaire"
              ></textarea>
              <p>SEND</p>
            </form>
          </div>
          <div className="col-3" id="icon">
            <a href="http://www.facebook.com">
              <img src="facebook.png" alt="facebook"></img>
            </a>
            <a href="http://www.twitter.com">
              <img src="twitter.png" alt="twitter"></img>
            </a>
            <a href="http://www.linkedin.com">
              <img src="linkedin.png" alt="linkedin"></img>
            </a>
            <a href="http://www.youtube.com">
              <img src="youtube.png" alt="youtube"></img>
            </a>
          </div>
        </div>
      </div>
      <div className="author">
        <h6>AUTHORIZED DISTRIBUTOR COCA COFFEE BRAND</h6>
        <div className="alert alert-info" role="alert">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab deserunt
          laborum nihil molestias earum autem facilis dolor? Quae hic, porro
          ratione repellat voluptatem quos aspernatur numquam iusto recusandae
          dolore minus!Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ab deserunt laborum nihil molestias earum autem facilis dolor? Quae
          hic, porro ratione repellat voluptatem quos aspernatur numquam iusto
          recusandae dolore minus!Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ab deserunt laborum nihil molestias earum autem
          facilis dolor? Quae hic, porro ratione repellat voluptatem quos
          aspernatur numquam iusto recusandae dolore minus!
        </div>
      </div>
    </div>
  );
}
