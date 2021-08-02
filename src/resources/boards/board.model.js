const { v4: getId } = require('uuid');

class Board {
  constructor(params) {
    this.id = getId();
    Object.assign(this, params);
    if (!this.id) {
      this.id = getId();
    }
  }

  static toResponse(board) {
    return board;
  }
}
module.exports = Board;
