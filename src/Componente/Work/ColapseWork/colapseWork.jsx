import React, { useState, useEffect } from "react";
import { Col, Collapse, Image, Row } from "react-bootstrap";
import ModalImg from "../ModalImg/modalImg";
import "./colapse.css";

function Example(props) {
  const [open, setOpen] = useState(false);
  const [lsWork, setLsWork] = useState([]);

  const filtro1 = (e) => {
    localStorage.setItem("filtro", props.SubTitulo1)
  }

  let titulo = (props.SubTitulo1) ? props.SubTitulo1.trim() : '';
  let subtitulo2 = (props.SubTitulo2) ? ', '+props.SubTitulo2.trim() : '';
  let subtitulo3 = (props.SubTitulo3) ? ', '+props.SubTitulo3.trim() : '';

  return (
    <div className="iniSection">
          
            <div className="p-0 m-0 w-100 colapWork">
              <div className="p-0 m-0 div1 ">
                <label className="labelBold mb-0">{props.Titulo}</label>
                <label className="itemsWork mb-0">/</label>
                <label className="subWork1 mb-0" >{titulo}{subtitulo2}{subtitulo3} </label> {/**onClick={filtro1} */}
                {/*<label className="subWork1 mb-0"  >{subtitulo2} </label>  *onClick={filtro2} */}
                {/*<label className="subWork1 mb-0"  >{subtitulo3}</label>   {/**onClick={filtro3} */}
                <label className="itemsWork2 mb-0">/</label>

                <label
                  className='subWork mb-0' 
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  <span hidden={open ?  true : false} > More & Information </span>
                  <span hidden={open ?  false : true} className="subrayado12"> More & Information </span>
                </label>

                <label className="itemsWork mb-0" hidden={open ?  true : false}>+</label>
                <label className="itemsWork mb-0" hidden={open ?  false : true}>-</label>

                <Collapse in={open} >
                  <div id="example-collapse-text" className="año1">
                  {props.Año}
                  </div>
                </Collapse>
                
                <Collapse in={open} >
                <div className="mobilScreen">
                    <div id="example-collapse-text" className="año2">
                    <span className="descAno2" dangerouslySetInnerHTML={{__html: props.Año + ', ' + props.Descripcion2}}></span>
                    </div>
                    
                </div>
                </Collapse>
              </div>

              <div className="p-0 m-0 div2 ">
                <Collapse in={open}>
                  <div id="example-collapse-text" className="descriptionWork">
                    <div dangerouslySetInnerHTML={{__html: props.Descripcion1 }}></div> 
                  <div className="paddingMobil"></div>
                  </div>
                </Collapse>
              </div>
              <div className="p-0 m-0 div3 fullScreen">
                <Collapse in={open} >
                  <div id="example-collapse-text" className="año2">
                  {props.Año}
                  </div>
                </Collapse>
                <Collapse in={open}>
                  <div id="example-collapse-text " className="flexdesc">
                  <span className="desc2" dangerouslySetInnerHTML={{__html: props.Descripcion2}}></span>
                  </div>
                </Collapse>
              </div>
            </div>
            
            <div className="">
              {props.lsImg.map(it=>{
                var UrlImg = 'https://admin.juliamicelipitta.com/storage/work/'+ it.imgurls;
                return(<ModalImg imgPrin={UrlImg} classEspecial={it.horizontal} screenWidth={props.screenWidth} collapseImage={false} />)
              })}
            </div>

            <div className="p-0 m-0 " >
              <Collapse in={open}>
                <div id="example-collapse-text">
                    { 
                    props.lsImgDos.map((it2, index)=>{
                    
                    var resto = (((index+1) % 5) == 0) ? true : false;
                    var UrlImg2 = 'https://admin.juliamicelipitta.com/storage/work/'+ it2.imgurls;
                    return(<ModalImg imgPrin={UrlImg2} classEspecial={it2.horizontal} screenWidth={props.screenWidth} collapseImage={resto} />)
                    })
                    }
                </div>
              </Collapse>
            </div>
    </div>
  );
}

export default Example;
