const productos=[ 
    
  //  anillos
    {
      categ:'anillos',
      foto:'ANILL·MA133·0',
      desc:'ANILLO RED',
      precio:3200,
      stock : 4
    },
    {     
      categ:"anillos",
      foto:'ANILL·MA110·0',
      desc:'ANILLO CRUZ',
      precio:3900,
      stock:10
      },

    {
    categ:'anillos',
    foto:'ANILL·MA140·1',
    desc:'DOBLE CORAZON',
    precio:16000,
    stock : 4
    },
    {
    categ:'anillos',
    foto:'ANILL·PV1708·1',
    desc:'DOBLE ',
    precio:16000,
    stock : 4
    },
// aros ------------------------
    {
    categ:'aros',
    foto:'AROS1',
    desc:'ARO HOJITAS ',
    precio:3400,
    stock : 4
    },
    {
    categ:'aros',
    foto:'AROS·SP495·1',
    desc:'ARGOLLAS 3CM ',
    precio:1400,
    stock : 4
    },
// pulseras -----------------------
    {
    categ:'pulseras',
    foto:'PULSE·IP1065·1',
    desc:'NATURALEZA ',
    precio:7400,
    stock : 2
    }, 
    {
    categ:'pulseras',
    foto:'PULSE·IP1058·1',
    desc:'PLATA LISA ',
    precio:7400,
    stock : 2
    }, 
    {
    categ:'pulseras',
    foto:'PULSE·IP1072·1',
    desc:'ARMONIA ',
    precio:9400,
    stock : 3
    }, 
    {
    categ:'pulseras',
    foto:'PULSE·IP1120·1',
    desc:'INFINITO  ',
    precio:7400,
    stock : 2
    }, 
//CADENAS
          {
            categ:'cadenas',
            foto:'CADEN·MP258·1',
            desc:'LUNGA 40CM ',
            precio:28000,
            stock : 2
            },
            {
            categ:'cadenas',
            foto:'CADEN·MP259·1',
            desc:'LUNGA 60cm ',
            precio:35000,
            stock : 2
            },
            {
            categ:'cadenas',
            foto:'CADEN·MS3·1',
            desc:'LUNGA 50cm',
            precio:30000,
            stock : 4
            },
            {
            categ:'cadenas',
            foto:'CADEN·SP389·1',
            desc:'LUNGA 50cm',
            precio:30000,
            stock : 4
            },







   ]
  


export const getProductos=() =>{
 
  return new Promise((resolve) =>{
        setTimeout(() => {
          resolve (productos)    
    }, 20)
    
  })
}


   
export const getProductosByCateg=(categ) =>{

        return new Promise((resolve) =>{
          setTimeout(() => {
           // const nuevoArray = productos.filter(prod=>prod.categ===categ);
            resolve (productos.filter(prod=>prod.categ===categ) )
          
          }, 20)
      
        })
}
export const getProductosById=(foto) =>{

  return new Promise((resolve) =>{
      setTimeout(() => {
     
      resolve (productos.find(prod=>prod.foto===foto) )
            
    }, 20)
        
  })
        
}