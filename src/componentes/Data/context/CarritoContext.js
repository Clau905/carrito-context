import { createContext,useContext,useState } from "react";
import { Timestamp} from 'firebase/firestore';

const CarritoContext = createContext();

const CarritoProvider= ({children})=> {
    const [prod]=useState({});
    const [carrito,setCarrito]=useState({prods:[],total:0});
    const [orden,setOrden]=useState({},[],0, Timestamp.fromDate(new Date()));
    const [loading,setLoading]=useState(0);
    const [orderId,setOrderId]=useState('');



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
    
    
    
    
    
    
    const data =  {carrito,agregarProd,removerProd,vaciar,estaEnCarrito,prod,orden,setOrden,loading,setLoading,orderId,setOrderId};      
    

    
    
    
    return (
        <CarritoContext.Provider  value ={data} > 
            {children} 
        </CarritoContext.Provider>
    )
};
export { CarritoProvider ,CarritoContext}
