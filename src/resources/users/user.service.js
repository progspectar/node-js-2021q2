const usersRepo = require('./user.memory.repository');
const User = require('./user.model');
const USERS_RESPONSES = require('./user.responses');
//
const getAll = () => {
  try {
    const users = usersRepo.getAll();
    const ref = users.map((item) => User.toResponse(item));
    return { status: USERS_RESPONSES._getAll.Ok, ref };
  } catch (error) {
    return {
      status: USERS_RESPONSES._getAll.BadRequest,
      ref: '',
    };
  }
};

const create = (body) => {
  try {
    const user = usersRepo.create(body);
    const ref = User.toResponse(user);
    return { status: USERS_RESPONSES._create.Ok, ref };
  } catch (error) {
    return {
      status: USERS_RESPONSES._create.BadRequest,
      ref: '',
    };
  }
};

const getById = (id) => {
  try {
    const user = usersRepo.getById(id);
    if (user === undefined) {
      return { status: USERS_RESPONSES._getById.UserNotFound, ref: '' };
    }
    return { status: USERS_RESPONSES._getById.Ok, ref: User.toResponse(user) };
  } catch (error) {
    return {
      status: USERS_RESPONSES._getById.BadRequest,
      ref: '',
    };
  }
};

const update = (params) => {
  const user = usersRepo.update(params);
  if (user !== undefined) {
    return { status: USERS_RESPONSES._update.Ok, ref: User.toResponse(user) };
  }
  return {
    status: USERS_RESPONSES._create.BadRequest,
    ref: '',
  };
};

const deleteUser = (id) => {
  const user = usersRepo.deleteUser(id);
  if (user !== undefined) {
    return { status: USERS_RESPONSES._delete.Ok, ref: User.toResponse(user) };
  }
  return { status: USERS_RESPONSES._delete.UserNotFound, ref: '' };
};

module.exports = { getAll, create, getById, update, deleteUser };
