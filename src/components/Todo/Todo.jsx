function Todo(props){
    const {todo} = props
    const {id, title, completed, status, action} = todo
    return (
        <div className="card">
            <div className="card-header">
                <h2 className="card-title">{title}</h2>
            </div>
            <div className="card-body">
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" className="btn btn-danger">Show</button>
                <button type="button" className="btn btn-warning">Edit</button>
                <button type="button" className="btn btn-success">Delete</button>
            </div>
            </div>
        </div>
    )
}
export default Todo