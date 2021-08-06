import React, { useContext } from 'react';
import AddUser from './components/Users/AddUser';
import UserItem from './components/Users/UserItem';
import UserContext from './store/UserContext';
import Card from './components/UI/Card';

function App() {
  const userCtx = useContext(UserContext);
  console.log(userCtx);
  //console.log(userCtx.users);
  //const name = userCtx.users.map(user => user.name);
  //console.log(name);
  const userList = userCtx.users.map(user => <UserItem key={user.name} name={user.name} age={user.age}></UserItem>)
  return (
    <UserContext.Provider value={{users: []}}>
      <AddUser />
      <Card>
      {userList}
      </Card>
    </UserContext.Provider>
  );
}

export default App;
