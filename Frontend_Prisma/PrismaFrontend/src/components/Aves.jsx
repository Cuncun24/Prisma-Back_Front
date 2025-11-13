import { useEffect, useState } from "react";

function Aves() {
  const [aves, setAves] = useState([]);

  useEffect(() => {
    traerAves();
  }, []);


  async function traerAves() {
    await fetch("http://localhost:3000/api/aves", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setAves(data));
  }
  return (
    <div>
      <h1>Aves</h1>
      <table>
        <thead>
            <tr>
                <th> Id </th>
                <th> Nombre </th>
                <th> Especie </th>
                <th> Estado </th>
            </tr>
        </thead>
        <tbody>
          {aves.map((ave) => (
            <tr key={ave.id}>
              <td>{ave.id}</td>
              <td>{ave.nombre}</td>
              <td>{ave.especie}</td>
              <td>{ave.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Aves;
