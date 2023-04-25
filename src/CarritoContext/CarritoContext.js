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
         console.log(carrito);
         
    } 
  /*   const removerProd=(prod)=>{ 
        const idProd = prod.foto;
        const restar=  prod.precio*prod.cantidad;
        setCarrito({
        prods: carrito.prods.filter(a=>a.foto!=idProd),
        total:carrito.total-restar
         })
    } */


    const removerProd=()=>{}
    const vaciar=()=>{
    // deja el carrito vacio   
      //  setCarrito({prods:[],total:0});
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
