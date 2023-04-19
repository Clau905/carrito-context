import { createContext,useState } from "react";
const CarritoContext = createContext();

const CarritoProvider= ({children})=> {
    const [carrito,setCarrito]=useState({prods:[],total:0});
    const removerProd=(prod)=>{  
    }

    const vaciar=()=>{
    // deja el carrito vacio   
    setCarrito({prods:[],total:0});
    }
    const estaEnCarrito=(prod)=>{
    return (carrito.find(prod)===undefined?false:true);
    // devuelve true o false
    }
    const agregarProd=(prod,cant)=>{
       carrito.prods.concat(prod);
       carrito.total = carrito.total+(cant*prod.precio);
       setCarrito(carrito);
    }
    const data =  {carrito,agregarProd,removerProd,vaciar,estaEnCarrito}
    return (
        <CarritoContext.Provider  value ={data} > 
            {children} 
        </CarritoContext.Provider>
    )
};
export { CarritoProvider };
export default CarritoContext;