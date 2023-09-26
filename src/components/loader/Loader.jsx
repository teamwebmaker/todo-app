function Loader(props) {
    const {classes} = props;
    return (
    <div className={classes.join(" ")} role="status">
        <span className="visually-hidden">Loading...</span>
    </div>
    )
}

export default Loader