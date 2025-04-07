
export default function CrearVehiculo() {
    return (
        <>
            <form action="">
                <div className="text-2xl py-15 text-center mx-20">
                    <div className="border border-dotted rounded-2xl flex flex-col p-5 gap-5">
                        <label htmlFor="">Marca</label>
                        <input type="text" placeholder="Marca del vehiculo ej: Toyota, Ford etc" className="rounded-2xl bg-neutral-100 outline-neutral-200 outline-solid"/>
                        <label htmlFor="">Descripcion</label>
                        <textarea placeholder="Descripcion del vehiculo" className="rounded-2xl bg-neutral-100 outline-neutral-200 outline-solid"></textarea>
                        <label htmlFor="">Precio</label>
                        <input type="number" placeholder="Ingrese el valor del alquiler del vehiculo" className="rounded-2xl bg-neutral-100 outline-neutral-200 outline-solid"/>
                        <label htmlFor="">Imagen</label>
                        <input type="file" placeholder="Seleccione una imagen" className="rounded-2xl bg-neutral-100 outline-neutral-200 outline-solid"/>
                        <button className="bg-blue-500 mt-10 text-white rounded-2xl p-2">Guardar vehiculo</button>
                    </div>
                </div>
            </form>
        </>
    )
}