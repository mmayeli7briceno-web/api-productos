//Este aqrchivo contiene la logica de la aplicación
//5 procedimientos: buscar, listar, registrar, actualizar, eliminar

//PASO 1
//const objeto = require()  //TODOS LOS MÉTODOS
//const { otroObjeto } = require('')   //SOLO ALGUNAS FUNCIONES
const { pool } = require('../config/database')
const CAMPOS = 'id, marca, descripcion, precio, stock'  //Dato común

//todas las funciones seran ASINCRONAS (tardaran un tiempo en ser resueltas...)
//milisegundos, segundos (1000 = 1seg)
//Todas las funciones reciben y envían datos (pasarelas)
//req (requiere - solicitar >>>), res (result - <<< resultado)
const listarProductos = async(req, res) => { }

const obtenerProducto = async(req, res) => { }

const crearProducto = async(req, res) => { }

const actualizarProducto = async(req, res) => { }

const eliminarProducto = async(req, res) => { }

//Todos los métodos deber ser EXPORTADOS (se utilizarán desde la app)
//el que lo utilizará será "routes"
module.exports = {
  listarProductos,
  obtenerProducto,
  crearProducto,
  actualizarProducto,
  eliminarProducto
}