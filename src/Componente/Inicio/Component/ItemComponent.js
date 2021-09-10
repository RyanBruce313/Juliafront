import React, { Component } from 'react';
import "./component.css";

import { Carousel } from "react-bootstrap";

export default class ItemComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            lsw:[]
         }   
    }
   
  componentDidMount(){
    fetch("https://juliamicelipitta.com/api/Cover.php")
      .then((resp) => resp.json())
      .then((resp) => {
        this.setState({lsw:resp});
      });
     
  }

  render() { 
    console.log(this.state.lsw);
    

    return(
        <>
            <Carousel fade
            indicators={false}
            //interval={100}
            keyboard={false}
            activeIndex={this.props.index}
            onKeyDown={this.props.handleSelect}
            onKeyUp={this.props.notSelect}
            tabIndex="0"
            className="h-100"
            //activeIndex={handleOnSelect}
            ref={this.props.Slideshow}
            >
            {
             this.state.lsw.map(item=> { 
                let UrlImg = 'https://admin.juliamicelipitta.com//storage/cover/'+ item.imgurls;
                    
                if(item.video==1){
                    return(
                        <video
                        src={UrlImg}
                        className="d-block  inicio"
                        autoPlay
                        loop
                        muted
                        ></video>
                    )
                } else {
                    return (
                        <Carousel.Item className="" name="1">
                            <img className="d-block inicio" src={UrlImg} alt={item.title} />
                        </Carousel.Item>
                    )
                }
            })  
            } 
            </Carousel>
        </>
    )
  }
  

}