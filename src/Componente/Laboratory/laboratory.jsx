import React, { Component } from 'react';
import './laboratory.css'
import { Image } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
class Laboratory extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            lsw:[]
         }   
    }
   
  componentDidMount(){
    const screenWidth = window.screen.width; 
    const isMobil = (screenWidth<601) ? true : false;
    const url = (isMobil) ? 'https://juliamicelipitta.com/api/Laboratory.php?mobil=true' : 'https://juliamicelipitta.com/api/Laboratory.php';
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => {
        this.setState({lsw:resp});
      });
    }

    render() { 
        let path = 'https://admin.juliamicelipitta.com/storage/laboratory/';
        return ( <div className='w-100 m-0 p-0 labDiv'>
                {
                    this.state.lsw.map(item=> { 
                    return(
                          <Image className={(item.horizontal=="1") ? 'labImg imgDoble' : 'labImg '} src={path+item.imgurls}/> 
                        )
                })}
        </div> );
    }
}
 
export default Laboratory;