import React from "react";
// import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.jpg";

const App = () => {
  return (
    <>
      <div className="app">React typescript app work!</div>
      <p>test</p>
      {/* <img src={icon1} alt="React icon" /> */}
      <img className="image" src={icon2} alt="React icon 2" />
      <img className="image" src={icon3} alt="React icon" />
    </>
  );
};

export default App;
