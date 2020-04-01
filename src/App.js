import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';
function App() {
  //definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);
  useEffect (() => {
    const consultarAPI = async () => {
      const api_key = '1d4730f1b859495b876f76d02bf554c7'
      const url = `http://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${api_key}`
      
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles)
    }
    consultarAPI();
  }, [categoria])
  return (
 <Fragment>
   <Header titulo='Buscador de noticias' />
   <div className="container white">
    <Formulario  guardarCategoria={guardarCategoria}/>
    <ListadoNoticias noticias={noticias} />
   </div>
 </Fragment>
  );
}

export default App;
