import "./css/itemListContainer.css"
function Jumbotron({ greeting, presentacion }){
    return (
        <div>
            <div className="jumbotron">
            <h2>{greeting}</h2>
            <p>{presentacion}</p>
            </div>
        </div>
    )
}
export default Jumbotron