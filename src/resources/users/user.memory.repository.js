const { v4: getId } = require('uuid');
const User = require('./user.model');

const USERS = [
  {
    id: '1',
    name: 'Tom',
    login: 'tom',
    password: '123',
  },
  { id: '2', name: 'John', login: 'john', password: '123' },
];

const getAll = () => USERS;
const getById = (id) => {
  const user = USERS.find((item) => item.id === id);
  return user;
};
/// ////////////////////////////////////////
const create = (body) => {
  const params = { id: getId(), ...body };
  const user = new User(params);
  USERS.push(user);
  return user;
};

/// ////////////////////////////////////////
const update = ({ id, name, login, password }) => {
  if (id === undefined) {
    return undefined;
  }

  const newUser = USERS.find((item) => item.id === id);
  if (newUser === undefined) {
    return undefined;
  }
  newUser.login = login === undefined ? newUser.login : login;
  newUser.name = name === undefined ? newUser.name : name;
  newUser.password = password === undefined ? newUser.password : password;
  return newUser;
};
/// ///////////////////////////////////////////////
const deleteUser = (id) => {
  const user = getById(id);
  const index = USERS.indexOf(user);
  if (index > -1) {
    USERS.splice(index, 1);
    return user;
  }
  return undefined;
};

module.exports = { getAll, getById, create, update, deleteUser };
