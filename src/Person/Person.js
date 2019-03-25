import React from "react";
const person = props => {
  return (
    <div>
      <p>
        I am {props.name} and gender:{props.gender},
        {Math.floor(Math.random() * 20)} years old!
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
