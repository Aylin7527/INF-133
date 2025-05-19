// const mysql = require('mysql2/promise');
import mysql from 'mysql2';
const pool=mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'repuestos_vae'
}).promise();

export default pool;