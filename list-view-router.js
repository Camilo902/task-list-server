const express = require('express');
const listViewRouter = express.Router();


listViewRouter.get('/tasks', (req, res) => {
  res.send('Lista de todas las tareas');
});


listViewRouter.get('/tasks/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  res.send(`Detalles de la tarea ${taskId}`);
});


listViewRouter.get('/tasks/filter/:status', (req, res) => {
  const status = req.params.status;
  res.send(`Filtrar tareas por estado: ${status}`);
});

module.exports = listViewRouter;