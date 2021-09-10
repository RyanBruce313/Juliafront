import React, { Component } from 'react';
import Example from './ColapseWork/colapseWork';
import './work.css'

class Work extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            lsw:[]
         }   
    }
   
  componentDidMount(){
    fetch("https://juliamicelipitta.com/api/Work.php")
      .then((resp) => resp.json())
      .then((resp) => {
        this.setState({lsw:resp});
      });
  }

    render() { 
        const screenWidthWork = window.screen.width; 
        return(
            <div className='Work w-100'>
                <div className="IniWork"></div>
                <div className="extra"/>
                {
                    this.state.lsw.map(item=> { 
                    return(
                    <Example
                        Titulo={item.titulo}
                        SubTitulo1={item.subtitulo1 }
                        SubTitulo2={item.subtitulo2}
                        SubTitulo3={item.subtitulo3}
                        Año={item.year}
                        Descripcion1={item.descripcion1}
                        Descripcion2={item.descripcion2}
                        Descripcion3={item.descripcion3}
                        lsImg={item.imgurls.slice(0,5)}
                        lsImgDos={item.imgurls.slice(5)}
                        screenWidth={screenWidthWork}
                    />
                   )
                })}

            </div>
        )
    }
}
 
export default Work;