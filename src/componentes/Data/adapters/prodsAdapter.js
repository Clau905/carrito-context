export const  Adapter = (doc)=>{


const campos = doc.data();
console.log('en adapter ',campos)


const prodsAdapter ={
id : doc.id,
foto:campos.foto,
precio:campos.precio,
stock:campos.stock

}


return prodsAdapter;

}