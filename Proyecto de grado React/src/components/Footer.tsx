

export default function Footer () {
    return (
        <>
            <div className="h-full bg-black p-10 mt-30 text-white text-center">
                <ul className=" d-flex flex flex-row justify-center gap-5 cursor-pointer">
                    <a className=" hover:underline">Inicio</a>
                    <a className=" hover:underline">Contactanos</a>
                </ul>
                <p className="pt-5">Copyright &copy; 2025 DimeCars. Todos los derechos reservados.</p>
            </div>
        </>
    )
}