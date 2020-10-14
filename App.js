import React from "react";
import "./App.css";
import Sticky from "./components/todo.jsx";

function App() {
  return (
    <div className="App">
      <div className="App-logo">
        <i className="fa fa-3x fa-smile-o" aria-hidden="true"></i>
      </div>
      <div className="jumbotron jumbotron-fluid bg">
        <div className="header">
          <h1 className="display-4">Hello Julia!</h1>
          <p className="lead">
            <br />
            Are you very busy today? Let's check!
          </p>
        </div>
      </div>
      <div>
        <Sticky />
      </div>
      <div className="Footer">
        <a
          href="https://www.youtube.com/watch?v=YZuFsI-bttM"
          target="somethingUnique"
        >
          <button className="btn btn-dark">
            Click the Rainbow Button, especially if u have a horrible day...
          </button>
        </a>
      </div>
    </div>
  );
}

export default App;
