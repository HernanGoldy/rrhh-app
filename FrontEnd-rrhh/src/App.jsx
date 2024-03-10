import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListadoEmpleados from './components/ListadoEmpleados';
import Navegacion from './template/Navegacion';

function App() {
	return (
		<div className="container">
			<BrowserRouter>
			<Navegacion/>
			<Routes>
				<Route exact path='/' element={<ListadoEmpleados/>}/>
			</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
