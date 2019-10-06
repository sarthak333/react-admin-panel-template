import React, { useState } from 'react';
import './bannerModal.scss'
import Modal from './../../components/modal/Modal'

const BannerModal = (props) => {


  return (
    <div className="container" style={{ width: "75vw" }}>
      <div className="row full-page-height">
        <div className="col-12 center full-height">
          <Modal>
            {props.children}
          </Modal>
        </div>
      </div>
    </div>
  )
}


export default BannerModal;