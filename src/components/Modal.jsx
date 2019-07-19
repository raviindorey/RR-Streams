import React from 'react';
import ReactDom from 'react-dom';
import history from '../history';

const Modal = () => ReactDom.createPortal(
  <div onClick={() => history.push('/')} className="ui dimmer modals visible active">
    <div onClick={e => e.stopPropagation()} className="ui standard modal visible active">
      <div className="header">
        Delete Stream
      </div>
      <div className="content">
        Are you sure you want to delete this stream?
      </div>
      <div className="actions">
        <button className="ui button primary" type="button">
          Delete
        </button>
        <button className="ui button" type="button">
          Cancel
        </button>
      </div>
    </div>
  </div>,
  document.querySelector('#modal'),
);

export default Modal;
