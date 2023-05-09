
import estilos from '../ItemListContainer/ItemListContainer.module.css';
import {CarritoContext} from '../Data/context/CarritoContext';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

import Modal from '../CheckoutForm/Modal';
import FinOrden from '../FinOrden/FinOrden';

const Checkout = () => {


  return  (
   <div className={estilos.carritototal}>
          <CheckoutForm />
  </div>
  )
 
}
export default Checkout