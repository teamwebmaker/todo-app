import {  useEffect, useState } from "react"
import Todo from "../../components/Todo"
import Navigation from "../../layouts/Navigation"
function TodoIndex (props) { 
    const [todos, setTodos] = useState(initTodos())

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
    return (
        <section className="container-fluid">
            <div className="container my-4">
                <Navigation />
            </div>
            <div className="container">
                <div className="row">
                    {todos.map((todo) => (
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