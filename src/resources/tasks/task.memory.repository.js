const { v4: getId } = require('uuid');
const User = require('./task.model');

const DATABASE = [
  {
    id: '1',
    title: 'task 1',
    order: 0,
    description: 'task 1 version 1',
    userId: '1',
    boardId: '1',
    columnId: '1',
  },
  {
    id: '2',
    title: 'task 1',
    order: 0,
    description: 'task 1 version 2',
    userId: '1',
    boardId: '3',
    columnId: '1',
  },
  {
    id: '3',
    title: 'task 1',
    order: 0,
    description: 'task 1 version 3',
    userId: '2',
    boardId: '2',
    columnId: '2',
  },
];

const getAll = () => DATABASE;
/// ////////////////////////////////////////
const getById = (id) => {
  const user = DATABASE.find((item) => item.id === id);
  return user;
};
/// ////////////////////////////////////////
const create = (body) => {
  const params = { id: getId(), ...body };
  const user = new User(params);
  DATABASE.push(user);
  return user;
};

/// ////////////////////////////////////////
const update = ({ id, name, login, password }) => {
  if (id === undefined) {
    return undefined;
  }
  /// ////////////////////////////////////////
  const newUser = DATABASE.find((item) => item.id === id);
  if (newUser === undefined) {
    return undefined;
  }
  newUser.login = login === undefined ? newUser.login : login;
  newUser.name = name === undefined ? newUser.name : name;
  newUser.password = password === undefined ? newUser.password : password;
  return newUser;
};
/// ///////////////////////////////////////////////
const cutout = (id) => {
  const user = getById(id);
  const index = DATABASE.indexOf(user);
  if (index > -1) {
    DATABASE.splice(index, 1);
    return user;
  }
  return undefined;
};

// void
const cutoutByAttr = (value, attr) => {
  DATABASE.splice(
    DATABASE.findIndex((item) => item[attr] === value),
    1
  );
};

module.exports = { getAll, getById, create, update, cutout, cutoutByAttr };
