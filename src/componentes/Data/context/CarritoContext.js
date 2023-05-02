import { createContext,useContext,useState } from "react";


const CarritoContext = createContext();

const CarritoProvider= ({children})=> {
    const [carrito,setCarrito]=useState({prods:[],total:0});
    const agregarProd=(prod,cantidad)=>{
    
        prod.cantidad=cantidad;
      
        setCarrito({
             prods: carrito.prods.concat(prod),
             total: (carrito.total)+(cantidad*prod.precio)   
        });
       
         
    } 
    const removerProd=(e,prod,cantidad)=>{ 
        e.preventDefault();
        const idProd = prod.foto;
        const restar=  prod.precio*prod.cantidad;
        console.log('elimina un prod',prod)
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
    



    const estaEnCarrito=(prod)=>{
    return (carrito.find(prod)===undefined?false:true);
    // devuelve true o false
    } 
    
    const data =  {carrito,agregarProd,removerProd,vaciar,estaEnCarrito};      
    return (
        <CarritoContext.Provider  value ={data} > 
            {children} 
        </CarritoContext.Provider>
    )
};
export { CarritoProvider ,CarritoContext}
