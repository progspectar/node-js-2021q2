class Board {
  constructor(params) {
    Object.assign(this, params);
  }

  static toResponse(board) {
    return board;
  }
}
module.exports = Board;
