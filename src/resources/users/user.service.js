const usersRepo = require('./user.memory.repository');
const User = require('./user.model');
const usersResp = require('./user.responses');
//
const getAll = () => {
  try {
    const users = usersRepo.getAll();
    const ref = User.toResponse(users);
    return { status: usersResp._getAll.Ok, ref };
  } catch (error) {
    return {
      status: usersResp._getAll.BadRequest,
      ref: '',
    };
  }
};

const create = (body) => {
  try {
    const user = usersRepo.create(body);
    const ref = User.toResponse(user);

    return { status: usersResp._create.Ok, ref };
  } catch (error) {
    return {
      status: usersResp._create.BadRequest,
      ref: '',
    };
  }
};

const getById = (id) => {
  try {
    const user = usersRepo.getById(id);
    if (user === undefined) {
      return { status: usersResp._getById.UserNotFound, ref: '' };
    }
    return { status: usersResp._getById.Ok, ref: User.toResponse(user) };
  } catch (error) {
    return {
      status: usersResp._getById.BadRequest,
      ref: '',
    };
  }
};

const update = (params) => {
  const user = usersRepo.update(params);
  if (user !== undefined) {
    return { status: usersResp._update.Ok, ref: User.toResponse(user) };
  }
  return {
    status: usersResp._create.BadRequest,
    ref: '',
  };
};

const deleteUser = (id) => {
  const user = usersRepo.deleteUser(id);
  if (user !== undefined) {
    return { status: usersResp._delete.Ok, ref: User.toResponse(user) };
  }
  return { status: usersResp._delete.UserNotFound, ref: '' };
};

module.exports = { getAll, create, getById, update, deleteUser };
