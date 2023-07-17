import React, { useState } from 'react';

export const Form = ({agregarDatos}) => {

    const [nombre, setNombre] = useState('')
    const [email,setEmail] = useState('')
    const [msg, setMsg] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        agregarDatos({nombre,email,msg});
        setNombre('')
        setEmail('')
        setMsg('')

    }


  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" className="form-control" id="nombre" placeholder="Ingresa tu nombre" onChange={(e)=>setNombre(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Ingresa tu email" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea className="form-control" id="mensaje" rows="3" placeholder="Escribe tu mensaje aquí" onChange={(e)=>setMsg(e.target.value)}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );



};


