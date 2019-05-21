import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Productos from './components/Productos';
import './App.css';

function App() {
  let datos = {
    Titulo: "Titulo de la app",
    Subtitulo: "nose",
    visitas: 890
  }
  let productos = [
    {
      nombre: 'Laptop',
      precio: 7000
    }, {
      nombre: 'CPU',
      precio: 10000
    }
  ];
  return (
    <div>
      <Header datos={datos} />
      <Productos productos={productos}/>
      <Footer datos={datos} />
    </div>
  );
}

export default App;
