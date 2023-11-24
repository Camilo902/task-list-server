const express = require("express");
const router = express.Router();
const tasks = require('./tasks');

router.get("/tasks", (req, res) => {
  res.json(tasks);
});

router.get("/tasks/:taskId", (req, res) => {
  const taskId = parseInt(req.params.taskId);

  const task = tasks.find((task) => task.id === taskId);

  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ error: "Tarea no Encontrada" });
  }
});

router.get("/tasks/filter/:status", (req, res) => {
  const status = req.params.status.toLocaleLowerCase();
  const filterTask = tasks.filter((task) => {
    if (status === "completo") {
      return task.isCompleted === true;
    } else if (status === "incompleto") {
      return task.isCompleted === false;
    } else {
      res.status(400).json({ error: "Filtro no Valido" });
    }
  });
  res.json(filterTask);
});

module.exports = router;
