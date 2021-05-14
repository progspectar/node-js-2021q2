const { v4: getId } = require('uuid');
const User = require('./board.model');

const BOARDS = [
  {
    id: '1',
    title: 'solve task 1',
    columns: [
      { id: '1', title: 'co1', order: 'order1' },
      { id: '2', title: 'col2', order: 'order2' },
    ],
  },
];

const getAll = () => BOARDS;
const getById = (id) => {
  const user = BOARDS.find((item) => item.id === id);
  return user;
};
/// ////////////////////////////////////////
const create = (body) => {
  const params = { id: getId(), ...body };
  const user = new User(params);
  BOARDS.push(user);
  return user;
};

/// ////////////////////////////////////////
const update = ({ id, name, login, password }) => {
  if (id === undefined) {
    return undefined;
  }

  const newUser = BOARDS.find((item) => item.id === id);
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
  const index = BOARDS.indexOf(user);
  if (index > -1) {
    BOARDS.splice(index, 1);
    return user;
  }
  return undefined;
};

module.exports = { getAll, getById, create, update, deleteUser };
