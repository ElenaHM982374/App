const express = require("express");
const usuariosRutas = require("./rutas/rutasUsuarios");
const productosRutas = require("./rutas/rutasProductos"); 

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rutas de usuarios
app.use("/", usuariosRutas);

// Rutas de productos
app.use("/", productosRutas);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Servidor en http://localhost:" + port);
});
