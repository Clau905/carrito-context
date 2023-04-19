import React from 'react';
import './../Modal/Modal.css';


function Modal({ children, abierto, cerrar }) {
  return (
    <div className ={`modal${abierto===true ? '' : 'cerrado'}`}>
      <div className='titulomodal'>
        <h2>SOY MODALLLLLL DENTRO</h2>
        <button className='boton' onClick={cerrar}>X</button>
      </div>

      {children}

    </div>
  );
}

export default Modal;
