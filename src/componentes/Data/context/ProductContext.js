import { createContext,useContext,useEffect,useState } from "react";

import {getProds} from '../services/services';
import { getProductosById } from "../services/services";

const ProductContext= createContext();

const ProductProvider= ({children})=> {

    const [prods,setProds]= useState([]);
    useEffect(()=>{

        getProds()
            .then((rods)=>{
                setProds(prods);

            })
            .catch((error) => {

                console.error(error);
            })
    },[]);
    const data =  {getProds,setProds,prods,getProductosById};      
    return (
        <ProductContext.Provider  value ={data} > 
            {children} 
        </ProductContext.Provider>
    )
};

export { ProductProvider ,ProductContext}