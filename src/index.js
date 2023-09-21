import React from "react";
import ReactDOM from "react-dom";
import "../src/index.css";
let greeting = "";
const cssStyle = {};
let currDate = new Date(2020, 5, 5, 20);
currDate = currDate.getHours();
if (currDate >= 1 && currDate < 12) {
  greeting = "Good morning";
  cssStyle.color = "Green";
} else if (currDate >= 12 && currDate < 19) {
  greeting = "Good Afternoon";
  cssStyle.color = "Orange";
} else {
  greeting = "Good Night";
  cssStyle.color = "red";
}

ReactDOM.render(
  <>
    <h3>current time is : {currDate.toString()}</h3>
    <div className="container">
      <h1>
        Hello sir ,<span style={cssStyle}> {greeting} </span>
      </h1>
    </div>
  </>,
  document.getElementById("root")
);
