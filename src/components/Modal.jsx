import React from 'react';
import ReactDom from 'react-dom';

const Modal = () => ReactDom.createPortal(
  <div className="ui dimmer modals visible active">
    <div className="ui standard modal visible active">
      Hello From Modal!!!
    </div>
  </div>,
  document.querySelector('#modal'),
);

export default Modal;
