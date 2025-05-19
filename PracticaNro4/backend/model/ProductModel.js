import pool from '../config/db.js';

export const obtenerTodosProductos = async () => {
    const [array] = await pool.query('SELECT * FROM productos');
    return array;
}

export const crearNuevoProducto = async (nombre, descripcion, precio, cantidadStock, categoria) => {
    const [resultado] = await pool.query(
        'INSERT INTO productos (nombre, descripcion, precio, cantidadStock, categoria) VALUES (?, ?, ?, ?, ?)', 
        [nombre, descripcion, precio, cantidadStock, categoria]
    );
    return resultado.insertId;
}

export const ActualizarProducto = async (id, nombre, descripcion, precio, cantidadStock, categoria) => {
    await pool.query(
        'UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, cantidadStock = ?, categoria = ? WHERE id = ?', 
        [nombre, descripcion, precio, cantidadStock, categoria, id]
    );
}
// dice un solo objeto ojo ver si aplica a lo q edtoy haciendo
export const buscarProducto = async (id) => {
    const [array] = await pool.query('SELECT * FROM productos WHERE id=?', [id]);
    return array[0];
}

export const EliminarProducto = async (id) => {
    await pool.query('DELETE FROM productos WHERE id=?', [id]);
}