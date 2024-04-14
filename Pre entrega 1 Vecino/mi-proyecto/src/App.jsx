import "./App.css"
import NavBar from "./componentes/NavBar"
import Brand from "./componentes/Brand"
import Jumbotron from "./componentes/ItemListContainer"






function App() {


  return (
    <div>
      <div className="barraNav">
      <Brand/>
        <NavBar/>
      </div>
      <Jumbotron greeting= "Bienvenido/a a La tienda Virtual de Pets & Love"  presentacion="Aquí encontrarás 
      todos los productos para el cuidado de tu mascota: Alimento de calidad, Ropa y Accesorios, Juguetes, 
      Medicamentos para el cuidado de su salud, y mucho más!"/>
    </div>
  )
}

export default App
