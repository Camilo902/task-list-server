const express = require('express');
const listEditRouter = express.Router();
let tasks = require('./tasks')


listEditRouter.post('/tasks/create', (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  console.log('***', newTask);

  res.status(200).json(tasks);
});


listEditRouter.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  tasks = tasks.filter((task) => task.id !== taskId);
  res.status(200).json(tasks);
});


listEditRouter.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const newOrder = req.body.description;
  const taskUpdate = tasks.find((task) => task.id === taskId);

  if(taskUpdate) {
    taskUpdate.description = newOrder;
    res.status(200).json(taskUpdate);
  }else{
    res.status(400).json({error:'Tarea no encontrada'});
  }
});

module.exports = listEditRouter;
