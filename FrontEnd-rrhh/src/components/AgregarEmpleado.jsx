import React from 'react'

export default function AgregarEmpleado() {
  return (
    <div>
      <div classNameName="container">
        <div classNameName="container text-center" style={{margin:"30px"}}>
          <h3>Agergar Empleado</h3>
        </div>

        <form>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" id='nombre' name='nombre' required={true}></input>
          </div>
          <div className="mb-3">
            <label htmlFor="apellido" className="form-label">Apellido</label>
            <input type="text" className="form-control" id='apellido' name='apellido' required={true}></input>
          </div>
          <div className="mb-3">
            <label htmlFor="departamento" className="form-label">Departamento</label>
            <input type="text" className="form-control" id='departamento' name='departamento' required={true}></input>
          </div>
          <div className="mb-3">
            <label htmlFor="sueldo" className="form-label">Sueldo</label>
            <input type="number" step={"any"} className="form-control" id='sueldo' name='sueldo' required={true}></input>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-warning btn-sm me-3">Agregar</button>
            <a className="btn btn-danger btn-sm" href="/">Regresar</a>
          </div>
        </form>
      </div>
    </div>
  )
}
