const router = require('express').Router();
const { v4: getId } = require('uuid');
const User = require('./user.model');
const usersService = require('./user.service');

router
  .route('/')
  .get(async (req, res) => {
    const users = await usersService.getAll();
    // map user fields to exclude secret fields like "password"
    res.json(users.map(User.toResponse));
  })
  .post(async (req, res) => {
    const users = await usersService.getAll();
    const newUser = new User({ id: getId(), ...req.body });
    users.push(newUser);
    // map user fields to exclude secret fields like "password"
    res.json(users.map(User.toResponse));
  });

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const user = await usersService.getById(id);
  if (user) {
    res.json(User.toResponse(user));
  } else {
    res.status(404);
  }
});

module.exports = router;
