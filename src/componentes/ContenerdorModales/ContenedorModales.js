
import Modal from '../Modal/Modal';
import estilos from './ContenedorModales.module.css';
import { useModal } from '../../misHooks/useModal'; 
const ContenedorModales=()=>{
       const[abierto1,abrirModal1,cerrarModal1] = useModal(false);
        
        return(
           <div className={estilos.contenedormodal}>
            <button onClick={abrirModal1}>Abrir Modal</button>
            <Modal  abierto={abierto1} cerrar={cerrarModal1}>
                <h3> SOY MODAL</h3>
                <div className={estilos.cards }     > 
                    <img  className={estilos.imagenCards }       
                    src={require('../../img/Joyas/anillos/ANILL·MA110·1.jpg')}
                    alt='FOTO 1'  />
                </div>
                <div>
                    <h3>claudia</h3>
                </div>

            </Modal>
       
            </div>
        )
 
}
export  default ContenedorModales;