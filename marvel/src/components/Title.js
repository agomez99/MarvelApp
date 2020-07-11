import React, { Component } from "react";
import Logo from './MarvelLogo.jpg'
import '../App.css';

export class Title extends Component {
  render() {
    return (
      <div>
            <img src ={Logo} alt="marvel-logo" className="header"/>
      </div>
    );
  }
}
