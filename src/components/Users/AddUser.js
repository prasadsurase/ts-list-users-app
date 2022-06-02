import React from "react";
import Card from "../UI/Card";
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = props => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return(
    <Card className={classes.input}>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>
        <label htmlFor="age">Age</label>
        <input id="age" type="number"></input>
        <Button buttonType="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;