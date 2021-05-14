const boardsRepo = require('./board.memory.repository');
const User = require('./board.model');
const boadsResp = require('./board.responses');

const getAll = () => {
  try {
    const items = boardsRepo.getAll();

    const ref = User.toResponse(items);
    return { status: boadsResp._getAll.Ok, ref };
  } catch (error) {
    return {
      status: boadsResp._getAll.BadRequest,
      ref: '',
    };
  }
};

const create = (body) => {
  try {
    const item = boardsRepo.create(body);
    const ref = User.toResponse(item);

    return { status: boadsResp._create.Ok, ref };
  } catch (error) {
    return {
      status: boadsResp._create.BadRequest,
      ref: '',
    };
  }
};

const getById = (id) => {
  try {
    const item = boardsRepo.getById(id);
    if (item === undefined) {
      const result = { status: boadsResp._getById.UserNotFound, ref: '' };
      return result;
    }
    return { status: boadsResp._getById.Ok, ref: User.toResponse(item) };
  } catch (error) {
    return {
      status: boadsResp._getById.BadRequest,
      ref: '',
    };
  }
};

const update = (params) => {
  const item = boardsRepo.update(params);
  if (item !== undefined) {
    return { status: boadsResp._update.Ok, ref: User.toResponse(item) };
  }
  return {
    status: boadsResp._create.BadRequest,
    ref: '',
  };
};

const deleteUser = (id) => {
  const item = boardsRepo.deleteUser(id);
  if (item !== undefined) {
    return { status: boadsResp._delete.Ok, ref: User.toResponse(item) };
  }
  return { status: boadsResp._delete.UserNotFound, ref: '' };
};

module.exports = { getAll, create, getById, update, deleteUser };
