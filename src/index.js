import React, { Component } from "react";
import ReactDOM from "react-dom";
import Person from "./Person/Person.js";
import "./styles.css";

class App extends Component {
  state = {
    persons: [
      { name: "abcd", gender: "male" },
      { name: "defgs", gender: "male" },
      { name: "hdge", gender: "female" }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <button>Switch App</button>
        <Person
          name={this.state.persons[0].name}
          gender={this.state.persons[0].gender}
        >
          Hobby:Cricket
        </Person>
        <Person
          name={this.state.persons[1].name}
          gender={this.state.persons[1].gender}
        >
          Hobby:Foorball
        </Person>
        <Person
          name={this.state.persons[2].name}
          gender={this.state.persons[2].gender}
        >
          Hobby:Hocky
        </Person>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
