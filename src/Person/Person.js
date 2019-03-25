import React from "react";
import "./Person.css";

const person = props => {
  return (
    <div>
      <p>
        I am {props.name} and gender:{props.gender},
        {Math.floor(Math.random() * 20)} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} />
    </div>
  );
};

export default person;
