import { useEffect, useState } from "react";

function Aves() {
  const [aves, setAves] = useState([]);
  const [especie, setEspecie] = useState("");
  const [nombre, setNombre] = useState("");
  const [estado, setEstado] = useState("");

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
  function guardarAve(e) {
    e.preventDefault();
    fetch("http://localhost:3000/api/aves", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        especie: especie,
        nombre: nombre,
        estado: estado,
      }),
    }) 
    traerAves();
    setEspecie("");
    setNombre("");
    setEstado("");
  }
  function eliminarAve(id) {
    fetch(`http://localhost:3000/api/aves/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    traerAves();
  }
  return (
    <div>
      <h2>Crear Aves</h2>
      <form onSubmit={guardarAve}>
      <label htmlFor="especie">Especie</label>
        <input type="text" id="especie" name="especie" onChange={( event) =>setEspecie(event.target.value)} />
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" onChange={( event) =>setNombre(event.target.value)} />
        <label htmlFor="estado">Estado</label>
        <input type="text" id="estado" name="estado" onChange={( event) =>setEstado(event.target.value)} />
        <button type="submit">Crear</button>
      </form>
      <h1>Aves</h1>
      <table>
        <thead>
            <tr>
                <th> Id </th>
                <th> Especie </th>
                <th> Nombre </th>
                <th> Estado </th>
            </tr>
        </thead>
        <tbody>
          {aves.map((ave) => (
            <tr key={ave.id}>
              <td>{ave.id}</td>
              <td>{ave.especie}</td>
              <td>{ave.nombre}</td>
              <td>{ave.estado}</td>
              <td>
                <button onClick={() => eliminarAve(ave.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default Aves;
