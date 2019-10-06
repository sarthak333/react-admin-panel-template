import React, { Component } from 'react';
import './modal.scss'

const Modal = (props) => {
  return (
    <div className="container modal-container">
      {props.children}
    </div>
  )
}

export default React.memo(Modal);