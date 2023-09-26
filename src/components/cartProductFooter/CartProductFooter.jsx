import Wrapped from "../wrapped"
import Thumbnail from "../thumbnail"
function CartProductFooter(props) {
    const {cartProducts, clearProductCart} = props
    const fullSum = cartProducts.reduce((accumulator, product) => {  
        return accumulator + (product.quantity * product.price)}, 0);
    return(
        <Wrapped classes={["row"]}>
            <Wrapped classes={["col-lg-2", "col-md-4", "col-sm-6", "mb-4"]}>
                <button type="button" className="btn btn-danger" disabled={!cartProducts.length} onClick={clearProductCart}>Clear Cart</button>
            </Wrapped>
            <Wrapped classes={["col-lg-2", "col-md-4", "col-sm-6", "mb-4"]}>
                
            </Wrapped>
            <Wrapped classes={["col-lg-2", "col-md-4", "col-sm-6", "mb-4"]}>
                
            </Wrapped>
            <Wrapped classes={["col-lg-2", "col-md-4", "col-sm-6", "mb-4"]}>
                
            </Wrapped>
            <Wrapped classes={["col-lg-2", "col-md-4", "col-sm-6", "mb-4"]}>
                {fullSum}
            </Wrapped>
        </Wrapped>
    )
}
export default CartProductFooter