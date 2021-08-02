const { v4: getId } = require('uuid');

class Task {
  constructor({
    id = getId(),
    title = 'test title',
    order = 0,
    description = '',
    userId = null,
    boardId = null,
    columnId = null,
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(entity) {
    const { id, title, order, description, userId, boardId, columnId } = entity;
    return { id, title, order, description, userId, boardId, columnId };
  }

  static fromRequest(body) {
    return new Task(body);
  }
}

module.exports = Task;
