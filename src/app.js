// TODO: Completa tu código aquí ⬇️
const express = require("express");
const app = express();
const PORT = 3002;

const listViewRouter = require('./list-view-router');
const listViewRouter = require('./list-edit-router');

app.use('/list-view', listViewRouter);
app.use('/list-edit', listEditRouter);


app.get("/", (req,res)=>{
  res.send("Bienvenid@ al laboraotio de routing");
})
//Se recomienda no editar ni eliminar la instancia del servidor.
// Instancia del servidor
const server = app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});

// Exportación del servidor
module.exports = server;