const mysql = require('mysql2/promise')  //Accediendo módulo conexión
const { db } = require('./env')          //Leer y validar los parámetros de conexión 

//Este archivo gestiona la conexion del SERVER y a la BD
const pool = mysql.createPool({
  host: db.host,
  port: db.port,
  user: db.user,
  password: db.password,
  database: db.database,
  waitForConnections: true,
  connectionLimit: db.connectionLimit,
  queueLimit: 0
})

//Verificar la conexión 
const probarConexion = async() => {
  const conexion = await pool.getConnection()
  await conexion.ping() //test
  conexion.release() //desconexion
}

//Exportar la conexion
module.exports = {pool, probarConexion}