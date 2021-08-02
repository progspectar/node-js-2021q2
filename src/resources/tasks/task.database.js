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
];

module.exports = DATABASE;
