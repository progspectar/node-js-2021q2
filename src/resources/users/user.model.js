const { v4: getId } = require('uuid');

class User {
  constructor(params) {
    Object.assign(this, params);
    if (!this.id) {
      this.id = getId();
    }
  }

  // transforms entity to response
  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
module.exports = User;
