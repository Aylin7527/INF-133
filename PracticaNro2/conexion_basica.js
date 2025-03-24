const mysql = require('mysql2');
const fs = require('fs');

const startTimeConn = Date.now(); // Inicia medición de conexión

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'MusicSNSMP'
});

connection.connect((err) => {
  if (err) throw err;
  const timeConn = Date.now() - startTimeConn; // Calcula tiempo de conexión
  console.log('✅ Conectado con conexión básica');

  const startTimeQuery = Date.now(); // Inicia medición de consulta
  connection.query('SELECT * FROM canciones', (err, results) => {
    if (err) throw err;
    const timeQuery = Date.now() - startTimeQuery; // Calcula tiempo de consulta
    console.log('🎵 Resultados:', results);

    // Guardar en archivo
    fs.appendFileSync('resultados.txt', 
      `Tiempo de Conexion Basica: ${timeConn} ms\nTiempo de Consulta Basica: ${timeQuery} ms\n`
    );

    connection.end();
  });
});
