import { useContext } from 'react';
import { CarritoContext } from '../Data/context/CarritoContext';
import estilos from '../FinOrden/FinOrden.module.css';

const FinOrden = () => {
  const {mensaje}=useContext(CarritoContext);

  
  return (
    <div className={estilos.fin}>
    
          <h1>{mensaje}</h1>
    </div>
  )
}

export default FinOrden
