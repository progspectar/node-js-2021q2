const Task = require('./task.model');

const DATABASE = [
  new Task({
    id: '1',
    title: 'task 1',
    order: 0,
    description: 'task 1 version 1',
    userId: '1',
    boardId: '1',
    columnId: '1',
  }),
  new Task({
    id: '2',
    title: 'task 1',
    order: 0,
    description: 'task 1 version 2',
    userId: '1',
    boardId: '3',
    columnId: '1',
  }),
  new Task({
    id: '3',
    title: 'task 1',
    order: 0,
    description: 'task 1 version 3',
    userId: '2',
    boardId: '2',
    columnId: '2',
  }),
  new Task({
    id: '4',
    title: 'task 2 board 1',
    order: 0,
    description: 'task 2 board 1',
    userId: '1',
    boardId: '1',
    columnId: '1',
  }),
];

module.exports = DATABASE;
