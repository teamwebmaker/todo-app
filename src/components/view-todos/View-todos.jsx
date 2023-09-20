import ListItem from "../listItem/ListItem";
function ViewTodos(props) {
    const {todos, deleteTodo, toggleComplete, editTodo} = props;
    return (
        <ul className="list-group my-4">
            {todos.map((todo) =>  <ListItem 
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