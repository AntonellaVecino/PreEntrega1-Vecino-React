import Carrito from "./CartWidgets";
import Header from "./CategoryList";
import "./css/NavBar.css"


function NavBar () {
    return(
        <div>
            <nav>
            <Header/>
            <Carrito/>
            </nav>
        </div>
    )
}
export default NavBar;