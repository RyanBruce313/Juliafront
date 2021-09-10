import React, { useState } from 'react'
import { Carousel, Image } from 'react-bootstrap';
import './carruselShop.css'


function ControlledCarousel(props) {
    const [index, setIndex] = useState(0);

   // const [numImg, setNumImg] = useState(props.cantidad);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    
    const movDer = () => {
      if (index<props.cantidad) {
        setIndex(index+1);
      }
      
    }

    const movIz = () => {
      if (index>0) {
        setIndex(index-1);
      }

    }

    

   
    var imgMenos = require('../../imgEstilo/signomenos.png');

    return (<div>
      <div className='w-100 d-flex margen'>
          <label className='labelShop m-0'>
              <label className='labelShopBold'>{props.Titulo}</label> 
              <label className='labelItems' > <Image className='itemsMenos' src={imgMenos.default}/> </label> 
              <div className="showInblock">
              <label className=' subShop' onClick={movIz} >Previous </label> 
              <label className='labelItems'> / </label> 
              <label className=' subShop' onClick={movDer} >Next image </label>
              <label className=' imgShop'> ({index+1}  of {props.cantidad+1}) </label>
              <label className='precio2'>U$S {props.Precio}</label>
              </div>
          </label>

          <label className='labelShop2 m-0'>
              <label className='precio '>U$S {props.Precio}</label>
              <label className=' subShop'>{props.Link}</label>

          </label>    
      </div>

      <Carousel fade indicators={false} keyboard={true} interval={null} activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.img1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.img2}
            alt="Second slide"
          />
        </Carousel.Item>
        {props.img3!== null && 
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.img3}
            alt="Third slide"
          />
        </Carousel.Item>}
        {props.img4!== null && 
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.img4}
            alt="Third slide"
          />
        </Carousel.Item>}
        
      </Carousel>
      </div>
    );
  }
  

  export default ControlledCarousel;