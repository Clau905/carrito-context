
import estilos from  './ListarPedido.module.css';
import RenglonCarro from  '../RenglonCarro/RenglonCarro';
import { useContext } from "react";
import {Link} from 'react-router-dom';
import {CarritoContext} from '../Data/context/CarritoContext';
import Carrito from '../Carrito/Carrito';
function ListarPedido(){
    const {carrito,agregarProd,removerProd,vaciar,estaEnCarrito}=useContext(CarritoContext);
    //const misProductos =carrito.prods;
       
       return (
        
        <div className={estilos.contenedorcarro}>  
            <div className={estilos.carrosuperior}   >
                  <h3>Descripcion</h3> <p>Precio </p> <p>Cantidad</p><p>Subtotal</p>
            </div>
            <div className= {estilos.carrodetalle}>
                    
                    {carrito.prods.map( (it) => <RenglonCarro     prod= {it}    >       </RenglonCarro>   ) }
        
            </div>

           

        
            <div className= {estilos.resumen}>
            <div className={estilos.total}><p>Total Pedido: $ {carrito.total}</p></div>
                <Link to={`/anillos/borrar`} >Vaciar Carro de Compras </Link> 
            </div>
    
           
        </div>

    )
}    
  
export default ListarPedido;
