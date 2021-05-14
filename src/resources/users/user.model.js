class User {
  constructor(params) {
    Object.assign(this, params);
  }

  static toResponse(user) {
    if (!Array.isArray(user)) {
      const { id, name, login } = user;
      return { id, name, login };
    }
    return user;
  }
}
module.exports = User;
