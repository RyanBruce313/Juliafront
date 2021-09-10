import React, { Component } from 'react';
import './shop.css'
import { Col, Row } from 'react-bootstrap';
import ControlledCarousel from './CarruselShop/carruselShop';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            lsw:[]
         }   
    }
   
  componentDidMount(){
    fetch("https://juliamicelipitta.com/api/Shop.php")
      .then((resp) => resp.json())
      .then((resp) => {
        this.setState({lsw:resp});
      });
     
    }

    render() { 

        let col1 = this.state.lsw.filter((item) => item.column == 1 );
        let col2 = this.state.lsw.filter((item) => item.column == 2 );

        return (
          <>
          <div className="extraShop"></div>
            <Row className='p-0 m-0 RowShop'>
            
            
            <div className="IniShop"></div>
            <div className="backShop">&nbsp;</div>
            
                <Col sm={6} className=' p-0 m-0 colShop1'>
              { col1.map(item=> {
                return(
                  <ControlledCarousel
                  Titulo={item.title+', '+item.label}
                  Precio={item.amount}
                  Link={item.url}
                  imgs={item.imgurls}
                  cantidad={item.imgurls.length-1}
                  />
                   )

                })}

                </Col>
             
                <Col sm={6} className=' p-0 m-0 colShop2'>
             
                { col2.map(item2=> {
                return(
                  <ControlledCarousel
                  Titulo={item2.title+', '+item2.label}
                  Precio={item2.amount}
                  Link={item2.url}
                  imgs={item2.imgurls}
                  cantidad={item2.imgurls.length-1}
                  />
                   )

                })}

                </Col>
               
            </Row>
            </>
        );
    }
}
 
export default Shop;

