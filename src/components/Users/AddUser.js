import React, { useState } from "react";
import Card from "../UI/Card";
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = props => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState(1);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if(username.trim().length === 0 || age.trim().length === 0) {
      return;
    }
    setUsername('')
    setAge(1);
  };

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  return(
    <Card className={classes.input}>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={username} onChange={usernameChangeHandler}/>
        <label htmlFor="age">Age</label>
        <input id="age" type="number" value={age} onChange={ageChangeHandler}/>
        <Button buttonType="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
