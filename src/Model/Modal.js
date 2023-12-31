import { Fragment } from 'react';

import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = props => {
    return <div className={classes.backdrop} onClose={props.onClose}/>
};

const Overlay = props => {
    return (
        <div className={classes.modal}>
          <div className={classes.content}>{props.children}</div>
        </div>
      );
};

const portalElement = document.getElementById('layout');

const Modal = props => {
    return (<Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} /> ,portalElement)}
            {ReactDOM.createPortal(<Overlay>{props.children}</Overlay> ,portalElement)}
        </Fragment>);
};

export default Modal;