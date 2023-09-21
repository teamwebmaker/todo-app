function Statistic(props) {
    const { todos } = props;
return (
    <div className="row">
        <div className="col-md-4">
            all Todos - {todos.length}
        </div>
        <div className="col-md-4">
            completed Todos - {todos.filter((todo) => todo.completed).length}          
        </div>
        <div className="col-md-4">
            running Todos - {todos.filter((todo) => !todo.completed).length}
        </div>
    </div>
)
}

export default Statistic