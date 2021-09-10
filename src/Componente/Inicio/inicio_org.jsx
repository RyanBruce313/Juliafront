import "./inicio.css";
import React, { useState, useRef } from "react";
import { Carousel } from "react-bootstrap";
// import EventComponent from "./Component/EvenComponent";

function CarouselInicio(props) {

  // constructor(props) {
  //   super(props);

  //   this._onTouchStart = this._onTouchStart.bind(this);
  //   this._onTouchMove = this._onTouchMove.bind(this);
  //   this._onTouchEnd = this._onTouchEnd.bind(this);

  //   this.state = { swiped: false };
  //   this._swipe = {};
  //   this.minDistance = 50;
  // }
  
  
  const Slideshow = useRef(null);
  const [index, setIndex] = useState(0);

 

  const soltar = (vsoltar = false) => vsoltar;

  const handleOnSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const movDer = () => {
    if (index<26) {
      setIndex(index+1);
    } else {
      setIndex(1);
    }
    
  }

  const handleSelect = (e) => {
   
      if (e.keyCode == 32) {
        soltar(false);
        callerFun();
      } 
  };

  async function callerFun(vindex = false){
    await testAsync();
    if(vindex) {
      setIndex(0);
    } else { 
      if (index < 26) {
        setIndex(index + 1);
      }
      if (index >= 26) {
        setIndex(1);
      };
    }
}

  function testAsync(){
    return new Promise((resolve,reject)=>{
        //here our function should be implemented 
        setTimeout(()=>{
            resolve();
        ;} , 100
        );
    });
}

  const notSelect = (e) => {
    //console.log('soltar')
    //handleInterval(false);
    callerFun(true);
    setTimeout(() =>  {setIndex(0);} , 50);
  }

  let inicio = require("./img/inicio.jpg");
  let c_mobil = require("./img/cover-mobile.jpg");
 
  let c0 = require("./img/video.mp4");
  let c1 = require("./img/1C.jpg");
  let c2 = require("./img/2C.jpg");
  let c3 = require("./img/3C.jpg");
  let c4 = require("./img/4C.jpg");
  let c5 = require("./img/5C.jpg");
  let c6 = require("./img/6C.jpg");
  let c7 = require("./img/7C.jpg");
  let c8 = require("./img/8C.jpg");
  let c9 = require("./img/9C.jpg");
  let c10 = require("./img/10.mp4");
  let c11 = require("./img/11C.jpg");
  let c12 = require("./img/12C.jpg");
  let c13 = require("./img/13C.jpg");
  let c14 = require("./img/14C.jpg");
  let c15 = require("./img/15C.jpg");
  let c16 = require("./img/16C.jpg");
  let c17 = require("./img/17.mp4");
  let c18 = require("./img/18C.jpg");
  let c19 = require("./img/19C.jpg");
  let c20 = require("./img/20C.jpg");
  let c21 = require("./img/21C.jpg");
  let c22 = require("./img/22C.jpg");
  let c23 = require("./img/23C.jpg");
  let c24 = require("./img/24C.jpg");
  let c25 = require("./img/25C.mp4");
  let c26 = require("./img/26C.jpg");
  let c27 = require("./img/27C.jpg");

  let screenWidth = window.screen.width; 
  let info = (screenWidth<601) ? 'Touch to answer the question' : 'Hold the spacebar to answer the question';
  
  return (
    <>
    <div className="next" onClick={movDer}></div> 
     
    <Carousel fade
      indicators={false}
      //interval={100}
      keyboard={false}
      activeIndex={index}
      onKeyDown={handleSelect}
      onKeyUp={notSelect}
      tabIndex="0"
      className="h-100"
      //activeIndex={handleOnSelect}
      ref={Slideshow}
    >
      <Carousel.Item className="" name="0">
      {(screenWidth>700 ) ?
        <img className="d-block inicio2 " src={inicio.default} alt="First slide" /> :
        <img className="d-block inicio2 " src={c_mobil.default} alt="First slide" />
      }
        <div className="text-center footer-inicio">
          { info }
        </div>
      </Carousel.Item>

      <Carousel.Item className="" name="1">
        <img className="d-block inicio" src={c1.default} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className="" name="2">
        <img className="d-block inicio" src={c2.default} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className="" name="3">
        <img className="d-block inicio" src={c3.default} alt="First slide" />
      </Carousel.Item>

      <Carousel.Item className="">
        <img className="d-block inicio" src={c4.default} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className="">
        <img className="d-block inicio" src={c5.default} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className="">
        <img className="d-block inicio" src={c6.default} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className="">
        <img className="d-block inicio" src={c7.default} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className="">
        <img className="d-block inicio" src={c8.default} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className="">
        <img className="d-block inicio" src={c9.default} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className="">
        <video
          src={c10.default}
          className="d-block  inicio"
          autoPlay
          loop
          muted
        ></video>
      </Carousel.Item>
      <Carousel.Item className="">
        <img className="d-block inicio" src={c11.default} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className="">
        <img className="d-block inicio" src={c12.default} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className="">
        <img className="d-block inicio" src={c13.default} alt="First slide" />
      </Carousel.Item>

      <Carousel.Item className="">
        <img className="d-block inicio" src={c14.default} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className="">
        <img className="d-block inicio" src={c15.default} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className="">
        <img className="d-block inicio" src={c16.default} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className="">
        <video
          src={c17.default}
          className="d-block  inicio"
          autoPlay
          loop
          muted
        ></video>
      </Carousel.Item>
      <Carousel.Item className="">
        <img className="d-block inicio" src={c18.default} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className="">
        <img className="d-block inicio" src={c19.default} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className="">
        <img className="d-block inicio" src={c21.default} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className="">
        <img className="d-block inicio" src={c22.default} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className="">
        <img className="d-block inicio" src={c23.default} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className="">
        <img className="d-block inicio" src={c24.default} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className="">
        <video
          src={c25.default}
          className="d-block  inicio"
          autoPlay
          loop
          muted
        ></video>
      </Carousel.Item>
      <Carousel.Item className="">
        <img className="d-block inicio" src={c26.default} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className="">
        <img className="d-block inicio" src={c27.default} alt="First slide" />
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default CarouselInicio;
