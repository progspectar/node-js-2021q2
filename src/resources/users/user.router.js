const router = require('express').Router();

const usersService = require('./user.service');

router
  .route('/')
  .get(async (req, res) => {
    const result = await usersService.getAll(res);
    res.status(result.status).json(result.ref);
  })
  .post(async (req, res) => {
    const result = await usersService.create(req.body);
    res.status(result.status).json(result.ref);
  });

router
  .route('/:id')
  .get(async (req, res) => {
    const result = await usersService.getById(req.params.id);
    res.status(result.status).json(result.ref);
  })
  .put(async (req, res) => {
    const params = { id: req.params.id, ...req.body };
    const result = await usersService.update(params);
    res.status(result.status).json(result.ref);
  })
  .delete(async (req, res) => {
    const result = await usersService.deleteUser(req.params.id);
    res.status(result.status).json(result.ref);
  });

module.exports = router;
