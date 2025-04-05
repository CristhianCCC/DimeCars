
export default function NavBar() {

    const imagenNav ="/images/DimeCarsLogo.png"

    return (
        <nav className="bg-black py-4">
            <div className="container max-w-6xl mx-auto flex items-center justify-between">
            <a href="">
            <img src={imagenNav} className="h-40 w-50" alt="Logo DIMECARS" />
            </a>

      <ul className="hidden lg:flex lg:gap-10">
        <a href="#" className="text-white hover:underline">Inicio</a>
        <a href="#" className="text-white hover:underline">Vehículos</a>
        <a href="#" className="text-white hover:underline">Contacto</a>
      </ul>

      <ul className="lg:hidden flex flex-col items-center text-center gap-2 w-full">
        <a href="#" className="text-white hover:underline">Inicio</a>
        <a href="#" className="text-white hover:underline">Vehículos</a>
        <a href="#" className="text-white hover:underline">Contacto</a>
      </ul>
    </div>
  </nav>
    )
}   