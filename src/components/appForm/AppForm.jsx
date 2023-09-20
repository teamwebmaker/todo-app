
function AppForm(props) {
    const {changeTitleHandler, createTodo, title} = props
    return (
        <form className="w-100" onSubmit={createTodo}>
            <div className="row">
                <div className="col-md-10">
                    <input type="text" value={title} className="form-control w-100 d-block" placeholder="Create Todo" onChange={changeTitleHandler} />
                </div>
                <div className="col-md-2">
                    <button type="submit" className="btn btn-primary" >
                        <i className="bi bi-plus-circle-fill"></i>
                    </button>
                </div>
            </div>
        </form>
    )
}
export default AppForm