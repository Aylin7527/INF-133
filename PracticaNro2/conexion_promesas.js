const mysql = require('mysql2/promise');
const fs = require('fs');

async function main() {
  const startTimeConn = Date.now();

  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'MusicSNSMP'
    });

    const timeConn = Date.now() - startTimeConn;
    console.log('✅ Conectado con conexión de promesas');

    const startTimeQuery = Date.now();
    const [rows] = await connection.execute('SELECT * FROM canciones');
    const timeQuery = Date.now() - startTimeQuery;

    console.log('🎵 Resultados:', rows);

    fs.appendFileSync('resultados.txt', 
      `Tiempo de Conexion Promesas: ${timeConn} ms\nTiempo de Consulta Promesas: ${timeQuery} ms\n`
    );

    await connection.end();
  } catch (err) {
    console.error('❌ Error:', err);
  }
}

main();
