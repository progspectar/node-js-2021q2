const USERS = [
  {
    id: '1',
    name: 'Tom',
    login: 'tom',
    password: '123',
  },
  { id: '2', name: 'John', login: 'john', password: '123' },
];

const getAll = async () => USERS;
const getById = async (id) => USERS.find((user) => user.id === id);
// TODO: mock implementation. should be replaced during task development

module.exports = { getAll, getById };
