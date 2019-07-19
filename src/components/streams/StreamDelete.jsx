import React from 'react';
import Modal from '../Modal.jsx';

const StreamDelete = () => {
  const actions = (
    <>
      <button className="ui button negative" type="button">Delete</button>
      <button className="ui button" type="button">Cancel</button>
    </>
  );
  return (
    <div>
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
      />
    </div>
  );
};

export default StreamDelete;
