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
//API REST => http://miaplicacion.com/api/productos/1
const listarProductos = async(req, res) => {
  //se utiliza try - catch pporque existe una probabilidad de error
  try{
    const [productos] = await pool.query('SELECT * FROM productos ORDER BY id')
    res.status(200).json({
      ok: true,
      total: productos.length,
      data: productos
    })
  }catch(e){
    console.error(e)
    res.status(500).json({
      ok: false,
      message: 'Error interno en el servidor'
    })
  }
}

//Buscar ¿cómo funciona?
//API REST => http://miaplicacion.com/api/productos/1
const obtenerProducto = async(req, res) => {
    try{
      //req.params representa los parámetros enviados por la URL
      const id = Number(req.params.id)
      if (id <= 0){
        return res.status(400).json({
          ok: false,
          message: 'El ID no puede ser negativo o cero'
        })
      }

      //Si podemos buscar(>0). Utilizaremos EXECUTE porque pasaremos parámetros
      //Eviatremos SQLinjection (técnica hackeo)
      //? = comodín, representa un valor 
      const [registro] = await pool.execute(`SELECT * FROM productos WHERE id = ?`, [id])
      
      //Existe la posibilidad que NO encontremos el registro
      if (registro.length === 0){
        return res.status(404).json({
          ok: false,
          message: 'No existe el producto'
        })
      }

      //Si llegamos hasta aqui, entonces SÍ existe el registro
      res.status(200).json({
        ok: true,
        data: registro[0]
      })
    }catch(e){
    console.error(e)
    res.status(500).json({
      ok: false,
      message: 'Error interno en el servidor'
    })
  }
}

const crearProducto = async(req, res) => {
    try{

  }catch(e){
    console.error(e)
    res.status(500).json({
      ok: false,
      message: 'Error interno en el servidor'
    })
  }
}

const actualizarProducto = async(req, res) => {  
  try{

  }catch(e){
    console.error(e)
    res.status(500).json({
      ok: false,
      message: 'Error interno en el servidor'
    })
  }}

const eliminarProducto = async(req, res) => {  
  try{

  }catch(e){
    console.error(e)
    res.status(500).json({
      ok: false,
      message: 'Error interno en el servidor'
    })
  }}

//Todos los métodos deber ser EXPORTADOS (se utilizarán desde la app)
//el que lo utilizará será "routes"
module.exports = {
  listarProductos,
  obtenerProducto,
  crearProducto,
  actualizarProducto,
  eliminarProducto
}