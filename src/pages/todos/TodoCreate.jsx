import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import TodoCreateForm from "../../components/todoCreate"
import Navigation from "../../layouts/Navigation"
import Alert from "../../components/alert";
function TodoCreate () {
    const [todos, setTodos] = useState(initTodos())
    const [alertProps, setAlertProps] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const [todoFormData, setTodoFromData] = useState({
        todoTitle: '',
        todoStatus: 'low'
    })

    function initTodos(){
        if(localStorage.hasOwnProperty('todos')){
            return JSON.parse(localStorage.getItem('todos'))
        }
        return []
    }

    function storeTodo(e){
        e.preventDefault()
        const todo = {
            id: crypto.randomUUID(),
            title: todoFormData.todoTitle,
            completed: false,
            status: todoFormData.todoStatus,
            action: 'waiting'
        }
        setTodos([...todos, todo])
        setTodoFromData({
            todoTitle: '',
            todoStatus: 'low'
        })
        setAlertProps({
            status: "alert-success",
            message: "Todo created successfully"
        })
        setTimeout(() => {
            navigate('/todos')
        }, 3000)
    }

    function todoFromHandle(e){
        setTodoFromData({
            ...todoFormData, 
            [e.target.name]: e.target.value
        })
    }
    return (
        <section className="container-fluid">
            <div className="container my-4">
                <Navigation />
            </div>
            <div className="container">
                {alertProps ? <Alert {...alertProps}>
                    {alertProps.message} 
                </Alert> : null}
                <div className="row">
                    <div className="col-md-6">
                        <TodoCreateForm formData={todoFormData} 
                                        todoFromHandle={todoFromHandle} 
                                        storeTodo={storeTodo}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TodoCreate