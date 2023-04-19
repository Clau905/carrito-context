
import estilos from  '../Carro/Listacarro.module.css';
import Item from  '../Carro/Item.js';

function Listacarro({misProductos}){
    
       return (
        
        <div className={estilos.contenedorcarro}>  
            <div className={estilos.carrosuperior}   >
                  <h3>Descripcion</h3> <p>Precio </p> <p>Cantidad</p><p>Subtotal</p>

            </div>
            <div className= {estilos.carrodetalle}>
                    
                    {misProductos.map( (it) => <Item     prod= {it}    >       </Item>   ) }
        
            </div>
            
        </div>

    )
}    
  
export default Listacarro;
