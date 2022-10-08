import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUser = (username, age) => {
    setUsersList([...usersList, {id: Math.random().toString(), name: username, age: age} ]);
  };

  return (
    <React.Fragment>
      <AddUser addUser={addUser}/>
      <UsersList users={usersList}/>
    </React.Fragment>
  );
}

export default App;
