import React from 'react';
import "./Modal.css";

export const Modal = ({children,isOpen,closeModal}) => {

  const handleModalContainerClick = (e) => {
    e.stopPropagation();
  }  
  
  return (
    <article className= {`modal ${isOpen && "is-open"}`} onClick={closeModal}>
        <div className="modal-container" onClick={handleModalContainerClick}>
            <button onClick={closeModal}className="modal-close">X</button>
            {children}
        </div>
    </article>
  )
}
