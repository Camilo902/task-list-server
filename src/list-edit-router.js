const express = require('express');
const listEditRouter = express.Router();
const tasks = require('./tasks')




listEditRouter.post('/tasks/create', (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  console.log('***', newTask);

  res.status(200).send('Nueva Tarea Creada');
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
