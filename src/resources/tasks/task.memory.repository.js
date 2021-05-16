const TASKS = require('./task.database');
/// ////////////////////////////////////////
const getAll = (boardId) => TASKS.filter((item) => item.boardId === boardId);
/// ////////////////////////////////////////
const getById = (boardId, taskId) => {
  const tasks = TASKS.find(
    (item) => item.boardId === boardId && item.id === taskId
  );
  return tasks;
};
/// ////////////////////////////////////////
const create = (task) => {
  TASKS.push(task);
  return task;
};
/// ////////////////////////////////////////
const update = (boardId, taskId, entity) => {
  let task = getById(boardId, taskId);
  if (task === undefined) return task;
  task = { ...task, ...entity };
  return task;
};
/// ///////////////////////////////////////////////
const remove = (boardId, taskId) => {
  const task = getById(boardId, taskId);
  const index = TASKS.indexOf(task);
  if (index > -1) {
    TASKS.splice(index, 1);
  }
  return task;
};

// void
const removeByAttr = (value, attr) => {
  for (let i = TASKS.length - 1; i >= 0; i -= 1) {
    if (TASKS[i][attr] === value) {
      TASKS.splice(i, 1);
    }
  }
};

const setValueByAttr = (value, attr, newValue) => {
  for (let i = TASKS.length - 1; i >= 0; i -= 1) {
    if (TASKS[i][attr] === value) {
      TASKS[i][attr] = newValue;
    }
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  removeByAttr,
  setValueByAttr,
};
