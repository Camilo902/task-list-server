const express = require("express");
    const app = express();
    const port = 8000;

    let lista = require("./lista.json");

    app.get("/",(req, res)=>{
        res.send(lista);
    })

    app.listen(port, ()=>{
        console.log(`Escuchando en el puerto http://localhost:${port}`);
    })