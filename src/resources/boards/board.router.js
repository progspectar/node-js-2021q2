const router = require('express').Router();
const boardsService = require('./board.service');

router
  .route('/')
  .get(async (req, res) => {
    const result = await boardsService.getAll(res);
    res.status(result.status).json(result.ref);
  })
  .post(async (req, res, next) => {
    try {
      const { title, columns } = req.body;
      const result = await boardsService.create(title, columns);
      return res.status(result.status).json(result.ref);
    } catch (error) {
      return next(error);
    }
  });

router
  .route('/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    const result = await boardsService.getById(id);
    res.status(result.status).json(result.ref);
  })
  .put(async (req, res) => {
    const { id } = req.params;
    const params = { id, ...req.body };
    const result = await boardsService.update(params);
    res.status(result.status).json(result.ref);
  })
  .delete(async (req, res) => {
    const result = await boardsService.remove(req.params.id);
    res.status(result.status).json(result.ref);
  });

module.exports = router;
