import { createContext,useContext,useState } from "react";
import { Timestamp} from 'firebase/firestore';

const CarritoContext = createContext();

const CarritoProvider= ({children})=> {
    const [prod]=useState({});
    const [carrito,setCarrito]=useState({prods:[],total:0});
    const [loading,setLoading]=useState(0);
    const [mensaje,setMensaje]=useState('SE ESTA GENERANDO SU PEDIDO...');
    const agregarProd=(prod,cantidad)=>{
                prod.cantidad=cantidad;
        if ( !estaEnCarrito(prod.id) ) {
            setCarrito({
                prods: carrito.prods.concat(prod),
                total: (carrito.total)+(cantidad*prod.precio)   
        });

        }
        else{ 
            alert('Producto ya agregado')
        }
        
    } 
    const removerProd=(e,prod,cantidad)=>{ 
        e.preventDefault();
        const idProd = prod.foto;
        const restar=  prod.precio*prod.cantidad;
        setCarrito({
            prods: carrito.prods.filter(a=>a.foto!==idProd),
            total:carrito.total-restar
         })
    } 

    const vaciar=()=>{
        setCarrito(
            {prods: [],
            total:0}
        )
    }
   
    const estaEnCarrito=(id)=>{
        const cantidad =carrito.prods.filter(a=>a.id==id).length;
        return (cantidad==0?false:true);
    }
    
 
    
    const data =  {carrito,agregarProd,removerProd,vaciar,estaEnCarrito,prod,loading,setLoading,mensaje,setMensaje};      
    
    return (
        <CarritoContext.Provider  value ={data} > 
            {children} 
        </CarritoContext.Provider>
    )
};
export { CarritoProvider ,CarritoContext}
