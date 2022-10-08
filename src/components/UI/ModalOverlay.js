import React from "react";
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const ModalOverlay = props => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <div>{props.message}</div>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  )
};

export default ModalOverlay;