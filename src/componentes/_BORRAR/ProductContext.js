import { createContext,useContext,useEffect,useState } from "react";

import {getProds} from '../Data/services/services';


const ProductContext= createContext();

const ProductProvider= ({children})=> {
    const [prod,setProd]= useState({});
    const [prods,setProds]= useState([]);



    const data =  {getProds,setProds,prods,prod,setProd};      
    return (
        <ProductContext.Provider  value ={data} > 
            {children} 
        </ProductContext.Provider>
    )
};

export { ProductProvider ,ProductContext}