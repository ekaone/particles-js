import React from "react";
import Particles from "react-particles-js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Particles
        params={{
          particles: {
            number: {
              value: 70,
            },
            size: {
              value: 5,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
        width="1200px"
        height="500px"
      />
      <div className="intro">Particles JS</div>
    </div>
  );
}

export default App;
