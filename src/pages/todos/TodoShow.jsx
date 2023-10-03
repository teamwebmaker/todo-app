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
    return (
        <section className="container-fluid">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{todo.title}</h5>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TodoShow