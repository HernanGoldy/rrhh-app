import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListadoEmpleados from './components/ListadoEmpleados';
import Navegacion from './template/Navegacion';
import AgregarEmpleado from './components/AgregarEmpleado';
import EditarEmpleado from './components/EditarEmpleado';

function App() {
	return (
		<div className="container">
			<BrowserRouter>
			<Navegacion/>
			<Routes>
				<Route exact path='/' element={<ListadoEmpleados/>}/>
				<Route exact path='/agregar' element={<AgregarEmpleado/>}/>
				<Route exact path='/editar/:id' element={<EditarEmpleado/>}/>
			</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
