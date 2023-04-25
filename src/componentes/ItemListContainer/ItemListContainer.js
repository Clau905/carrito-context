import { useState,useEffect } from 'react';
import Item from '../../componentes/Item/Item';
import estilos from '../ItemListContainer/ItemListContainer.module.css';
import {CarritoContext} from '../../CarritoContext/CarritoContext.js';
import { useContext } from "react"; 
import { getProductosByCateg } from '../../servicios/asyncMock';


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
  
   const {data} = useContext(CarritoContext);
   return (
      <div className={estilos.contenedorlist} >
         
            <h1> {categ.toUpperCase()}</h1>
            <div className={estilos.contenedorcarro}>
               {prods.map(prod=> <Item key={prod.id} categ={prod.categ} foto={prod.foto} precio={prod.precio} stock={prod.stock}/>)}
            </div>
      </div>

   )

} 
export default  ItemListContainer;