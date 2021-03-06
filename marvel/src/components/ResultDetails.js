import React, { Component } from 'react';
import './results.css'
export class ResultDetails extends Component {
  render() {
console.log(this.props)
    return (
      <article className="result-details">
        <div className="result-details__info">
         
          <div className="result-details__info__body">
            <div className="result-details__info__body__content">

              <div className="container" >
                <div className="row"  >
                  <div className="col-sm" style={{height:"100%"}}>
                  <img src={ this.props.image } alt={ this.props.title } className="imgpro"/>
                <h1 className="description">{ this.props.title }</h1>
                  </div>
                  <div className="col-sm" >
                  <p><strong>Appears In: { this.props.stories.available || 0 } stories</strong></p>
              <p className="description">{ this.props.description }</p>
              <p><strong>Links:</strong></p>
              <ul className="name" >
                { this.props.urls.map(({ url, type }, i) => <li key={ i }><a href={ url } target="_blank" rel="noopener noreferrer">{ type }</a></li>) }
              </ul>                 
              </div>
                </div>
              </div>
            </div>
            <button onClick={ this.props.onClose }></button>
          </div>
        </div>
      </article>
    );
  }
}
