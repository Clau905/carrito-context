 export const  Adapter = (doc)=>{
    const data = doc.data();
    const dataAdapted ={

        id:doc.id,
        ...data()   
    }
return dataAdapted;
}
export const fromDbToApp = (doc) => {
    const id = doc.id;
    const data = doc.data();
  console.log('en adapter doc ',doc)
    return {
      Id: id,
      Info: data,
    };
  };
