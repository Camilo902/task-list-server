const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3060;

app.use(bodyParser.json());

const tasks = [
  { id: 1, description: "Hacer mercado", completed: false },
  { id: 2, description: "Estudiar para el examen", completed: true },
  { id: 3, description: "Sacar al perro", completed: false },
  { id: 4, description: "Visitar a el abuelo", completed: true },
  { id: 5, description: "Hacer la cena", completed: true },
  { id: 6, description: "Lavar la losa", completed: false },

];

// Listar todas las tareas
app.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

// Listar tareas completas
app.get("/tasks/completed", (req, res) => {
  const completedTasks = tasks.filter((task) => task.completed);
  res.status(200).json(completedTasks);
});

// Listar tareas incompletas
app.get("/tasks/incomplete", (req, res) => {
  const incompleteTasks = tasks.filter((task) => !task.completed);
  res.status(200).json(incompleteTasks);
});

// Obtener una sola tarea
app.get("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find((task) => task.id === taskId);

  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).json({ error: "Tarea no encontrada" });
  }
});

// Crear una nueva tarea
app.post("/tasks", (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.status(201).json({ createdTask: newTask });
});

// Actualizar una tarea
app.put("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const updatedTask = req.body;

  const index = tasks.findIndex((task) => task.id === taskId);

  if (index !== -1) {
    tasks[index] = updatedTask;
    res.status(200).json({ updatedTask });
  } else {
    res.status(404).json({ error: "Tarea no encontrada" });
  }
});

// Eliminar una tarea
app.delete("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const index = tasks.findIndex((task) => task.id === taskId);

  if (index !== -1) {
    const deletedTask = tasks.splice(index, 1)[0];
    res.status(200).json({ deletedTask });
  } else {
    res.status(404).json({ error: "Tarea no encontrada" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
