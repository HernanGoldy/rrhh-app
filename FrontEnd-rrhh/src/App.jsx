import ListadoEmpleados from './components/ListadoEmpleados';
import Navegacion from './template/navegacion';

function App() {
	return (
		<div className="container">
			<Navegacion />
			<ListadoEmpleados />
		</div>
	);
}

export default App;
