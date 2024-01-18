import logo from './logo.svg';
import './App.css';
import ListaDeTareas from './components/ListaDeTareas';
function App() {
  return (
    
      <div className='tareas-lista-principal'>
        <h1 className='titulo'>Mis Tareas</h1>
        <ListaDeTareas></ListaDeTareas>
      </div>
    
  );
}


export default App;
