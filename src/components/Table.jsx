import React from 'react';

export const Table = ({datos}) => {
  return (
    <table className="table mt-4">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Mensaje</th>
        </tr>
      </thead>
      <tbody>
      {datos.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.nombre}</td>
            <td>{item.email}</td>
            <td>{item.msg}</td>
          </tr>
        ))}
        
      </tbody>
    </table>
  );
};

