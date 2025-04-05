import { Route, Routes } from "react-router"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import VehiculoCard from "./components/VehiculoCard"
import VehiculoInfo from "./components/VehiculoInfo"


function App() {

  return (
    <>

    <NavBar/>
    {/*Ruta para ver el listado de vehiculos inicio*/}
    <Routes>
      <Route path="/" element={
        <>
        <div className="py-20 text-black text-3xl text-center font-bold">
        <h1 className="text-4xl">Listado de vehiculos disponibles</h1>
      </div>
      <div className="container mx-auto">
      <div className="xl:grid xl:grid-cols-4 lg:grid-cols-3 md:grid md:grid-cols-2 gap-5">
        <VehiculoCard/>
      </div>
      </div>
      </>
      }/>
      {/*Ruta para ver el listado de vehiculos final*/}
      
      <Route path="/vehiculo/:id" element={<VehiculoInfo />} />

      </Routes>

      <Footer/>
    </>
  )
}

export default App
