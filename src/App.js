import React from "react";
import Particle from "./Particle";
import TypedEffect from "./TypedEffect";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Particle />
        <h1>Hello Coders!</h1>
        <span>I am </span>
        <TypedEffect />
      </div>
    );
  }
}

export default App;
