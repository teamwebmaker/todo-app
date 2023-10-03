function Alert(props) {
    const {status, children} = props
    const classes = ['alert', status]
    return (
            <div className={classes.join(" ")} role="alert">
                {children}
            </div>
    )
}
export default Alert