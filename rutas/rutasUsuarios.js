var rutas=require("express").Router();
var {mostrarUsuarios, nuevoUsuario, borrarUsuario, buscarPorId }=require("../bd/usuariosBD");
//var {Router}=require("express");

rutas.get("/",async(req,res)=>{
    //res.send("Hola estas en raiz");
    var usuariosValidos = await mostrarUsuarios();
    //console.log(usuariosValidos);
    res.json(usuariosValidos);

});

module.exports=rutas;
