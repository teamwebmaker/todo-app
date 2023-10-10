import {  useEffect, useState } from "react"
import Todo from "../../components/Todo"
import Navigation from "../../layouts/Navigation"
import Page from "../../components/page"
function TodoIndex (props) { 
    const prePage = 6
    const [status, setStatus] = useState("all")
    const [action, setAction] = useState("all")
    const [todos, setTodos] = useState(initTodos())
    const [filteredTodos, setFilteredTodos] = useState([])
    const [dysplayTodoList, setDysplayTodoList] = useState(initTodos())
    const [renderTodoList, setRenderTodoList] = useState(initRenderTodoList())
    const [pages, setPages] = useState(generateNumbersArray(1, Math.ceil(dysplayTodoList.length / prePage)))
    const [currentPage, setCurrentPage] = useState(1)
    function initTodos(){
        if(localStorage.hasOwnProperty('todos')){
            return JSON.parse(localStorage.getItem('todos'))
        }
        return []
    }
    function initRenderTodoList(){
        if(localStorage.hasOwnProperty('todos')){
            return JSON.parse(localStorage.getItem('todos')).slice(0, prePage)
        }
        return []
    }
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    function destroyTodo(id) {
        const updatedTodos = todos.filter(todo => todo.id !== id)
        if(confirm('Are you sure you want to destroy this TODO?')) {
            setTodos(updatedTodos)
            setDysplayTodoList(updatedTodos)
            setRenderTodoList(updatedTodos.slice(0, prePage))
            setPages(generateNumbersArray(1, Math.ceil(updatedTodos.length / prePage)))
        }
    }
    function filterTodos(e){
        let filtered = todos
        setStatus(e.target.value)
        if(action !== "all"){
            filtered = filtered.filter((todo) => todo.completed === !!Number(action))
        }
        switch (e.target.value){
            case 'low':
                filtered = filtered.filter((todo) => todo.status === 'low')
                setDysplayTodoList(filtered)
                setRenderTodoList(filtered.slice(0, prePage))
                generateNumbersArray(1, Math.ceil(filtered.length / prePage))
                setPages(generateNumbersArray(1, Math.ceil(filtered.length / prePage)))
            break;
            case 'middle':
                filtered = filtered.filter((todo) => todo.status === 'middle')
                setDysplayTodoList(filtered)
                setRenderTodoList(filtered.slice(0, prePage))
                setPages(generateNumbersArray(1, Math.ceil(filtered.length / prePage)))
            break;
            case 'high':
                filtered = filtered.filter((todo) => todo.status === 'high')
                setDysplayTodoList(filtered)
                setRenderTodoList(filtered.slice(0, prePage))
                setPages(generateNumbersArray(1, Math.ceil(filtered.length / prePage)))
            break;
            default:
                setDysplayTodoList(todos)
                setRenderTodoList(todos.slice(0, prePage))
                setPages(generateNumbersArray(1, Math.ceil(todos.length / prePage)))
        }
    }
    function filterByCompleted(e){
        let filtered = todos
        setAction(e.target.value)
        if(status !== "all"){
            filtered = filtered.filter((todo) => todo.status === status)
        }
        switch (e.target.value){
            case '1':
                filtered = filtered.filter((todo) => todo.completed)
                setDysplayTodoList(filtered)
                setRenderTodoList(filtered.slice(0, prePage))
                generateNumbersArray(1, Math.ceil(filtered.length / prePage))
                setPages(generateNumbersArray(1, Math.ceil(filtered.length / prePage)))
            break;
            case '0':
                filtered = filtered.filter((todo) => !todo.completed)
                setDysplayTodoList(filtered)
                setRenderTodoList(filtered.slice(0, prePage))
                setPages(generateNumbersArray(1, Math.ceil(filtered.length / prePage)))
            break;
            default:
                setDysplayTodoList(todos)
                setRenderTodoList(todos.slice(0, prePage))
                setPages(generateNumbersArray(1, Math.ceil(todos.length / prePage)))
        }
    }
    function generateNumbersArray(from, to) {
        const numbers = []
        for(let i=from; i <= to; i++) numbers.push(i)
        return numbers
    }
    function paginate(page){
        const from = (page - 1) * prePage
        const to = page * prePage
        setRenderTodoList(dysplayTodoList.slice(from, to))   
        setCurrentPage(page)
    }
    function toggleComplete(id){
        const updatedTodos = todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo)
        setTodos(updatedTodos)
        setDysplayTodoList(updatedTodos)
        setRenderTodoList(updatedTodos.slice(0, prePage))
        setPages(generateNumbersArray(1, Math.ceil(updatedTodos.length / prePage)))
    }
    return (
        <section className="container-fluid">
            <div className="container my-4">
                <Navigation />
            </div>
            <div className="container my-4">
                <select className="form-select" defaultValue={status} onChange={filterTodos}>
                    <option value="all">All Status</option>
                    <option value="low">Low</option>
                    <option value="middle">Middle</option>
                    <option value="high">High</option>
                </select>
            </div>
            <div className="container my-4">
                <select className="form-select" defaultValue={action} onChange={filterByCompleted}>
                    <option value="all">All</option>
                    <option value="1">Completed</option>
                    <option value="0">Running</option>
                </select>
            </div>
            <div className="container">
                <div className="row">
                    {renderTodoList.map((todo) => (
                        <div className="col-lg-4 md-6 mb-4" key={todo.id}>
                            <Todo todo={todo} destroyTodo={destroyTodo} toggleComplete={toggleComplete}/>
                        </div>
                    )) }
                </div>
            </div>
            <div className="container">
                <ul className="pagination gap-2">
                    {pages.map((page) => <Page page={page} currentPage={currentPage} paginate={paginate} key={crypto.randomUUID()}/>)}
                </ul>
            </div>
        </section>
    )
}
export default TodoIndex