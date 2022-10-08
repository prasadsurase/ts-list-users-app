import React from "react";
import PortalReactDOM from 'react-dom';
import Backdrop from './Backdrop';
import ModalOverlay from "./ModalOverlay";


const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {PortalReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {PortalReactDOM.createPortal(
        <ModalOverlay onConfirm={props.onConfirm} title={props.title} message={props.message} />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default ErrorModal;