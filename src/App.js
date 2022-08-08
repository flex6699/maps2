import { useState } from "react";
import "./App.css";
import Logo from "./assests/Logo.svg";

function App() {
  const [distance, setDistance] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const getDistance = () => {
    const td = document.querySelector(
      ".mapbox-directions-component.mapbox-directions-route-summary h1 "
    );
    const or = document.querySelector("#mapbox-directions-origin-input input ");
    setOrigin(or.value);
    const des = document.querySelector(
      "#mapbox-directions-destination-input input "
    );
    setDestination(des.value);
    const tdistance = td.innerText + "s";
    setDistance(tdistance);
  };
  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="logo" />
      </div>
      <div className="heading">
        <h1>
          Let's calculate <strong>distance</strong> from Google maps
        </h1>
      </div>
      <div className="Origin">Origin</div>
      <div className="button" onClick={getDistance}>
        <p>Calculate</p>
      </div>

      <div className="Destination">Destination</div>
      <div className="distance-info">
        <div className="calcArea">
          <span>Distance</span>
          <strong>{distance}</strong>
        </div>
        <p className="total-distance">
          The distance between <strong>{origin}</strong> and{" "}
          <strong>{destination}</strong> is <strong>{distance}</strong>
        </p>
      </div>
    </div>
  );
}

export default App;
