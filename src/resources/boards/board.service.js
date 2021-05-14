const boardsRepo = require('./board.memory.repository');
const User = require('./board.model');
const BOARDS_RESPONSES = require('./board.responses');

const getAll = () => {
  try {
    const items = boardsRepo.getAll();

    const ref = User.toResponse(items);
    return { status: BOARDS_RESPONSES._getAll.Ok, ref };
  } catch (error) {
    return {
      status: BOARDS_RESPONSES._getAll.BadRequest,
      ref: '',
    };
  }
};

const create = (body) => {
  try {
    const item = boardsRepo.create(body);
    const ref = User.toResponse(item);

    return { status: BOARDS_RESPONSES._create.Ok, ref };
  } catch (error) {
    return {
      status: BOARDS_RESPONSES._create.BadRequest,
      ref: '',
    };
  }
};

const getById = (id) => {
  try {
    const item = boardsRepo.getById(id);
    if (item === undefined) {
      const result = {
        status: BOARDS_RESPONSES._getById.UserNotFound,
        ref: '',
      };
      return result;
    }
    return { status: BOARDS_RESPONSES._getById.Ok, ref: User.toResponse(item) };
  } catch (error) {
    return {
      status: BOARDS_RESPONSES._getById.BadRequest,
      ref: '',
    };
  }
};

const update = (params) => {
  const item = boardsRepo.update(params);
  if (item !== undefined) {
    return { status: BOARDS_RESPONSES._update.Ok, ref: User.toResponse(item) };
  }
  return {
    status: BOARDS_RESPONSES._create.BadRequest,
    ref: '',
  };
};

const cutout = (id) => {
  const item = boardsRepo.cutout(id);
  if (item !== undefined) {
    return { status: BOARDS_RESPONSES._delete.Ok, ref: User.toResponse(item) };
  }
  return { status: BOARDS_RESPONSES._delete.UserNotFound, ref: '' };
};

module.exports = { getAll, create, getById, update, cutout };
