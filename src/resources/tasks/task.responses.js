module.exports = {
  _getAll: {
    Ok: 200,
    UnauthorizedError: 401,
  },
  _create: {
    Ok: 201,
    BadRequest: 400,
    UnauthorizedError: 401,
  },

  _getById: {
    Ok: 200,
    NotFound: 404,
    UnauthorizedError: 401,
  },

  _update: {
    Ok: 200,
    BadRequest: 400,
    UnauthorizedError: 401,
    NotFound: 404,
  },

  _delete: {
    Ok: 204,
    UserNotFound: 404,
    UnauthorizedError: 401,
  },
};
