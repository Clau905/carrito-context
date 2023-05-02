
import db from '../../../config/firebase';

import{
    collection,
    getDocs,
    addDoc,
    query,
    where,
    orderBy,
    doc
}
from 'firebase/firestore';
import {Adapter} from '../adapters/prodsAdapter'
  



export const getProductosById= async(iD)=>{
   
    const collectionRef = query(collection(db,'productos'), where('id', '==', iD)) 



    const collectionRef1= query(collection(db,'productos'));


      console.log('ref collection ',collectionRef1)  


    //getDocs para recuperar los documentos de la colección de Firebase
    const resul=await getDocs(collectionRef1)
        .then(response =>  {
         
            console.log('el map tiene ',response.docs)    
            const misProdsAdapted= response.docs.map(doc =>Adapter(doc))

            return misProdsAdapted;
        })
        .catch(error => {
            console.log(error)
        })
            
    //Usamos el método map para obtener cada uno de los documentos contenidos en el array docs. Cada documento es un objeto con la propiedad data,
    // que contiene todos los datos asociados a ese documento.

       
    // con la ayuda del operador spread, construimos un nuevo objeto que contiene el id del documento y los datos asociados,
    // y este nuevo objeto lo añadimos a la lista de productos llamada prods.


}
export const getProds= async(categoria)=>{
   
    const collectionRef = categoria ? query(collection(db,'productos'), where('categ', '==', categoria.trim())) 
    : collection(db,'productos');


    const collectionRef1= query(collection(db,'productos'));

    //getDocs para recuperar los documentos de la colección de Firebase
    const resul =await getDocs(collectionRef1)
        .then(response =>  {
         
            console.log('el map tiene ',response.docs)    
            const misProdsAdapted= response.docs.map(doc =>Adapter(doc))

            return misProdsAdapted;
        })
        .catch(error => {
            console.log(error)
        })
            
    //Usamos el método map para obtener cada uno de los documentos contenidos en el array docs. Cada documento es un objeto con la propiedad data,
    // que contiene todos los datos asociados a ese documento.

       
    // con la ayuda del operador spread, construimos un nuevo objeto que contiene el id del documento y los datos asociados,
    // y este nuevo objeto lo añadimos a la lista de productos llamada prods.


}