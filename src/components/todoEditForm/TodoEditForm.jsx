import { useState, useEffect } from 'react'
function TodoEditForm(props){
    const {id, setAlertProps} = props
    const [todos, setTodos] = useState(initTodos())
    const todo = todos.find((todo) => todo.id === id)
    const [todoFormData, setTodoFromData] = useState({
        todoTitle: todo.title,
        todoStatus: todo.status
    })

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    function initTodos(){
        if(localStorage.hasOwnProperty('todos')){
            return JSON.parse(localStorage.getItem('todos'))
        }
        return []
    }
    
    function todoFromHandle(e){
        setTodoFromData({
            ...todoFormData, 
            [e.target.name]: e.target.value
        })
    }

    function updateTodo(e) {
        e.preventDefault()
        const updateTodo = {
            id,
            title: todoFormData.todoTitle,
            completed: false,
            status: todoFormData.todoStatus,
            action: 'waiting'
        }
        setTodos(todos.map((todo) => todo.id === updateTodo.id ? updateTodo : todo))
        setTimeout(() => {
            setAlertProps(null)
        }, 1500)
        setAlertProps({status: "alert-success", message: "todo updated successfully"})
    }   

    return (
        <form onSubmit={updateTodo}>
        <div className="mb-3">
            <input type="text" className="form-control" value={todoFormData.todoTitle} name="todoTitle" onChange={todoFromHandle}/>
        </div>
        <div className="row">
            <div className="col-md-6">
                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check" name="todoStatus" 
                        id="low"  
                        value="low" 
                        onChange={todoFromHandle}
                        checked={todoFormData.todoStatus === "low" ? true : false}/>
                    <label className="btn btn-outline-primary" htmlFor="low">Low</label>

                    <input type="radio" className="btn-check" name="todoStatus" 
                            id="middle" 
                            value="middle" 
                            onChange={todoFromHandle}
                            checked={todoFormData.todoStatus === "middle" ? true : false}/>
                    <label className="btn btn-outline-primary" htmlFor="middle">Middle</label>

                    <input type="radio" className="btn-check" name="todoStatus" 
                    id="high" 
                    value="high" 
                    onChange={todoFromHandle}
                    checked={todoFormData.todoStatus === "high" ? true : false}/>
                    <label className="btn btn-outline-primary" htmlFor="high">High</label>
                </div>
            </div>
        </div>
        <button type="submit" className="btn btn-primary">Update Todo</button>
    </form>
    )
}
export default TodoEditForm