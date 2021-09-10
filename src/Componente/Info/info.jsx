import React, { Component } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import './info.css'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
class Info extends Component {

    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 

        const screenWidthInfo = (window.screen.width>700) ? true : false; 
        //console.log('pantalla:'+screenWidthInfo);

        let img1 = require('./IMG/AwardsPublications01.jpg'); 
        let img2 = require('./IMG/AwardsPublications02.jpg'); 
        let img3 = require('./IMG/AwardsPublications03.jpg'); 
        let img4 = require('./IMG/AwardsPublications04.jpg'); 
        let img5 = require('./IMG/AwardsPublications05.jpg'); 
        let img6 = require('./IMG/AwardsPublications06.jpg'); 
        let img7 = require('./IMG/AwardsPublications07.jpg'); 
        let img8 = require('./IMG/AwardsPublications08.jpg'); 
        let img9 = require('./IMG/AwardsPublications09.jpg'); 
        let imgFlecha = require('../imgEstilo/signoflecha.png'); 

        return (
        <>

        <a  className="botonF1">
        <Image className='imgInfo' src={imgFlecha.default}  onClick={this.scrollToTop}/>
        </a>

        <Row className='p-0 m-0 info'>
           
            <Col sm={6} className={(screenWidthInfo) ? 'p-0 m-0 scroll': 'p-0 m-0'} >
            <div className="menu2"></div>
                <Row  className='p-0 m-0 rowInfo sticky-top1'>
                    <Col className='p-0 m-0 colInfo margenInfo'>
                    <label  className=' labelInfo introJulia'>
                        <span className='sayAny'>Say Hi anytime,&nbsp;</span>
                        <span className='sayAny2'>Say Hi anytime! </span>
                         I’m always open for new work collaborations,
                        joining teams and freelance work: <label className='subrayado subrayado2'>hello@juliamicelipitta.com</label> <br/>
                        Web: <a target="_blank" className='subrayado subrayado2' href="https://www.instagram.com/_micelijulia/"> Instagram</a>, <a target="_blank" className='subrayado subrayado2' href="https://www.behance.net/juliamiceli?tracking_source=search_users_recommended%7Cjulia%20miceli%20pitta">Behance</a>, <a target="_blank" href="https://www.linkedin.com/in/julia-miceli-pitta-571260a5/" className='subrayado subrayado2'>Linkedin</a>
                    </label>    

                        <Image className='imgInfoRes ' src={img1.default}/>

                   
                    <label className=' labelInfo'>
                        Julia Miceli Pitta is an Argentine graphic designer based
                        between Buenos Aires and London. Her practice is always under
                        construction. It sits in between conceptual thinking and exploration, 
                        with an unorthodox flavour. She specializes in visual identity,
                        editorial design and creative direction.
                    </label>

                    <label className=' labelInfo'>
                        She studied at the University of Buenos Aires, where she also
                        taught Design as a teaching professor. Her aim is to encourage
                        students to think critically, develop their own voice and experiment fearlessly.
                    </label>

                    <label className=' labelInfo'>
                        Her practice is not attached to any particular style. She thinks
                        each project as an adventure that opens a question, without
                        recurring to any well-worn paths to diminish risks. Indeed, she
                        embraces the possibility to break down the boundaries of
                        graphic design and build an original language, questioning
                        things instead of being certain of them. Working primarily for
                        clients in the world of culture, she understands her exercise as a
                        design laboratory. For her, to learn and understand rules is
                        essential, but daring to break them is equally important.
                    </label>

                    <label className=' labelInfo'>
                        In 2018, when she was working as a lead designer at ORO
                        Publishers, she traveled to the foremost printing industry in
                        China (Artron Art Center) in order to be in charge of the printing
                        production of several projects (Prepress/Press/Postpress).
                    </label>

                    <label className=' labelInfo'>
                        Her work has been recognized all over the world. She had the
                        honor of being part of multiple exhibitions, publications and
                        contests. Moreover, in 2019 Julia won first place in two different
                        categories in The Biennale of Design in Argentina and in 2021
                        she was selected to participate in the “XIIIth Florence Biennale”
                        in Florence with diverse projects.
                    </label>

                    <h3 className='h3'>Selected Clients</h3>

                    <label className=' labelInfo'>

                        <label className='subrayado'>ORO Publishers</label> (Book Publisher),&nbsp;
                        <label className='subrayado'>REMY Architects</label> (Architectural Studio),&nbsp;
                        <label className='subrayado'>ZHdK</label> (University),&nbsp;
                        <label className='subrayado'>Artron Art Center</label> (Art Center),&nbsp;
                        <label className='subrayado'>Estudio Ramos</label> (Architectural Studio),&nbsp; 
                        <label className='subrayado'>Betina Gonzalez</label> (Writer),&nbsp; 
                        <label className='subrayado'>Emilia Naistat</label> (Visual Artist),&nbsp;
                        <label className='subrayado'>Phaidon</label> (Book Publisher),&nbsp;
                        <label className='subrayado'>Rizzoli New York</label> (Book Publisher),&nbsp;
                        <label className='subrayado'>Mariana Bendersky</label> (Architect),&nbsp;
                        <label className='subrayado'>Alberto Campo Baeza</label> (Architectural Studio),&nbsp;
                        <label className='subrayado'>Luc Scholen</label> (Writer & Photographer).

                    </label>

                    <h3 className='h3'>Services</h3>

                    <Row className='p-0 m-0 labelInfo'>
                        <Col className='p-0 m-0 '>
                              <div>+ Creative Direction</div>
                              <div>+ Art Direction</div>
                              <div>+ Visual Identity</div>
                              <div>+ Editorial Design</div>
                        </Col>
                        <Col className='p-0 m-0 '>
                              <div>+ Illustration</div>
                              <div>+ Web Design</div>
                              <div>+ Animation</div>
                              <div>+ Posters/Prints</div>
                        </Col>
                        <Col className='p-0 m-0 ml-2 '>
                              <div>+ Type Design</div>
                              <div>+ Singage</div>
                              <div>+ Photography</div>
                              <div>+ Installation</div>
                        </Col>
                    </Row>
                    
                    </Col>

                    <Col className='p-0 m-0 colInfo margenInfo'>

                    <h3 className='h3'>Honors & Awards</h3>

                    <div className='des'>— Selected to participate: Ladies, Wine & Design / Host: Jessica
                            Walsh, NYC, United States (Apr 2020)</div>
                    <div className='des'>— Contest winner: "Graphic Illustration" 4th Biennale of Design,
                            Buenos Aires, Argentina (Aug 2019)</div>
                    <div  className=' labelInfo'>— Contest winner: "Institutional Identity" 4th Biennale of Design,
                            Buenos Aires, Argentina (Aug 2019)</div>

                    <h3 className='h3'>Selected Publications</h3>        

                    <h6 className='subrayado des'>Press Publications</h6>        

                    <div className='des'>— Grid System in Different Media: Preface Author (700 words),
                        HIGHTONE Publishing company (Feb 2020)</div>
                    <div className='des'>— Grid System in Different Media: Project Publication,
                        HIGHTONE Publishing company (Feb 2020)</div>
                    <div className='des'>— The Argentine Biennale Catalogue: Project Publication,
                        4th Biennale of Design (Jul 2019)</div>
                    <div className='des'>— LAYOUT NOW The proportion: Project Publication,
                        SendPoints Publishing Co., Ltd (Feb 2018)</div>
                    <div className='des'>— Code of Color: Branding & Identity: Project Publication,
                        Sandu Publishing (Jan 2016)</div>
                    <div  className=' labelInfo'>— Stand Out: Design a Personal Brand: Project Publication,
                        Denise Anderson (Jan 2016)</div>

                    <h6 className='subrayado des'>Web Publications</h6>  

                    <div className='des'>— Lovably: Project Publication (Apr 2021)</div>
                    <div className='des'>— Stefan Sagmeister: Project Publication (Aug 2020)</div>
                    <div className='des'>— Femme Type: Project Publication (Jun 2020)</div>
                    <div className='des'>— 13 of the best creative resumés: Creative Bloq (Oct 2019)</div>
                    <div className='des'>— ProactiveCreative: Project Publication (Mar 2019)</div>
                    <div className='des' className=' labelInfo'>— 10 of the best creative cvs: Primary Technologies (2018)</div>

                    <h3 className='h3'>Selected Exhibitions</h3> 

                    <div className='des'>— XIIIth Florence Biennale 2021, Communication & Graphic
                            Design, Florence, Italy (Oct 2021)</div>
                    <div className='des'>— Object Book Festival: Book Collection, Milan, Italy (Dec 2020)</div>
                    <div className='des'>— BID Madrid: DOXA Film Festival, Madrid, Spain (Nov 2019)</div>
                    <div className='des'>— International UBA Poster Festival: The Mud Boy, Buenos
                            Aires, Argentina (Aug 2019)</div>
                    <div className='des'>— Centro Cultural Recoleta (CCR): The Mud Boy Book, Buenos
                            Aires, Argentina (Nov 2018)</div>
                    <div className='des'>— Trimarchi (TMDG): Experimental Posters, Buenos Aires,
                            Argentina (Nov 2018)</div>
                    <div className='des'>— EUDEBA Publishing, 60 Years / 1958-2018: Social Poster,
                            Buenos Aires, Argentina (Sep 2018)</div>
                    <div className='des'>— Fragments: Typography Deconstructed, POCKO Gallery:
                            Experimental Poster, London, England (Aug 2016)</div>
                    
                    <div  className="footeInfo  ">
                    <div className=' labelInfo2'>
                        All rights reserved - Copyright © 2021 Julia Miceli Pitta
                        </div>
                        <div className=' labelInfo2'>
                        Full CV available upon request.
                        </div>
                        <br/>
                    </div>
                    </Col> 
                
                 <Row className='m-0 p-0 w-100 h-100 '> 
                    <Col  sm={6} className='m-0 p-0 colInfo '> 
                    <label className=' labelInfo notShow'>
                    {(screenWidthInfo) && 'All rights reserved - Copyright © 2021 Julia Miceli Pitta'}
                    </label>
                    </Col>

                    <Col  sm={6} className='m-0 p-0 colInfo notShow'>
                    <label className=' labelInfo notShow'>
                    {(screenWidthInfo) ?  'Full CV available upon request.' : '<br/> '}
                    </label>
                    </Col>
                </Row>
                
                </Row>
             
            </Col>

            <Col sm={6} className='p-0 m-0 scroll1'>
                <Image className='imgInfo1 ' src={img1.default}/>
                <Image className='imgInfo' src={img2.default}/>
                <Image className='imgInfo' src={img3.default}  />
                <Image className='imgInfo' src={img4.default}/>
                <Image className='imgInfo' src={img6.default}/>
                <Image className='imgInfo' src={img5.default}/>  
                <Image className='imgInfo' src={img8.default}/>
                <Image className='imgInfo' src={img9.default}/>
                <Image className='imgInfo' src={img7.default}/>
            </Col>
        </Row> 
        
        </>);
    }
}
 
export default Info;