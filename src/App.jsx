import data from './data.json'

const App = () => {

  /*   const getDatos = () => {
    return new Promise ((resolve, reject)=>{
      setTimeout(()=>{
        resolve (data);
      }, 2000);
    });
  };

  async function fetchingData() {
    try {
      const datosFetched = await getDatos();
    } catch (err) {

    }
  }

  fetchingData(); */

  const url = data
  const consultarApi = async ()=>{
    const respuesta = await fetch(data);
    const resultado = await respuesta.json();
  };
  consultarApi()

  return <>
    {
      data.map((prod)=>{
       return(
          <div key={prod.id}>
            <h1>{prod.nombre}</h1>
            <h5>{prod.id}</h5>
         </div>
         );
      })
    }
  </>;

};

export default App;
