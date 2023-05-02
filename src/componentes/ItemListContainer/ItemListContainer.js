import { useState,useEffect } from 'react';
import Item from '../../componentes/Item/Item';
import estilos from '../ItemListContainer/ItemListContainer.module.css';
import {CarritoContext} from '../Data/context/CarritoContext.js';
import { useContext } from "react"; 
import { getProds } from '../Data/services/services.js';
import { useParams } from "react-router-dom";
import { ProductProvider } from '../Data/context/ProductContext';





const ItemListContainer = ({categ})=>{

 
   const [prods,setProds]=useState([]); 
   const {carrito,agregarProd,removerProd,vaciar,estaEnCarrito}=useContext(CarritoContext);
   const {borrar}=useParams(); 
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
          const resul = await getProds(categ)
          .then(response =>  {         
              setProds(response)
          })
      }
      getProdsData()
           
  
   },[categ]);

  console.log('prods ....... ',prods)
  
   return (
      <ProductProvider>
      <div className={estilos.contenedorlist} >
         
            <h1> {categ}</h1>
            <div className={estilos.contenedorcarro}>
               {prods.map(prod=> <Item key={prod.id} categ={prod.categ} foto={prod.foto} precio={prod.precio} stock={prod.stock}/>)}
            </div>
      </div>
      </ProductProvider>
   )
  
} 
export default  ItemListContainer;