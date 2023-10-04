import {  useEffect, useState } from "react"
import Todo from "../../components/Todo"
import Navigation from "../../layouts/Navigation"
function TodoIndex (props) { 
    const [todos, setTodos] = useState(initTodos())
    const [filteredTodos, setFilteredTodos] = useState([])
    const todoList = filteredTodos.length ? filteredTodos : todos
    function initTodos(){
        if(localStorage.hasOwnProperty('todos')){
            return JSON.parse(localStorage.getItem('todos'))
        }
        return []
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    function destroyTodo(id) {
        if(confirm('Are you sure you want to destroy this TODO?')) {
            setTodos(todos.filter(todo => todo.id !== id))
        }
    }
    function filterTodos(e){
        switch (e.target.value){
            case 'low':
                setFilteredTodos(todos.filter((todo) => todo.status === 'low'))
            break;
            case 'middle':
                setFilteredTodos(todos.filter((todo) => todo.status === 'middle'))
            break;
            case 'high':
                setFilteredTodos(todos.filter((todo) => todo.status === 'high'))
            break;
            default:
            setFilteredTodos([])
        }
    }
    return (
        <section className="container-fluid">
            <div className="container my-4">
                <Navigation />
            </div>
            <div className="container my-4">
                <select className="form-select" onChange={filterTodos}>
                    <option value="all">All</option>
                    <option value="low">Low</option>
                    <option value="middle">Middle</option>
                    <option value="high">High</option>
                </select>
            </div>
            <div className="container">
                <div className="row">
                    {todoList.map((todo) => (
                        <div className="col-lg-4 md-6 mb-4" key={todo.id}>
                            <Todo todo={todo} destroyTodo={destroyTodo}/>
                        </div>
                    )) }
                </div>
            </div>
        </section>
    )
}
export default TodoIndex