import { useState, useEffect } from "react"
import VehiculoService from "../services/VehiculoService";
import { Vehiculo } from "../types";
import { useParams } from "react-router-dom";
import FormatCurrency from "../helpers";

export default function VehiculoInfo () {

    const {id} = useParams();

const imagen = "/images/Corolla-sedan-descripcion.jpg"

    const [vehiculoId, setVehiculoId] = useState<Vehiculo| null>(null);

    useEffect(() => {
        if (id) {
        VehiculoService.getVehiculoById(Number(id))
            .then((response: { data: Vehiculo }) => {
            setVehiculoId(response.data);
            })
            .catch((error) => {
                console.log("Error al obtener vehículo:", error);
            });
        }
        }, [id]);
    
        if (!vehiculoId) {
        return <p className="text-center mt-10">Cargando información del vehículo...</p>;
        }

    return (
        <>
            <div className="p-20 lg:flex flex-row">
                <img src={imagen} alt="imagen corolla" className="rounded-2xl w-200"/>
            <div className="text-center py-15 px-5 font-bold w-full">
                <h1 className="text-4xl">{vehiculoId.nombre}</h1>
                <p className="text-2xl pt-10 text-gray-700 mx-auto">{vehiculoId.descripcion}</p>
                <p className="font-bold text-4xl text-lime-600 pt-10">Precio {FormatCurrency(vehiculoId.precio)}</p>

                <button className="bg-yellow-500 mt-20 w-full py-5 text-2xl text-white font-bold cursor-pointer border border-2xl rounded-2xl">Editar</button>
                <button className="bg-red-500 mt-5 w-full py-5 text-2xl text-white font-bold cursor-pointer border border-2xl rounded-2xl">Eliminar</button>
            </div>
            </div>
        </>      
    )
}