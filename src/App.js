import { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { Table } from './components/Table';

function App() {
  const [datos, setDatos] = useState([]);

  const agregarDatos = (nuevosDatos) => {
    setDatos([...datos, nuevosDatos]);
  };



  return (
    <>
      <h1 className='text-center m-5'>Formulario y Tabla</h1>
      <Form agregarDatos={agregarDatos}/>
      <Table datos={datos}/>
    </>
  );
}

export default App;
