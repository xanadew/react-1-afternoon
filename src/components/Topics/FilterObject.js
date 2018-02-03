import React, { Component } from 'react';

export default class FilterObject extends Component {
  constructor(){
    super();
    this.state(
      unFilteredArray=[{}]
    )
  }
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
      <h4>Filter Object</h4>
      <span className="puzzleText"></span>
      <input className="inputLine"></input>
      <button className="confirmationButton"></button>
      <span className="resultsBox filterObjectRB"></span>
      </div>
    )
  }
}