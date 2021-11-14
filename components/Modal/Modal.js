import React from 'react'
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '0px'
    },
  };

export default function CustomModal({open,onClose,children}) {
    return (
        <Modal
            isOpen={open}
            onRequestClose={onClose}
            style={customStyles}
           >
            <div className="custom-modal">
               <div className="custom-modal-header">
                 <h5>Action</h5>
                 <span >
                   <i className="fas fa-times"  onClick={onClose} style={{cursor:'pointer'}}></i>
                 </span>
               </div>
               <div className="custom-modal-body">
                   <div className="container">
                      {children}
                   </div>
               </div>
            </div>
        </Modal>
    )
}
