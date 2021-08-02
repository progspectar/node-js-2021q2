const tasksRepo = require('../tasks/task.memory.repository');

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
const create = (entity) => {
  USERS.push(entity);
  return entity;
};

/// ////////////////////////////////////////
const update = ({ id, name, login, password }) => {
  if (id === undefined) {
    return undefined;
  }

  const updatedItem = USERS.find((item) => item.id === id);
  if (updatedItem === undefined) {
    return undefined;
  }
  updatedItem.login = login === undefined ? updatedItem.login : login;
  updatedItem.name = name === undefined ? updatedItem.name : name;
  updatedItem.password =
    password === undefined ? updatedItem.password : password;
  return updatedItem;
};
/// ///////////////////////////////////////////////
const deleteUser = (id) => {
  const user = getById(id);
  const index = USERS.indexOf(user);
  if (index > -1) {
    USERS.splice(index, 1);
    tasksRepo.setValueByAttr(id, 'userId', null);
    return user;
  }
  return undefined;
};

module.exports = { getAll, getById, create, update, deleteUser };
