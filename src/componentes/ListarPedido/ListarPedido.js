
import estilos from  './ListarPedido.module.css';
import RenglonCarro from  '../RenglonCarro/RenglonCarro';
import { useContext } from "react";
import {CarritoContext} from '../../CarritoContext/CarritoContext.js';
function ListarPedido(){
    const {carrito,agregarProd,removerProd,vaciar,estaEnCarrito}=useContext(CarritoContext);

    const misProductos =carrito.prods;
   
       return (
        
        <div className={estilos.contenedorcarro}>  
            <div className={estilos.carrosuperior}   >
                  <h3>Descripcion</h3> <p>Precio </p> <p>Cantidad</p><p>Subtotal</p>
            </div>
            <div className= {estilos.carrodetalle}>
                    
                    {misProductos.map( (it) => <RenglonCarro     prod= {it}    >       </RenglonCarro>   ) }
        
            </div>
            <div className= {estilos.resumen}>

            <button>Vaciar Carro de Compras</button>
            </div>
        </div>

    )
}    
  
export default ListarPedido;
