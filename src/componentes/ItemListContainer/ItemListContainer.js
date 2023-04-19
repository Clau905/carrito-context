import { useState,useEffect } from "react";
import Itemlist from '../ItemList/Itemlist';

import { getProductosByCateg } from "../../servicios/asyncMock";

const ItemListContainer = ({categ})=>{
   const [prods,setProds]=useState([]); 
  
   useEffect(()=>{
    
      getProductosByCateg(categ)
         .then(response =>{setProds(response)
            
         })
         .catch(error =>{
               console.log("error ",error)
         })
   },[categ])

   return (
      <div >
            <h1> {categ.toUpperCase()}</h1>
            <Itemlist prods={prods} categ={categ} />
      </div>

   )

} 
export default  ItemListContainer;