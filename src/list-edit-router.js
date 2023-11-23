const express = require('express');
const listEditRouter = express.Router();


listEditRouter.post('/tasks', (req, res) => {
  res.send('Crear una nueva tarea');
});


listEditRouter.delete('/tasks/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  res.send(`Eliminar tarea ${taskId}`);
});


listEditRouter.put('/tasks/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  res.send(`Actualizar tarea ${taskId}`);
});

module.exports = listEditRouter;