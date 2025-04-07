import { Link } from "react-router"

export default function NavBar() {

    const imagenNav ="/images/DimeCarsLogo.png"

    return (
        <nav className="bg-black py-4">
            <div className="container max-w-6xl mx-auto flex items-center justify-between">
            <Link to = "/vehiculos">
            <img src={imagenNav} className="h-40 w-50" alt="Logo DIMECARS" />
            </Link>

      <ul className="hidden lg:flex lg:gap-10">
        <Link to="/" className="text-white hover:underline">Inicio</Link>
        <Link to="/vehiculos" className="text-white hover:underline">Vehículos</Link>
        <Link to= "/contacto" className="text-white hover:underline">Contacto</Link>
      </ul>

      <ul className="lg:hidden flex flex-col items-center text-center gap-2 w-full">
        <Link to = "/" className="text-white hover:underline">Inicio</Link>
        <Link to = "/vehiculos" className="text-white hover:underline">Vehículos</Link>
        <Link to = "/contacto" className="text-white hover:underline">Contacto</Link>
      </ul>
    </div>
  </nav>
    )
}   