function Wrapped(props) {
    const {classes, children} = props;
    return (
        <div className={classes.join(" ")}>
            {children}
        </div>
    )
    
}

export default Wrapped