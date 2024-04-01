import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';

export default function ListadoEmpleados() {

	const urlBase = "http://localhost:8080/rrhh-app/empleados";

	const[empleados, setEmpleados] = useState([]);

	useEffect(() => {
		cargarEmpleados();
	}, []);

	const cargarEmpleados = async () => {
		const resultado = await axios.get(urlBase);
		console.log("Resultado de cargar empleados");
		console.log(resultado.data);
		setEmpleados(resultado.data);
	};

	const eliminarEmpleado = async (id) => {
		await axios.delete(`${urlBase}/${id}`);
    cargarEmpleados();
	};

	const viewAlert = () => {
		alert("¿Seguro que desea eliminar el empleado?");
	};

	return (
		<div className="container">
			<div
				className="container text-center"
				style={{ margin: '30px' }}>
				<h1>Sistema de Recursos Humanos</h1>
			</div>

			<table className="table table-striped table-hover align-middle">
				<thead className="table-dark">
					<tr>
						<th scope="col">Id</th>
						<th scope="col">Nombre</th>
						<th scope="col">Apellido</th>
						<th scope="col">Departamento</th>
						<th scope="col">Sueldo</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{
						// Iteramos el arreglo de empleados de manera dinámica
						empleados.map((empleado, indice) => (
							<tr key={indice}>
								<th scope="row">{empleado.idEmpleado}</th>
								<td>{empleado.nombre}</td>
								<td>{empleado.apellido}</td>
								<td>{empleado.departamento}</td>
								<td><NumericFormat
									value={empleado.sueldo}
									displayType={'text'}
									thousandSeparator=',' prefix={'$'}
									decimalScale={2} fixedDecimalScale/>
								</td>
								<td className="text-center">
									<div>
											<a className="btn btn-warning btn-sm me-3" href={`/editar/${empleado.idEmpleado}`}>Editar</a>
											<a onClick={ () => eliminarEmpleado(empleado.idEmpleado, viewAlert())}
													className="btn btn-danger btn-sm">Eliminar</a>
									</div>
								</td>
							</tr>
						))
					}
				</tbody>
			</table>
		</div>
	);
}
