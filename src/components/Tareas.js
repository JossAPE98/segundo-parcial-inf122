import React from 'react';
import '../styles/Tarea.css';


function Tareas({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div>
    
        <div className='contenedor-nota'>
            <p className='nota'>{nota.texto}</p>
            <button className='boton' onClick={() => onDelete(nota.id)}>Eliminar</button>
            
        </div>
    
</div>
  );    
}

export default Tareas;