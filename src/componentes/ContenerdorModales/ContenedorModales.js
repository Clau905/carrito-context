
import Modal from '../Modal/Modal';
import estilos from './ContenedorModales.module.css';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import { useModal } from '../../misHooks/useModal'; 
const ContenedorModales=()=>{
       const[abierto1,abrirModal1,cerrarModal1] = useModal(false);
        
        return(
           <div className={estilos.contenedormodal}>
           
            <Modal  abierto={abierto1} cerrar={cerrarModal1}>
                <h3> SOY MODAL</h3>
                <div className={estilos.cards }     > 
               
                </div>
               

            </Modal>
       
            </div>
        )
 
}
export {ContenedorModales};