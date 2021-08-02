const tasksRepo = require('../tasks/task.memory.repository');

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
const getById = (id) => BOARDS.find((item) => item.id === id);

const create = (entity) => {
  BOARDS.push(entity);
  return entity;
};
const update = ({ id, title, columns }) => {
  if (id === undefined) {
    return undefined;
  }
  const updatedItem = getById(id);
  if (updatedItem === undefined) {
    return undefined;
  }
  updatedItem.title = title === undefined ? updatedItem.title : title;
  if (Array.isArray(columns)) {
    // shallow copy
    updatedItem.columns = [...columns];
  }
  return updatedItem;
};
/// ////
const remove = (id) => {
  const item = getById(id);
  const index = BOARDS.indexOf(item);
  if (index > -1) {
    BOARDS.splice(index, 1);
    tasksRepo.removeByAttr(id, 'boardId');
    return item;
  }
  return undefined;
};

module.exports = { getAll, getById, create, update, remove };
