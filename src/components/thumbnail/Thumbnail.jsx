
function Thumbnail (props) {
    const {image, classes} = props;
    return (
        <img src={image} className={classes.join(" ")} alt="..." />
    )
}

export default Thumbnail