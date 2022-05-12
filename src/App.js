import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
function App() {
  const [User, setUser] = useState([]);
  const userInfo = (names, ages) => {
    setUser((prevUser) => {
      return [...prevUser, { id: Math.random(), name: names, age: ages }];
    });
  };
  console.log(User);
  return (
    <div>
      <AddUser addUser={userInfo} />
      <UserList users={User} />
    </div>
  );
}

export default App;
