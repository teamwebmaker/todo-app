import Wrapped from "../wrapped"
import Thumbnail from "../thumbnail"
function CartProductHeader(props) {
    const {headers} = props
    const [image, title, quantity, price, fullPrice, modify] = headers
    return(
        <Wrapped classes={["row"]}>
            <Wrapped classes={["col-lg-2", "col-md-4", "col-sm-6", "mb-4"]}>
                <h5>{image}</h5>
            </Wrapped>
            <Wrapped classes={["col-lg-2", "col-md-4", "col-sm-6", "mb-4"]}>
                <h5>{title}</h5>
            </Wrapped>
            <Wrapped classes={["col-lg-2", "col-md-4", "col-sm-6", "mb-4"]}>
                <h5>{quantity}</h5>
            </Wrapped>
            <Wrapped classes={["col-lg-2", "col-md-4", "col-sm-6", "mb-4"]}>
                <h5>{price}</h5>
            </Wrapped>
            <Wrapped classes={["col-lg-2", "col-md-4", "col-sm-6", "mb-4"]}>
                <h5>{fullPrice}</h5>
            </Wrapped>
            <Wrapped classes={["col-lg-2", "col-md-4", "col-sm-6", "mb-4"]}>
                <h5>{modify}</h5>
            </Wrapped>
        </Wrapped>
    )
}
export default CartProductHeader