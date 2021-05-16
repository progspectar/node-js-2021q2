const router = require('express').Router({ mergeParams: true });
const tasksService = require('./task.service');

router
  .route('/')
  .get(async (req, res) => {
    const { boardId } = req.params;
    const result = await tasksService.getAll(boardId);
    res.status(result.status).json(result.ref);
  })
  .post(async (req, res) => {
    const { boardId } = req.params;
    const result = await tasksService.create(boardId, req.body);
    res.status(result.status).json(result.ref);
  });

router
  .route('/:taskId')
  .get(async (req, res) => {
    const { boardId, taskId } = req.params;
    const result = await tasksService.getById(boardId, taskId);
    res.status(result.status).json(result.ref);
  })
  .put(async (req, res) => {
    const { boardId, taskId } = req.params;
    const result = await tasksService.update(boardId, taskId, req.body);
    res.status(result.status).json(result.ref);
  })
  .delete(async (req, res) => {
    const { boardId, taskId } = req.params;
    const result = await tasksService.remove(boardId, taskId);
    res.status(result.status).json(result.ref);
  });

module.exports = router;
