import React, { useEffect, useState } from "react";

export const Exercise3 = () => {
  const [users, setUsers] = useState(null);
  const [rows, setRows] = useState(null);

  useEffect(() => {
    getusers();
  }, []);

  useEffect(() => {
    if (users) {
      getRows()
    }
  }, [users]);

  const getusers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      setUsers(await res.json());
    } catch (error) {
      console.log("Error en conexion");
    } finally {
    }
  };

  const getRows = () => {
    const filas = users.map((user) =>{
      return <tr key={user.id}>
        <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.phone}</td>
    </tr>
    })
    setRows(filas)
  }

  return (
    <>
      <h2 className="text-center">Telephone Directory</h2>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Telefono</th>
    </tr>
  </thead>
  <tbody>{rows}</tbody>
</table>
    </>
  );
};
