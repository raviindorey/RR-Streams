import React from 'react';
import ReactDom from 'react-dom';
import history from '../history';

const Modal = props => ReactDom.createPortal(
  <div
    onClick={() => history.push('/')}
    className="ui dimmer modals visible active"
    role="presentation"
    onKeyPress={() => {}}
  >
    <div
      onClick={e => e.stopPropagation()}
      className="ui standard modal visible active"
      role="presentation"
      onKeyPress={() => {}}
    >
      <div className="header">
        {props.title}
      </div>
      <div className="content">
        {props.content}
      </div>
      <div className="actions">
        {props.actions}
      </div>
    </div>
  </div>,
  document.querySelector('#modal'),
);

export default Modal;
