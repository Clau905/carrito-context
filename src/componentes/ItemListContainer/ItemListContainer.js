import { useState,useEffect,useContext } from 'react';
import Item from '../../componentes/Item/Item';
import estilos from '../ItemListContainer/ItemListContainer.module.css';
import {CarritoContext} from '../Data/context/CarritoContext';

import { useParams } from "react-router-dom";
import { getProds, } from '../Data/services/services';

const ItemListContainer = ({categ})=>{ 
   const {vaciar,setLoading,setMensaje}=useContext(CarritoContext);
   const {borrar}=useParams(); 
   const [prods,setProds]=useState([]);
   setLoading(0) ;
   setMensaje('');
   
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
      <>
      <h3 className={estilos.categoria}> {categ.toUpperCase()}</h3>
      <div className={estilos.contenedorlist} >
         
       
         <div className={estilos.contenedorcarro}>
            {prods.map(prod=> <Item key={prod.id} iD={prod.id} categ={prod.categ} foto={prod.foto} precio={prod.precio} />)}
         </div>
      </div>
      </>
   )
  
} 
export default  ItemListContainer;