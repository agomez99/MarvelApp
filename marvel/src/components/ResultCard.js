import React, { Component } from 'react';
import '../App.css'
export class ResultCard extends Component {
  render() {
    return (
      <button className="result-card" onClick={ this.props.onClick }>
        <figure className="result-card__image">
          <img src={ this.props.image } alt={ this.props.title } />
        </figure>
        <div className="result-card__info">
          <h2>{ this.props.title }</h2>
          <h2  className="name">{this.props.name}</h2>
        </div>
      </button>
    );
  }
}
