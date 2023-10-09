import { useNavigate } from "react-router-dom";
function Todo(props){
    const {todo, destroyTodo, toggleComplete} = props
    const {id, title, completed, status, action} = todo
    const statusSwitcher = {
        low: "bg-info",
        middle: "bg-warning",
        high: "bg-danger",
    }
    const cardClasses = ["card", statusSwitcher[status]]
    const navigate = useNavigate();
    const deleteUrl = ["/todos", id].join("/")
    const editUrl = ["/todos", id, 'edit'].join("/")
    const completedIconClasses = ["bi"]
    const completedButtonClasses = ["btn", "w-100"]
    if(completed) {
        completedIconClasses.push("bi-person-check-fill")
        completedButtonClasses.push("btn-secondary")
    } else {
        completedIconClasses.push("bi-person-walking")
        completedButtonClasses.push("btn-primary")
    }
    
    // const route = `/todos/${id}`
    return (
        <div className={cardClasses.join(" ")}>
            <div className="card-header">
                <h2 className="card-title">{title}</h2>
            </div>
            <div className="card-body">
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" className="btn btn-success" onClick={() => navigate(deleteUrl)}>Show</button>
                    <button type="button" className="btn btn-warning" onClick={() => navigate(editUrl)}>Edit</button>
                    <button type="button" className="btn btn-danger" onClick={() => destroyTodo(id)}>Delete</button>
                </div>
            </div>
            <div className="card-footer">
                    <button type="button" className={completedButtonClasses.join(" ")} onClick={() => toggleComplete(id)}>
                        <i className={completedIconClasses.join(" ")}></i>
                    </button>
            </div>
        </div>
    )
}
export default Todo