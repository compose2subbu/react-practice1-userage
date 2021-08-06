import React from 'react';

const UserContext = React.createContext({
  users: [{
    name: 'Default User1',
    age: 10,
  },
  {
    name: 'Default User2',
    age: 11,
  }],
  addUser: () => {},
  removeUser: () => {},
});

export default UserContext;