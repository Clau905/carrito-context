
import estilos from  './ListarPedido.module.css';
import RenglonCarro from  '../RenglonCarro/RenglonCarro';
import { useContext } from "react";
import {Link} from 'react-router-dom';
import {CarritoContext} from '../Data/context/CarritoContext';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

function ListarPedido(){
    const {carrito,agregarProd,removerProd,vaciar,estaEnCarrito}=useContext(CarritoContext);
      
       return (
        <>
        <div style={{display:!carrito.total>0?'block':'none'}}>
        <ItemListContainer  categ = 'anillos'  /> 
        </div>


        <div  className={estilos.contenedorcarro}   style={{display:carrito.total>0?'block':'none'}}  >  
            <div className={estilos.carrosuperior}   >
               <p>Foto</p> <p>Codigo</p>  <p>Descripcion</p> <p>Precio </p> <p>Cantidad</p><p>Subtotal</p>  
            </div>
            <div className= {estilos.carrodetalle}>
                    
                    {carrito.prods.map( (it) => <RenglonCarro     prod= {it}    >       </RenglonCarro>   ) }
        
            </div>
            <div className= {estilos.resumen}>
           
                <div className={estilos.total}>
                    <p>Total Pedido: $ {carrito.total}</p>
                </div>
                <div className={estilos.checkout}>
                    <Link to={`/anillos/borrar`} >Vaciar Carro </Link>  
                    <Link to={`/checkout`} >Checkout </Link>
                </div> 
            </div>
    
           
        </div>
    </>
    )
}    
  
export default ListarPedido;
