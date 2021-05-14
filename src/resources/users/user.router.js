const router = require('express').Router();

const usersService = require('./user.service');

router
  .route('/')
  .get((req, res) => {
    const result = usersService.getAll(res);
    res.status(result.status).json(result.ref);
  })
  .post((req, res) => {
    const result = usersService.create(req.body);
    res.status(result.status).json(result.ref);
  });

router
  .route('/:id')
  .get((req, res) => {
    const result = usersService.getById(req.params.id);
    res.status(result.status).json(result.ref);
  })
  .put((req, res) => {
    const params = { id: req.params.id, ...req.body };
    const result = usersService.update(params);
    res.status(result.status).json(result.ref);
  })
  .delete((req, res) => {
    const result = usersService.deleteUser(req.params.id);
    res.status(result.status).json(result.ref);
  });

module.exports = router;
