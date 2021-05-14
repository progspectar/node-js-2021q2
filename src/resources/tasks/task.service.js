const tasksRepo = require('./task.memory.repository');
const User = require('./task.model');
const tasksResp = require('./task.responses');

const getAll = () => {
  try {
    const items = tasksRepo.getAll();
    const ref = User.toResponse(items);
    return { status: tasksResp._getAll.Ok, ref };
  } catch (error) {
    return {
      status: tasksResp._getAll.BadRequest,
      ref: '',
    };
  }
};

const create = (body) => {
  try {
    const item = tasksRepo.create(body);
    const ref = User.toResponse(item);

    return { status: tasksResp._create.Ok, ref };
  } catch (error) {
    return {
      status: tasksResp._create.BadRequest,
      ref: '',
    };
  }
};

const getById = (id) => {
  try {
    const item = tasksRepo.getById(id);
    if (item === undefined) {
      const result = { status: tasksResp._getById.UserNotFound, ref: '' };
      return result;
    }
    return { status: tasksResp._getById.Ok, ref: User.toResponse(item) };
  } catch (error) {
    return {
      status: tasksResp._getById.BadRequest,
      ref: '',
    };
  }
};

const update = (params) => {
  const item = tasksRepo.update(params);
  if (item !== undefined) {
    return { status: tasksResp._update.Ok, ref: User.toResponse(item) };
  }
  return {
    status: tasksResp._create.BadRequest,
    ref: '',
  };
};

const cutout = (id) => {
  const item = tasksRepo.cutout(id);
  if (item !== undefined) {
    return { status: tasksResp._delete.Ok, ref: User.toResponse(item) };
  }
  return { status: tasksResp._delete.UserNotFound, ref: '' };
};

module.exports = { getAll, create, getById, update, cutout };
