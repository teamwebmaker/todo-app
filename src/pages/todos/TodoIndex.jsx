import {  useState } from "react"
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
    return (
        <section className="container-fluid">
            <div className="container">
                <Navigation />
            </div>
            <div className="container">
                <div className="row">
                    {todos.map((todo) => (
                        <div className="col-lg-4 md-6 mb-4" key={todo.id}>
                            <Todo todo={todo}/>
                        </div>
                    )) }
                </div>
            </div>
        </section>
    )
}
export default TodoIndex