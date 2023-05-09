import React from 'react'
import { CarritoContext } from '../Data/context/CarritoContext';
import { CrearOrdenDB } from '../Data/services/services';
const FinOrden = () => {
  const {carrito,agregarProd,removerProd,vaciar,estaEnCarrito,order,setOrden,loading,setLoading}=useContext(CarritoContext);
    const[ mensaje,setMensaje] =useState('');
    useEffect(()=>{

        if (loading===0)setMensaje('');
        if (loading===1)setMensaje(' ...Se esta generando su pedido');
        if (loading===2)setMensaje('Se genero la orden con exito');


    },[loading])
    CrearOrdenDB(order,carrito, vaciar,setOrden,loading,setLoading)
  return (
    <div>
        <h1>{mensaje}</h1>
    </div>
  )
}

export default FinOrden
