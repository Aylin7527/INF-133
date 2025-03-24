const mysql = require('mysql2');
const fs = require('fs');

console.time('Tiempo de Conexion Pool');

// Crear pool de conexiones
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'MusicSNSMP',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Medir tiempo de conexión
const startTimeConn = Date.now();
pool.getConnection((err, connection) => {
  if (err) throw err;
  const timeConn = Date.now() - startTimeConn;
  console.timeEnd('Tiempo de Conexion Pool');
  
  fs.appendFileSync('resultados.txt', `Tiempo de Conexion Pool: ${timeConn} ms\n`);

  console.time('Tiempo de Consulta Pool');

  // Ejecutar consulta
  const startTimeQuery = Date.now();
  connection.query('SELECT * FROM canciones', (err, results) => {
    if (err) throw err;
    const timeQuery = Date.now() - startTimeQuery;
    console.timeEnd('Tiempo de Consulta Pool');

    console.log('🎵 Resultados:', results);

    fs.appendFileSync('resultados.txt', `Tiempo de Consulta Pool: ${timeQuery} ms\n`);

    connection.release();
    pool.end();
  });
});
