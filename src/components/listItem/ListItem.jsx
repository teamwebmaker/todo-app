
function ListItem(props) {
    const {todo, deleteTodo, toggleComplete, editTodo} = props
    const {id, title, completed} = todo
    const classes = ["list-group-item", "d-flex", "justify-content-between"]
    const iconClasses = ["bi"]
    const toggleButtonClasses = ["btn"]
    completed ? toggleButtonClasses.push("btn-secondary") : toggleButtonClasses.push("btn-warning")
    completed ? iconClasses.push("bi-toggle-on") : iconClasses.push("bi-toggle-off")
    return (
        <li className={classes.join(" ")}>
          <span className="d-flex">{title}</span>
          <span className="d-flex gap-2">
            <button type="button" className="btn btn-danger" onClick={() => deleteTodo(id)}>
              <i className="bi bi-trash3-fill"></i>
            </button>
            <button type="button" className={toggleButtonClasses.join(" ")} onClick={() => toggleComplete(id)}>
              <i className={iconClasses.join(" ")}></i>
            </button>
            <button type="button"  className="btn btn-info" onClick={() => editTodo(id)}>
              <i className="bi bi-pencil-square"></i>
            </button>
          </span>
        </li>
    )
  }
  
export default ListItem