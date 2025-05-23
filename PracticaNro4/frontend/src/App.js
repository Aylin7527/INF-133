import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useCallback, useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
//import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";

function App() {
  // Estado para los productos
  const [productos, setProductos] = useState([]);
  const [formularioAgregar, SetAgregarProducto] = useState({
    Nombre: '',
    Descripcion: '',
    Precio: '',
    CantidadStock: '',
    Categoria: ''
  });
  // Estado para el formulario de editar producto
  const [formularioEditar, SetEditarProducto] = useState({
    Nombre: '',
    Descripcion: '',
    Precio: '',
    CantidadStock: '',
    Categoria: ''
  });
  // ID del producto a editar
  const [productoId, SetProductoId] = useState(null);
  // Estado para la busqueda
  const [busqueda, SetBusqueda] = useState('');
  // Modal para agregar
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Modal para editar
  const [mostrar, setMostrar] = useState(false);
  const CerrarModal = () => setMostrar(false);
  const AbrirModal = () => setMostrar(true);
  // Estado para el formulario de agregar producto
  const fetchProductos = useCallback(async () => {
    try {
      const respuesta = await fetch('http://localhost:3001/api/productos');
      const data = await respuesta.json();
      setProductos(data);
    } catch (error) {
      alert('ERROR:'+ error);
    }

  },[]);
  useEffect(() => {
    fetchProductos();
  }, [fetchProductos]);

  // Agregar Producto
  const Agregar = async (e) => {
    e.preventDefault();
    if (
      !formularioAgregar.Nombre.trim() ||
      !formularioAgregar.Descripcion.trim() ||
      !formularioAgregar.Precio.trim() ||
      !formularioAgregar.CantidadStock.trim() ||
      !formularioAgregar.Categoria.trim()
    )
    {
      alert('Por favor, complete todos los campos');
      return;
    }
    try {
      const respuesta = await fetch(`http://localhost:3001/api/productos`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          ...formularioAgregar
        })
      });
      if (!respuesta.ok) {
        let errorMensaje = 'Error al cargar';
        try {
          const error = await respuesta.json();
          errorMensaje = error.message || errorMensaje;
        } catch (error) {
          console.error(errorMensaje);
        }
        throw new Error(errorMensaje);
      }
      handleClose();
      Swal.fire({
        title: "¡Se agrego correctamente el Producto!",
        icon: "success",
        draggable: true,
        timer: 2000
      });
      fetchProductos();
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "¡No se pudo agregar el Producto!",
        icon: "error",
        draggable: true,
        timer: 2000
      });
    }
    
  }
  // VER LOS CAMPOS Q SE USE
  const cambiosFormularioAgregar= async (e) => {
    SetAgregarProducto({
      ...formularioAgregar,
      [e.target.name]: e.target.value
    })
  }
  // EDITAR PRODUCTO
  const EditarProductos = (producto) => {
    SetEditarProducto({
      Nombre: producto.Nombre,
      Descripcion: producto.Descripcion,
      Precio: producto.Precio,
      CantidadStock: producto.CantidadStock,
      Categoria: producto.Categoria
    });
    SetProductoId(producto.ID);
    AbrirModal();
  }
  // Cambiar el formulario de editar
  const cambiosFormularioEditar = (e) => {
    SetEditarProducto({
      ...formularioEditar,
      [e.target.name]: e.target.value
    })
  }
  const EditarProducto = async (e) => {
    e.preventDefault();
  
    if (
      !formularioEditar.Nombre.trim() ||
      !formularioEditar.Descripcion.trim() ||
      !formularioEditar.Categoria.trim() ||
      formularioEditar.Precio === '' || isNaN(formularioEditar.Precio) ||
      formularioEditar.CantidadStock === '' || isNaN(formularioEditar.CantidadStock)
    ) {
      alert('Por favor, complete todos los campos correctamente');
      return;
    }
  
    try {
      const respuesta = await fetch(`http://localhost:3001/api/productos/${productoId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formularioEditar
        })
      });
  
      if (!respuesta.ok) {
        let errorMensaje = 'Error al cargar';
        try {
          const error = await respuesta.json();
          errorMensaje = error.message || errorMensaje;
        } catch (error) {
          console.error(errorMensaje);
        }
        throw new Error(errorMensaje);
      }
  
      CerrarModal();
      Swal.fire({
        title: "¡Se editó correctamente el Producto!",
        icon: "success",
        draggable: true,
        timer: 2000
      });
      fetchProductos();
  
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "¡No se pudo editar el Producto!",
        icon: "error",
        draggable: true,
        timer: 2000
      });
    }
  };
  // Eliminar Producto
  const EliminarProducto = async (id) => {
    Swal.fire({
      title: "Estas seguro de que deseas eliminar este Producto?",
      text: "Esto no se podra revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Si, Eliminar!"
    }).then(async(result) => {
      if (result.isConfirmed) {
        try{
          await fetch(`http://localhost:3001/api/productos/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
          });
          Swal.fire({
            title: "¡Producto Eliminado Correctamente!",
            text: "Tu producto fue eliminado",
            icon: "success",
            timer: 2000
          });
          fetchProductos();
        } catch (error) {
          console.error(error);
          Swal.fire({
            title: "¡No se pudo eliminar el Producto!",
            icon: "error",
            draggable: true,
            timer: 2000
          });
        }
      }
    });
  }
  // Definicion de las columnas
  const columnas=[
    {
      name:'ID',
      selector: row=>row.ID,
      sortable:true
    },
    {
      name:'Nombre',
      selector:row=>row.Nombre,
      sortable:true
    },
    {
      name:'Descripcion',
      selector:row=>row.Descripcion,
      sortable:true
    },
    {
      name:'Precio',
      selector:row=>row.Precio,
      sortable:true
    },
    {
      name:'Cantidad Stock',
      selector:row=>row.CantidadStock,
      sortable:true
    },
    {
      name:'Categoria',
      selector:row=>row.Categoria,
      sortable:true
    },
    {
      name:'Acciones',
      cell:row=>(
        <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-warning"  onClick={()=>{EditarProductos(row)}}><CiEdit /></button>
                <button type="button" className="btn btn-danger" onClick={()=>{EliminarProducto(row.ID)}}><MdDeleteForever /></button>
        </div>
      )
    }
   ];
   const PaginacionOpciones={
    rowsPerPageText:'Filas por pagina'
  };
 
 
   return (
     <div className="contendor">
       <div style={{margin:'30px 0px'}}>
        <Button variant="primary" onClick={handleShow}>Crear</Button>
       </div>
        <Form.Control
         type='text'
         placeholder='Buscar producto'
         className='mb-3'
         value={busqueda}
         onChange={(e)=>{SetBusqueda(e.target.value)}}
        />
 
        <DataTable
         columns={columnas}
         data={productos.filter(producto=>
           producto.Nombre.toLowerCase().includes(busqueda.toLowerCase())
         )}
         pagination
         highlightOnHover
         striped
         paginationComponentOptions={PaginacionOpciones}
        />

      {/* Modal para AGREGAR */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Nuevo Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresar nombre"
                name="Nombre"
                onChange={cambiosFormularioAgregar}
                value={formularioAgregar.Nombre}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescripcion">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresar descripcion"
                name="Descripcion"
                onChange={cambiosFormularioAgregar}
                value={formularioAgregar.Descripcion}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPrecio">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingresar precio"
                name="Precio"
                onChange={cambiosFormularioAgregar}
                value={formularioAgregar.Precio}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCantidadStock">
              <Form.Label>Cantidad Stock</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingresar cantidad stock"
                name="CantidadStock"
                onChange={cambiosFormularioAgregar}
                value={formularioAgregar.CantidadStock}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCategoria">
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresar categoria"
                name="Categoria"
                onChange={cambiosFormularioAgregar}
                value={formularioAgregar.Categoria}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={Agregar}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal para EDITAR */}
      <Modal show={mostrar} onHide={CerrarModal}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresar nombre"
                name="Nombre"
                onChange={cambiosFormularioEditar}
                value={formularioEditar.Nombre}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescripcion">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresar descripcion"
                name="Descripcion"
                onChange={cambiosFormularioEditar}
                value={formularioEditar.Descripcion}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPrecio">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingresar precio"
                name="Precio"
                onChange={cambiosFormularioEditar}
                value={formularioEditar.Precio}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCantidadStock">
              <Form.Label>Cantidad Stock</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingresar cantidad stock"
                name="CantidadStock"
                onChange={cambiosFormularioEditar}
                value={formularioEditar.CantidadStock}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCategoria">
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresar categoria"
                name="Categoria"
                onChange={cambiosFormularioEditar}
                value={formularioEditar.Categoria}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={CerrarModal}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={EditarProducto}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
