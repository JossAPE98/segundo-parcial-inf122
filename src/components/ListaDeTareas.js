import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';

import '../styles/ListaDeTareas.css'
import Tareas from './Tareas';


function ListaDeTareas() {

  const [notas, setNotas] = useState([]);
    const [nuevaNota, setNuevaNota] = useState('');

    const agregarNota = () => {
        if (nuevaNota.trim() === '') return;
        setNotas([...notas, { id: Date.now(), texto: nuevaNota }]);
        setNuevaNota('');
    };

    const eliminarNota = (id) => {
        setNotas((prevNotas) => prevNotas.filter((nota) => nota.id !== id));
    };

    
  }
  
  return (
     <div className='contenedor-principal'>
            <input
                className="input"
                type="text"
                value={nuevaNota}
                onChange={(e) => setNuevaNota(e.target.value)}
            />
            <button className='boton' onClick={agregarNota}>Agregar Nota</button>
            {notas.map((Tareas) => (
                <Tareas
                    key={n.id}
                    nota={nota}
                    onDelete={eliminarNota}
                    
                />
            ))}
        </div>
  );    
}

export default ListaDeTareas;