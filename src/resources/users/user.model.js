class User {
  constructor(params) {
    Object.assign(this, params);
  }

  // transforms entity to response
  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
module.exports = User;
