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
  switchNameHandler = () => {
    //Dont do this: this.state.persons[0].name = "priyobrato";
    this.setState({
      persons: [
        { name: "priyo", gender: "male" },
        { name: "deahst", gender: "female" },
        { name: "hdge", gender: "female" }
      ]
    });
  };
  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "priyo", gender: "male" },
        { name: event.target.value, gender: "female" },
        { name: "hdge", gender: "female" }
      ]
    });
  };
  render() {

    const style={
      background-color:'white',
      font:'inherit',
      border; '1px solid blue',
      padding: '8px',
    };

    return (
      <div className="App">
        <h1>Hello World!</h1>
        <button 
        style={style}
        onClick={this.switchNameHandler}>Switch App</button>
        <Person
          name={this.state.persons[0].name}
          gender={this.state.persons[0].gender}
        >
          Hobby:Cricket
        </Person>
        <Person
          name={this.state.persons[1].name}
          gender={this.state.persons[1].gender}
          changed={this.nameChangeHandler}
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
