const express = require('express');
const listEditRouter = express.Router();


listEditRouter.post('/tasks/create', (req, res) => {

  res.send('Crear una nueva tarea');
});


listEditRouter.delete('/tasks/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  res.send(`Tarea ${taskId} eliminada`);
});


listEditRouter.put('/tasks/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  res.send(`Tarea ${taskId} Actualizada`);
});

module.exports = listEditRouter;