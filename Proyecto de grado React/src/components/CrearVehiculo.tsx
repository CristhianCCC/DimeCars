import React, { useState } from "react";
import axios from "axios";
import MensajesModales from "./MensajesModales";

interface Vehiculo {
  nombre: string;
  precio: number;
  descripcion: string;
}

export default function CrearVehiculo() {
  const [vehiculo, setVehiculo] = useState<Vehiculo>({
    nombre: "",
    precio: 0,
    descripcion: "",
  });

  //para mensaje de alert
  const [estado, setEstado] = useState<boolean | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setVehiculo({
      ...vehiculo,
      [name]: name === "precio" ? parseFloat(value) || 0 : value,
    });
  };

  const saveVehiculo = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
    const response = await axios.post("http://localhost:8080/vehiculo", vehiculo);
        console.log("Vehículo guardado:", response.data);

            //cambiando el estado en caso de haber creado el vehiculo
            setEstado(true);

            setTimeout(() => {
                window.location.href = "/vehiculos";
            }, 2000);


        setVehiculo({ nombre: "", precio: 0, descripcion: "" }); // Limpiar campos
    } catch (error: any) {
    console.error("Error al guardar vehículo:", error.response?.data || error.message);
    alert("Error al crear vehículo");
    }
};

  return (
    <>
        {estado !== null && <MensajesModales estado={estado} />}
    <form onSubmit={saveVehiculo} className="">
      <div className="m-30 px-100 font-bold ">
        <div className="border shadow-xl flex flex-col p-10 gap-20 text-center bg-gray-700">

          <h1 className="text-white font-bold text-2xl">Registro de vehiculo</h1>

          <input
            value={vehiculo.nombre}
            onChange={handleChange}
            type="text"
            name="nombre"
            placeholder="Marca del vehículo ej: Toyota, Ford, etc"
            className="rounded-2xl bg-neutral-100 outline-neutral-200 outline-solid text-center p-2"
          />
          <textarea
            value={vehiculo.descripcion}
            onChange={handleChange}
            name="descripcion"
            placeholder="Descripción del vehículo"
            className="rounded-2xl bg-neutral-100 outline-neutral-200 outline-solid text-center p-2"
          />
          <input
            value={vehiculo.precio}
            onChange={handleChange}
            type="number"
            name="precio"
            placeholder="Ingrese el valor del alquiler del vehículo"
            className="rounded-2xl bg-neutral-100 outline-neutral-200 outline-solid text-center p-2"
          />
          <button
            type="submit"
            className="bg-indigo-500 shadow-lg shadow-indigo-500/50 mt-10 text-white rounded-2xl p-2 mx-auto cursor-pointer w-full hover:text-2xl"
        >
            Guardar vehículo
        </button>
        </div>
    </div>
    </form>
    </>
  );
}
