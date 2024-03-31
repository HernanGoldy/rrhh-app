import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function EditarEmpleado() {

  const urlBase = "http://localhost:8080/rrhh-app/empleados";

  let navegacion = useNavigate();

  const {id} = useParams();

  const [empleado, setEmpleado] = useState({
    nombre: "",
    apellido: "",
    departamento: "",
    sueldo: ""
  });

  const {nombre, apellido, departamento, sueldo} = empleado;

  useEffect(()=>{
    cargaEmpleado();
  }, []);

  const cargaEmpleado = async () => {
    const resultado = await axios.get(`${urlBase}/${id}`);
    setEmpleado(resultado.data);
  };

  // Spread operator ... (expandir los atributos)
  const onInputChange = (e) => {
    setEmpleado({
      ...empleado,
      [e.target.name]: e.target.value
    })
  }

  // Nos comunicamos con el backend
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`${urlBase}/${id}`, empleado);
    // Redirigimos a la página de inicio
    navegacion("/");
  }

  return (
    <div>
      <div classNameName="container">
        <div classNameName="container text-center" style={{margin:"30px"}}>
          <h3>Editar Empleado</h3>
        </div>

        <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              required={true}
              value={nombre}
              onChange={(e) => onInputChange(e)}>
            </input>
          </div>
          <div className="mb-3">
            <label htmlFor="apellido" className="form-label">Apellido</label>
            <input
              type="text"
              className="form-control"
              id="apellido"
              name="apellido"
              required={true}
              value={apellido}
              onChange={(e) => onInputChange(e)}>
            </input>
          </div>
          <div className="mb-3">
            <label htmlFor="departamento" className="form-label">Departamento</label>
            <input
              type="text"
              className="form-control"
              id="departamento"
              name="departamento"
              required={true}
              value={departamento}
              onChange={(e) => onInputChange(e)}>
            </input>
          </div>
          <div className="mb-3">
            <label htmlFor="sueldo" className="form-label">Sueldo</label>
            <input
              type="number"
              step={"any"}
              className="form-control"
              id="sueldo"
              name="sueldo"
              required={true}
              value={sueldo}
              onChange={(e) => onInputChange(e)}>
            </input>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-warning btn-sm me-3">Guardar</button>
            <a className="btn btn-danger btn-sm" href="/">Regresar</a>
          </div>
        </form>
      </div>
    </div>
  )
}
