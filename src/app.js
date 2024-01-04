// TODO: Completa tu código aquí ⬇️
const express = require("express");
const app = express();
const PORT = 3003;
const task = require("./tasks.json");
app.use(express.json());

const viewRouter = require('./list-view-router');
const editRouter = require('./list-edit-router');
app.use('/view', viewRouter);
app.use('/edit', editRouter);


app.get("/", (req,res)=>{
  res.send("Bienvenid@ al laboraotio de routing");
});


//Middleware a nivel de aplicación para validar métodos HTTP
app.use((req, res, next) => {
  const validMethods = ['GET', 'POST', 'PUT', 'DELETE'];

  if (!validMethods.includes(req.method)) {
    return res.status(400).json({ message: 'Invalid HTTP method' });
  }

  next();
});

// Middleware para list-edit-router
const listEditRouterMiddleware = (req, res, next) => {
  if ((req.method === 'POST' || req.method === 'PUT') && !req.body) {
    return res.status(400).json({ message: 'Empty body in the request' });
  }

  // Validar los atributos necesarios para crear tareas
  if (req.method === 'POST' && (!req.body.title || !req.body.description)) {
    return res.status(400).json({ message: 'Missing attributes to create tasks' });
  }

  // Validar los atributos necesarios para actualizar tareas
  if (req.method === 'PUT' && (!req.body.title || !req.body.description)) {
    return res.status(400).json({ message: 'Missing attributes to update tasks' });
  }

  next();
};

// Middleware para list-view-router
const listViewRouterMiddleware = (req, res, next) => {
  // Validar parametros
  const { param1, param2 } = req.params;

  if (!param1 || !param2) {
    return res.status(400).json({ message: 'Incorrect parameters' });
  }

  next();
};

// Aplicando middleware a los routers
app.use('/list-edit', listEditRouterMiddleware);
app.use('/list-view/:param1/:param2', listViewRouterMiddleware);

// Example route that should exist
app.get("/this-should-exists", (req, res) => {
  res.status(404).json({ message: "Not found" });
});

// gestion de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

//Se recomienda no editar ni eliminar la instancia del servidor.
// Instancia del servidor
const server = app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});

// Exportación del servidor
module.exports = server;