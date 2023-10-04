import { useState } from "react"
import { useParams} from "react-router-dom"

function TodoShow () {
    const [todos, setTodos] = useState(initTodos())
    function initTodos(){
        if(localStorage.hasOwnProperty('todos')){
            return JSON.parse(localStorage.getItem('todos'))
        }
        return []
    }
    const {id} = useParams()
    const todo = todos.find((item) => item.id === id)
    const statusSwitcher = {
        low: "bg-info",
        middle: "bg-warning",
        high: "bg-danger",
    }
    const cardClasses = ["card", statusSwitcher[todo.status]]
    return (
        <section className="container-fluid">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className={cardClasses.join(" ")}>
                            <div className="card-header">
                                <h2 className="card-title">{todo.title}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TodoShow