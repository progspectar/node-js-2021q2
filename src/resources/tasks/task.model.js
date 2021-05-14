class Task {
  constructor(params) {
    Object.assign(this, params);
  }

  static toResponse(entity) {
    return entity;
  }
}
module.exports = Task;
