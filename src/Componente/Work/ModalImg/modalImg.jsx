import React, { useState } from 'react'
import {Button, Image, Modal} from 'react-bootstrap';
import ReactModal  from 'react-modal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
//import 'react-lazy-load-image-component/src/effects/blur.css';

import './modal.css'

function ModalImg(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //const [modalIsOpen, setIsOpen] = React.useState(false);

    let classEspecial = 'lazyImg';
    let workImg = 'workImg';
    let modal = 'modalImg';
    let modalEsp = '';
    let claseFinal = '';

    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
       
      },
    };

    // function openModal() {
    //   setIsOpen(true);
    // }
  
    // function afterOpenModal() {
    //   // references are now sync'd and can be accessed.
    //   //subtitle.style.color = '#f00';
    // }
  
    // function closeModal() {
    //   setIsOpen(false);
    // }


    if(props.classEspecial==1) {
      classEspecial = 'lazyImgEsp';
      workImg = 'workImgEsp';
      modal = 'modal-dialog2';
      modalEsp = 'modal-especial';
    } 
   
    if(props.collapseImage) {
      claseFinal = ' claseFinal';
    }

    return (
      <>
          <LazyLoadImage
              wrapperClassName={workImg + claseFinal}
              className={classEspecial}
              src={props.imgPrin} // use normal <img> attributes as props
              onClick={handleShow}
              effect="blur"
           />

          {/* <LazyLoadImage
              wrapperClassName={workImg + claseFinal}
              className={classEspecial}
              src={props.imgPrin} // use normal <img> attributes as props
              onClick={openModal}
              effect="blur"
           /> */}
        

        {/* <ReactModal 
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        
        className="ReactModal"
        overlayClassName="Overlay"
        contentLabel="Example Modal"
      >
           <Image src={props.imgPrin} onClick={closeModal} className='lightboximg'/>
         
      </ReactModal> */}

        {(props.screenWidth>700) &&

        <Modal show={show} onHide={handleClose} animation={false} onClick={handleClose}>
          
            { (props.classEspecial==1) ?
              <Image src={props.imgPrin} onClick={handleClose} className={modal}/>
            : 
            <Image src={props.imgPrin} onClick={handleClose} className='modal-img'/>
            }
        </Modal>

        }
      </>
    );
  }
  
  export default ModalImg;