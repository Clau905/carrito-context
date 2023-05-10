
import estilos from '../ItemListContainer/ItemListContainer.module.css';
import {CarritoContext} from '../Data/context/CarritoContext';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

import {useState,useContext} from "react"; 
//import Modal from '../CheckoutForm/Modal';
import FinOrden from '../FinOrden/FinOrden';

const Checkout = () => {
  let mensaje ='Se esta generando su pedido';
  const {loading}=  useContext(CarritoContext);
  let child;
  if (loading ===0) {child=<CheckoutForm/>}
  if (loading >0) {child=<FinOrden mensaje = {mensaje} />}
  return  (
    <div> 
      {child}
    </div>
  )
 
}
export default Checkout