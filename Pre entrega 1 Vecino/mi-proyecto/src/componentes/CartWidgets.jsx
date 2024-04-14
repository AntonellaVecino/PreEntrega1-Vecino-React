import IconoCarrito from "./CartIcon";
import "./css/CartWidgets.css"

function Carrito () {
    return (
        <div className="carrito">
            <IconoCarrito width={"40px"} height={"40px"}/>
            <span>5</span>
        </div>
    )
}
export default Carrito