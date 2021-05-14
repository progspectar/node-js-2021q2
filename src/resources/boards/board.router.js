const router = require('express').Router();
const boardsService = require('./board.service');

router
  .route('/')
  .get((req, res) => {
    const result = boardsService.getAll(res);
    res.status(result.status).json(result.ref);
  })
  .post((req, res) => {
    const result = boardsService.create(req.body);
    res.status(result.status).json(result.ref);
  });

router
  .route('/:id')
  .get((req, res) => {
    const result = boardsService.getById(req.params.id);
    res.status(result.status).json(result.ref);
  })
  .put((req, res) => {
    const params = { id: req.params.id, ...req.body };
    const result = boardsService.update(params);
    res.status(result.status).json(result.ref);
  })
  .delete((req, res) => {
    const result = boardsService.deleteUser(req.params.id);
    res.status(result.status).json(result.ref);
  });

module.exports = router;
