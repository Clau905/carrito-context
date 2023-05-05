import { useState,useEffect } from 'react';
import Item from '../../componentes/Item/Item';
import estilos from '../ItemListContainer/ItemListContainer.module.css';
import {CarritoContext} from '../Data/context/CarritoContext.js';
import { useContext } from "react"; 
import { useParams } from "react-router-dom";
import { getProds, } from '../Data/services/services';

const ItemListContainer = ({categ})=>{ 
   const {carrito,agregarProd,removerProd,vaciar,estaEnCarrito,prod}=useContext(CarritoContext);
   const {borrar}=useParams(); 
   const [prods,setProds]=useState([]);
    
   useEffect(()=>{
      if (borrar===undefined){}
         else{
 
            if (borrar.trim() ==='borrar'){
     
               const a =vaciar()
            }
         }   
   },[])

   useEffect(()=>{
    
      const getProdsData = async () => {
         setProds( await getProds(categ));
      
      }
      getProdsData()
           
  
   },[categ]);

 
  
   return (
    
      <div className={estilos.contenedorlist} >
         
      <h1> {categ.toUpperCase()}</h1>
        
            <div className={estilos.contenedorcarro}>
            {prods.map(prod=> <Item iD={prod.id} desc = {prod.desc} categ={prod.categ} foto={prod.foto} precio={prod.precio} stock={prod.stock}/>)}
            </div>
      </div>
     
   )
  
} 
export default  ItemListContainer;