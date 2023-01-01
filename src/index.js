import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import './Heading'
import Heading from "./Heading";


ReactDOM.render(
  <React.Fragment>
    <Heading></Heading>
    <p>These are my favourite Netflix Series</p>
    <ol>
    <li>Stranger Things</li>
    <li>Money Heist</li>
    <li>Rise of the Ottoman</li>
    <li>Vikings</li>
    <li>Friends</li>
    </ol>
  </React.Fragment>
  ,document.getElementById('root')
)