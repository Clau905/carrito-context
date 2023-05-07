export const Adapter = (doc)=>{

    const datosAdaptados= doc.docs.map((producto) =>{
        return {
            id:producto.id,
             ...producto.data()    

        }
   
        })
    return datosAdaptados


    }