import Wrapped from "../wrapped"
import Thumbnail from "../thumbnail"
function CartProductView(props) {
    const { product, deleteProductsFromCart } = props
    const { id, thumbnail, title, quantity, price } = product
    return(
        <Wrapped classes={["row"]}>
            <Wrapped classes={["col-lg-2", "col-md-4", "col-sm-6", "mb-4"]}>
                <Thumbnail image={thumbnail} classes={["img-thumbnail", "cart-image"]}/>
            </Wrapped>
            <Wrapped classes={["col-lg-2", "col-md-4", "col-sm-6", "mb-4"]}>
                {title}
            </Wrapped>
            <Wrapped classes={["col-lg-2", "col-md-4", "col-sm-6", "mb-4"]}>
                {quantity}
            </Wrapped>
            <Wrapped classes={["col-lg-2", "col-md-4", "col-sm-6", "mb-4"]}>
                {price}
            </Wrapped>
            <Wrapped classes={["col-lg-2", "col-md-4", "col-sm-6", "mb-4"]}>
                {quantity * price}
            </Wrapped>
            <Wrapped classes={["col-lg-2", "col-md-4", "col-sm-6", "mb-4"]}>
                <button type="button" className="btn btn-danger" onClick={() => deleteProductsFromCart(id)}>
                    <i className="bi bi-trash3-fill"></i>
                </button>
            </Wrapped>
        </Wrapped>
    )
}
export default CartProductView