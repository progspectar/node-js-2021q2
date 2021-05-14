const router = require('express').Router({ mergeParams: true });
const tasksService = require('./task.service');

router
  .route('/')
  .get((req, res) => {
    const result = tasksService.getAll(res);
    res.status(result.status).json(result.ref);
  })
  .post((req, res) => {
    const result = tasksService.create(req.body);
    res.status(result.status).json(result.ref);
  });

router
  .route('/:taskId')
  .get((req, res) => {
    const { boardId, taskId } = req.params;
    const result = tasksService.getById(boardId, taskId);
    res.status(result.status).json(result.ref);
  })
  .put((req, res) => {
    const params = { id: req.params.id, ...req.body };
    const result = tasksService.update(params);
    res.status(result.status).json(result.ref);
  })
  .delete((req, res) => {
    const result = tasksService.deleteUser(req.params.id);
    res.status(result.status).json(result.ref);
  });

module.exports = router;
