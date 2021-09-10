import React, { useState, useRef } from "react";
import "./component.css";

import { Carousel } from "react-bootstrap";

export default class EventComponent extends React.Component {

  constructor(props) {
    super(props);

    this._onTouchStart = this._onTouchStart.bind(this);
    this._onTouchMove = this._onTouchMove.bind(this);
    this._onTouchEnd = this._onTouchEnd.bind(this);

    this.state = { swiped: false };
    this._swipe = {};
    this.minDistance = 50;
    this._screenWidth = window.screen.width; 
    this._info = (this._screenWidth<601) ? 'Touch to answer the question' : 'Hold the spacebar to answer the question';
  
    this._handleOnSelect =this.this._handleOnSelect.bind(this);

    this._index = this._index;
    this._moveDer = this._movDer;
    this._setIndex = this._setIndex(this);
  }

 
  

  _handleOnSelect = (selectedIndex, e) => {
    this._setIndex(selectedIndex);
  };


  _movDer = () => {
    if (this._index<26) {
      this._setIndex(this._index+1);
    } else {
      this._setIndex(1);
    }
    
  }

  _onTouchStart(e) {
    const touch = e.touches[0];
    this._swipe = { x: touch.clientX };
    this.setState({ swiped: false });
    console.log('onTouchStart');
  }

  _onTouchMove(e) {
    if (e.changedTouches && e.changedTouches.length) {
      const touch = e.changedTouches[0];
      this._swipe.swiping = true;
    }
  }

  _onTouchEnd(e) {
    const touch = e.changedTouches[0];
    const absX = Math.abs(touch.clientX - this._swipe.x);
    if (this._swipe.swiping && absX > this.minDistance ) {
      this.props.onSwiped && this.props.onSwiped();
      this.setState({ swiped: true });
    }
    this._swipe = {};

    console.log('onTouchEnd');
  }

  render() {

    let inicio = require("../img/inicio.jpg");
    let c_mobil = require("../img/cover-mobile.jpg");
   
    let c0 = require("../img/video.mp4");
    let c1 = require("../img/1C.jpg");
    let c2 = require("../img/2C.jpg");
    let c3 = require("../img/3C.jpg");
    let c4 = require("../img/4C.jpg");
    let c5 = require("../img/5C.jpg");
    let c6 = require("../img/6C.jpg");
    let c7 = require("../img/7C.jpg");
    let c8 = require("../img/8C.jpg");
    let c9 = require("../img/9C.jpg");
    let c10 = require("../img/10.mp4");
    let c11 = require("../img/11C.jpg");
    let c12 = require("../img/12C.jpg");
    let c13 = require("../img/13C.jpg");
    let c14 = require("../img/14C.jpg");
    let c15 = require("../img/15C.jpg");
    let c16 = require("../img/16C.jpg");
    let c17 = require("../img/17.mp4");
    let c18 = require("../img/18C.jpg");
    let c19 = require("../img/19C.jpg");
    let c20 = require("../img/20C.jpg");
    let c21 = require("../img/21C.jpg");
    let c22 = require("../img/22C.jpg");
    let c23 = require("../img/23C.jpg");
    let c24 = require("../img/24C.jpg");
    let c25 = require("../img/25C.mp4");
    let c26 = require("../img/26C.jpg");
    let c27 = require("../img/27C.jpg");

    return (
      <div className="component"
        onTouchStart={this._onTouchStart}
        onTouchMove={this._onTouchMove}
        onTouchEnd={this._onTouchEnd}>
        {/* {`Component-${this.state.swiped ? 'swiped' : ''}`} */}
      </div>
    );
  }

}