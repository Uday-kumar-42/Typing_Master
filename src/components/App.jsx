import React from "react";
import Main from "./Main";

export default function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <img src="./assets/boost.png" alt="speed_up"></img>
      <div className="logo">SpeedKeys</div>
    </header>
  );
}

function Footer() {
  return (
    <div className="footer">
      <h3>For any Queries contact us on</h3>
      <p>contact: abc@gmail.com </p>
      <p>Tel: 123-456-6789</p>
      <p>Srikakulam ,Andhra Pradesh</p>
      <div className="icons">
        <p>
          <i className="ri-instagram-fill"></i>
        </p>
        <p>
          <i className="ri-facebook-circle-fill"></i>
        </p>
        <p>
          <i className="ri-discord-fill"></i>
        </p>
        <p>
          <i className="ri-twitter-fill"></i>
        </p>
      </div>
    </div>
  );
}
