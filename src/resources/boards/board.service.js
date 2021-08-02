const boardsRepo = require('./board.memory.repository');
const Board = require('./board.model');
const BOARDS_RESPONSES = require('./board.responses');

const getAll = () => {
  const items = boardsRepo.getAll();
  const ref = Board.toResponse(items);
  return { status: BOARDS_RESPONSES._getAll.Ok, ref };
};

const create = (title, columnsParam) => {
  if (!title) {
    return {
      status: BOARDS_RESPONSES._create.BadRequest,
      ref: 'title is empty',
    };
  }
  if (!columnsParam) {
    return {
      status: BOARDS_RESPONSES._create.BadRequest,
      ref: 'columns is empty',
    };
  }

  if (!Array.isArray(columnsParam)) {
    return {
      status: BOARDS_RESPONSES._create.BadRequest,
      ref: 'columns is not array',
    };
  }
  const columns = columnsParam.map((item) => ({
    title: item.title,
    order: item.order,
  }));

  const board = new Board({
    title,
    columns,
  });
  const item = boardsRepo.create(board);
  return item === undefined
    ? { status: BOARDS_RESPONSES._create.BadRequest, ref: '' }
    : { status: BOARDS_RESPONSES._create.Ok, ref: Board.toResponse(item) };
};

const getById = (id) => {
  const board = boardsRepo.getById(id);
  return board === undefined
    ? { status: BOARDS_RESPONSES._getById.UserNotFound, ref: '' }
    : { status: BOARDS_RESPONSES._getById.Ok, ref: Board.toResponse(board) };
};

const update = (params) => {
  const item = boardsRepo.update(params);
  if (item !== undefined) {
    return { status: BOARDS_RESPONSES._update.Ok, ref: Board.toResponse(item) };
  }
  return {
    status: BOARDS_RESPONSES._create.BadRequest,
    ref: '',
  };
};

const remove = (id) => {
  const board = boardsRepo.remove(id);
  // The board has been deleted
  return board === undefined
    ? { status: BOARDS_RESPONSES._delete.BoardNotFound, ref: 'Board not found' }
    : { status: BOARDS_RESPONSES._delete.Ok, ref: Board.toResponse(board) };
};

module.exports = { getAll, create, getById, update, remove };
