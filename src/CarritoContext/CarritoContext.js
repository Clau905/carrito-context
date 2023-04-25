import { createContext,useReducer } from "react";
const CarritoContext = createContext();
const carritoInicial ={
    prods:[],
    total:0 
    }
const useCarritoContext = () => {
    return useCarritoContext(CarritoContext)
}
const miReducer=(carrito,accion)=>{
    switch(accion.accion){
        case 1:
           
            return {
              //agregarProd
            }
            
        case 2:
            return 'vacia';
    default: return carrito;
    }
}
const agregarProd=(prod,cantidad)=>{
    console.log('va a agregar ',prod)    
} 
const CarritoProvider= ({children})=> {  
    const [carrito,dispatch]= useReducer(miReducer,carritoInicial);
    const data =  {carrito,dispatch};

    return (
        <CarritoContext.Provider  value ={data} > 
            {children} 
        </CarritoContext.Provider>
    )
};
export { CarritoProvider ,useCarritoContext}
