// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import axios from "axios";

// const baseURL = "https://localhost:4000/usuario/registrar";

import axios from "axios";
import React, { useState } from "react";

const baseURL = "https://localhost:4000/usuario/registrar";

// Componentes de Formulario
const FechaInicioInput = ({ value, onChange }) => (
  <input type="date" value={value} onChange={onChange} />
);

const FechaFinInput = ({ value, onChange }) => (
  <input type="date" value={value} onChange={onChange} />
);

const PrecioInicialInput = ({ value, onChange }) => (
  <input type="number" value={value} onChange={onChange} />
);

const PrecioFinalInput = ({ value, onChange }) => (
  <input type="number" value={value} onChange={onChange} />
);

const EstadoInput = ({ value, onChange }) => (
  <select value={value} onChange={onChange}>
    <option value="activo">Activo</option>
    <option value="inactivo">Inactivo</option>
  </select>
);

const ProduccionIdInput = ({ value, onChange }) => (
  <input type="text" value={value} onChange={onChange} />
);

export default function App() {
  const [form, setForm] = useState({
    fechaInicio: "",
    fechaFin: "",
    precioInicial: "",
    precioFinal: "",
    estado: "activo",
    produccionId: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(baseURL, form)
      .then((response) => {
        setForm({
          fechaInicio: "",
          fechaFin: "",
          precioInicial: "",
          precioFinal: "",
          estado: "activo",
          produccionId: ""
        });
        console.log("Registro exitoso:", response.data);
      })
      .catch((error) => {
        console.error("Error al registrar:", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Fecha de Inicio:</label>
        <FechaInicioInput
          name="fechaInicio"
          value={form.fechaInicio}
          onChange={handleInputChange}
        />
        <br />
        <label>Fecha de Fin:</label>
        <FechaFinInput
          name="fechaFin"
          value={form.fechaFin}
          onChange={handleInputChange}
        />
        <br />
        <label>Precio Inicial:</label>
        <PrecioInicialInput
          name="precioInicial"
          value={form.precioInicial}
          onChange={handleInputChange}
        />
        <br />
        <label>Precio Final:</label>
        <PrecioFinalInput
          name="precioFinal"
          value={form.precioFinal}
          onChange={handleInputChange}
        />
        <br />
        <label>Estado:</label>
        <EstadoInput
          name="estado"
          value={form.estado}
          onChange={handleInputChange}
        />
        <br />
        <label>ID de Producción:</label>
        <ProduccionIdInput
          name="produccionId"
          value={form.produccionId}
          onChange={handleInputChange}
        />
        <br />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}
