import "./inicio.css";
import React, { useState, useRef, useEffect } from "react";
import { Carousel } from "react-bootstrap";

function CarouselInicio(props) {
  const Slideshow = useRef(null);
  const [index, setIndex ] = useState(0);
  const [todos, setTodos ] = useState([]);
  var delayTimer = 500;
  const soltar = (vsoltar = false) => vsoltar;

  let screenWidth = window.screen.width; 

  let isMobil = (screenWidth<801) ? true : false;

  let info = (screenWidth<801) ? 'Touch the screen to answer the question' : 'Click the screen and hold the spacebar to answer the question';
 
  console.info(navigator.userAgent);

  if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/(iPad|iPhone|iPod)/gi)
    || navigator.userAgent.match(/Windows Phone/i) ) {  info = 'Touch the screen to answer the question' 
    isMobil=true;
  }
  if (navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2) {
    isMobil=true;
    info = 'Touch the screen to answer the question';
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
    document.getElementsByTagName("html")[0].style.overflow = "auto";
  }

  const url = (isMobil) ? 'https://juliamicelipitta.com/api/Cover.php?mobil=true' : 'https://juliamicelipitta.com/api/Cover.php';

  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJson = await response.json();
    setTodos(responseJson);
  }

  useEffect(() => {
    fetchApi();
  }, [])


  const lengthImg = todos.length;

  const handleOnSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const movDer = async () => {
    await testAsync();
    let cont = todos.length

    if(isMobil) {
      (index==0) ? setIndex(1) : setIndex(0);
    } else { 
      if (index<lengthImg) {
        if(index > 22 && index < lengthImg){
              delayTimer = 1000;
            }
        setIndex(index+1);
      } else {
        delayTimer = 500;
        setIndex(1);
      }
    }
  }

   const handleSelect = async (e) => {
      if (e.keyCode == 32) {
        let cont = todos.length
         if(index > 22 && index < lengthImg){
          delayTimer = 1000;
         }
            soltar(false);
            callerFun();
      } 
  };

  async function callerFun(vindex = false){
   await testAsync();
    if(vindex) {
      setIndex(0);
    } else { 
      let cont = todos.length
      if (index < lengthImg) {
        setIndex(index + 1);
      }
      if (index >= lengthImg) {
        delayTimer = 500;
        setIndex(1);
      };
    }
}

  function testAsync(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        ;} , delayTimer
        );
    });
}

  const notSelect = (e) => {
    callerFun(true);
    setTimeout(() =>  {setIndex(0);} , 50);
  }

  let inicio = require("./img/coverxl.jpg");
  let c_mobil = require("./img/coverxs.jpg");

  let UrlImg = 'https://www.juliamicelipitta.com/imagen/CoverJulia.jpg';
  let UrlImgMovil = 'https://www.juliamicelipitta.com/imagen/CoverJuliaMovil.png';
  
  if(screenWidth>650 && screenWidth<800 ) {
      c_mobil = require("./img/coversm.jpg");
  }
  
  let classCober = (isMobil) ? 'imgCober imgCober2 padingIpad ' : 'imgCober';
  let classPadre = (isMobil) ? 'padre padre2 ' : 'padre';
 
  return (
    <>

    {(isMobil) &&
        <div className="next" id="next" onClick={movDer}></div> 
    }
        
    <Carousel fade
      indicators={false}
      keyboard={false}
      activeIndex={index}
      onKeyDown={handleSelect}
      onKeyUp={notSelect}
      tabIndex="0"
      className="h-100"
      ref={Slideshow}
    >
    
      <Carousel.Item className="" name="0">
      {(screenWidth>799 ) ?
        <div className={classPadre}><div className="inicioImg"> <img className={classCober} src={UrlImg} alt="First slide" />  </div></div>
       :
       <div className="padre"><div className="inicioImg">  <img className="imgMobil" src={UrlImgMovil} alt="First slide" /> </div></div>
      }
        <div className="text-center footer-inicio">
          { info }
        </div>
      </Carousel.Item>
      {
        todos.map(item=> { 

                let isVideo = item.video;
                let img = item.imgurls;
               
                let UrlImg = 'https://admin.juliamicelipitta.com/storage/cover/'+ img;
                let UrlImgIpad  = 'https://admin.juliamicelipitta.com/storage/cover/'+ item.imgurlsipad;

                console.log({img, isVideo, UrlImg, isMobil, UrlImgIpad})   

                if((isMobil)) {
                  if(isVideo==1){
                      return(
                        <Carousel.Item className="" name="Video">
                          <video src={UrlImg} className="d-block  inicio videoMobil" autoPlay loop muted></video>
                          <video src={UrlImgIpad} className="d-block  inicio videoIpad" autoPlay loop muted></video>
                        </Carousel.Item>
                      )
                   
                  } else {
                      return (
                          <Carousel.Item className="" name="Image">
                              <img className="d-block inicio videoMobil" src={UrlImg} alt={item.title} name="imgMobil" />
                              <img className="d-block inicio videoIpad" src={UrlImgIpad} alt={item.title} name="imgIpad"/>
                          </Carousel.Item>
                      )
                  }

                } else { 
                  if(isVideo==1){
                      return(
                        <Carousel.Item className="" name="1">
                          <video
                          src={UrlImg}
                          className="d-block  inicio"
                          autoPlay
                          loop
                          muted
                          ></video>
                          </Carousel.Item>
                      )
                  } else {
                      return (
                          <Carousel.Item className="" name="1">
                              <img className="d-block inicio" src={UrlImg} alt={item.title} />
                          </Carousel.Item>
                      )
                  }
                }
            })  
        } 
    </Carousel>
    </>
  );
}

export default CarouselInicio;