import {  useEffect, useState } from "react"
import Todo from "../../components/Todo"
import Navigation from "../../layouts/Navigation"
import Page from "../../components/page"
function TodoIndex (props) { 
    const prePage = 6
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
        let filtered = []
        switch (e.target.value){
            case 'low':
                if (filteredTodos.length) filtered = filteredTodos.filter((todo) => todo.status === 'low')
                else filtered =  todos.filter((todo) => todo.status === 'low')
                setFilteredTodos(filtered)
                setDysplayTodoList(filtered)
                setRenderTodoList(filtered.slice(0, prePage))
                generateNumbersArray(1, Math.ceil(filtered.length / prePage))
                setPages(generateNumbersArray(1, Math.ceil(filtered.length / prePage)))
            break;
            case 'middle':
                if (filteredTodos.length) filtered = filteredTodos.filter((todo) => todo.status === 'middle')
                else filtered =  todos.filter((todo) => todo.status === 'middle')
                setFilteredTodos(filtered)
                setDysplayTodoList(filtered)
                setRenderTodoList(filtered.slice(0, prePage))
                setPages(generateNumbersArray(1, Math.ceil(filtered.length / prePage)))
            break;
            case 'high':
                if (filteredTodos.length) filtered = filteredTodos.filter((todo) => todo.status === 'high')
                else filtered =  todos.filter((todo) => todo.status === 'high')
                setFilteredTodos(filtered)
                setDysplayTodoList(filtered)
                setRenderTodoList(filtered.slice(0, prePage))
                setPages(generateNumbersArray(1, Math.ceil(filtered.length / prePage)))
            break;
            default:
                setFilteredTodos([])
                setDysplayTodoList(todos)
                setRenderTodoList(todos.slice(0, prePage))
                setPages(generateNumbersArray(1, Math.ceil(todos.length / prePage)))
        }
    }
    function filterByCompleted(e){
        let filtered = []
        switch (e.target.value){
            case 'completed':
                if (filteredTodos.length) filtered = filteredTodos.filter((todo) => todo.completed)
                else filtered =  todos.filter((todo) => todo.completed)
                setFilteredTodos(filtered)
                setDysplayTodoList(filtered)
                setRenderTodoList(filtered.slice(0, prePage))
                generateNumbersArray(1, Math.ceil(filtered.length / prePage))
                setPages(generateNumbersArray(1, Math.ceil(filtered.length / prePage)))
            break;
            case 'running':
                if (filteredTodos.length) filtered = filteredTodos.filter((todo) => !todo.completed)
                else filtered =  todos.filter((todo) => !todo.completed)
                setFilteredTodos(filtered)
                setDysplayTodoList(filtered)
                setRenderTodoList(filtered.slice(0, prePage))
                setPages(generateNumbersArray(1, Math.ceil(filtered.length / prePage)))
            break;
            default:
                setFilteredTodos([])
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
                <select className="form-select" onChange={filterTodos}>
                    <option value="all">All Status</option>
                    <option value="low">Low</option>
                    <option value="middle">Middle</option>
                    <option value="high">High</option>
                </select>
            </div>
            <div className="container my-4">
                <select className="form-select" onChange={filterByCompleted}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="running">Running</option>
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
                <ul className="pagination">
                    {pages.map((page) => <Page page={page} currentPage={currentPage} paginate={paginate} key={crypto.randomUUID()}/>)}
                </ul>
            </div>
        </section>
    )
}
export default TodoIndex