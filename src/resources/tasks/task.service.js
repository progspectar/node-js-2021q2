const tasksRepo = require('./task.memory.repository');
const Task = require('./task.model');
const tasksResp = require('./task.responses');

const getAll = (boardId) => {
  try {
    const items = tasksRepo.getAll(boardId);
    const ref = items.map(Task.toResponse);
    return { status: tasksResp._getAll.Ok, ref };
  } catch (error) {
    return {
      status: tasksResp._getAll.BadRequest,
      ref: '',
    };
  }
};

const create = (boardId, body) => {
  const entity = Task.fromRequest(body);
  entity.boardId = boardId;
  const item = tasksRepo.create(entity);
  const ref = Task.toResponse(item);
  return { status: tasksResp._create.Ok, ref };
};

const getById = (boardId, taskId) => {
  const task = tasksRepo.getById(boardId, taskId);
  if (task === undefined) {
    return { status: tasksResp._getById.NotFound, ref: '' };
  }
  return { status: tasksResp._getById.Ok, ref: Task.toResponse(task) };
};

const update = (boardId, taskId, body) => {
  const entity = Task.fromRequest(body);
  entity.boardId = boardId;
  entity.taskId = taskId;
  const task = tasksRepo.update(boardId, taskId, entity);
  if (task === undefined) {
    return { status: tasksResp._update.NotFound, ref: '' };
  }
  return { status: tasksResp._update.Ok, ref: Task.toResponse(task) };
};

const remove = (boardId, taskId) => {
  const task = tasksRepo.remove(boardId, taskId);
  if (task === undefined) {
    return { status: tasksResp._delete.UserNotFound, ref: '' };
  }
  return { status: tasksResp._delete.Ok, ref: Task.toResponse(task) };
};

module.exports = { getAll, create, getById, update, remove };
