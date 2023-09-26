import Wrapped from "../wrapped"
import Thumbnail from "../thumbnail"

function Product(props) {
    const {product, addToCart, showProduct} = props
    const {id, title, price, rating, brand, category, thumbnail, images} = product
    return (
        <div className="card">
            <div className="card-header">
                <img src={thumbnail} className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Price: {price}</li>
                    <li className="list-group-item">Rating: {rating}</li>
                    <li className="list-group-item">Brand: {brand}</li>
                    <li className="list-group-item">Category: {category}</li>
                </ul>
                <Wrapped classes={["row"]}>
                    {images.map((image) => {
                        return (
                            <Wrapped classes={["col-lg-4", "col-6", "mb-4"]} key={crypto.randomUUID()}> 
                                <Thumbnail image={image} classes={["img-thumbnail"]} />
                            </Wrapped>   
                        )
                    } )}
                </Wrapped>
            </div>
            <div className="card-footer">
                <button type="button" className="btn btn-success" onClick={() => addToCart(id)}>add to cart</button>
                <button type="button" className="btn btn-warning" onClick={() => showProduct(id)}>
                    show more
                </button>
            </div>
        </div>
    )
}
export default Product