function Alert(props) {
    const { status, message } = props;
    const classes = ["alert", status]
    return (
        <div className={classes.join(" ")} role="alert">
            {message}
        </div>
    )
}
export default Alert