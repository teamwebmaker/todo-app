import ListItem from "../listItem/ListItem";
function ViewTodos(props) {
    const {todos, filteredTodos, deleteTodo, toggleComplete, editTodo} = props;
    const todoList = filteredTodos.length ? filteredTodos : todos
    return (
        <ul className="list-group my-4">
            {todoList.map((todo) =>  <ListItem 
                key={todo.id}  
                todo={todo} 
                deleteTodo={deleteTodo}
                toggleComplete={toggleComplete}
                editTodo={editTodo}
            />)}
        </ul>
    )
}
export default ViewTodos