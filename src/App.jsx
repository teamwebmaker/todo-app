import { useState } from 'react'
import './App.css'
import AppForm from './components/appForm'
import EditForm from './components/editForm'
import ViewTodos from './components/view-todos'
import Filter from './components/filter'
import Statistic from './components/statistic'
import Alert from './components/alert'


function App() {
  const [todos, setTodos] = useState([])
  const [filteredTodos, setFilteredTodos] = useState([])
  const [title, setTitle] = useState("")
  const [visibilityEditForm, setVisibilityEditForm] = useState(false)
  const [selectedTodoId, setSelectedTodoId] = useState(null)
  const [dialog, setDialog] = useState(null)
  function changeTitleHandler(e) {
    setTitle(e.target.value)
  }

  function createTodo(e){
    e.preventDefault()
    let info = {}
    if (title.length >= 3) {
      const todo = {
        id: crypto.randomUUID(),
        title: title,
        completed: false
      }
      setTodos([...todos, todo])
      setTitle("")
      info = {
        message: "created successfully",
        status: "alert-success"
      }
    } else {
      info = {
        message: "please enter minimum 3 letters",
        status: "alert-warning"
      }
    }
    setDialog(info)
    setTimeout(() => {
      setDialog(null)
    }, 3000);
  }

  function deleteTodo(id) {
    if(confirm('Are you sure delete this todo?')) {
      setTodos(todos.filter((todo) => todo.id !== id))
      setDialog({
        message: "deleted successfully",
        status: "alert-success"
      })
      setTimeout(() => {
        setDialog(null)
      }, 3000);
    }
  }

  function toggleComplete(id) {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  function editTodo(id) {
    setVisibilityEditForm(true)
    setSelectedTodoId(id)
    const todo = todos.find((todo) => todo.id === id)
    setTitle(todo.title)
  }

  function updateTodo(e) {
    e.preventDefault()
    setTodos(todos.map((todo) => todo.id === selectedTodoId ? {...todo, title} : todo))
    setTitle("")
    setVisibilityEditForm(false)
    setDialog({
      message: "updated successfully",
      status: "alert-success"
    })
    setTimeout(() => {
      setDialog(null)
    }, 3000);
  }

  function filtered(e) {
    switch(e.target.value) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed))
      break;
      case "running":
        setFilteredTodos(todos.filter((todo) => !todo.completed))
      break;
      default:
        setFilteredTodos([])
    }
  }

  return (
    <>
      { dialog ? <Alert {...dialog} /> : null }
      {visibilityEditForm ? <EditForm 
                                      title={title}
                                      changeTitleHandler={changeTitleHandler} 
                                      updateTodo={updateTodo}
                                      /> 
                                      : 
                            <AppForm 
                                      changeTitleHandler={changeTitleHandler}  
                                      createTodo={createTodo} 
                                      title={title}
                                      />
                                      }
      <Filter filtered={filtered} disabled={!todos.length}/>
      <ViewTodos todos={todos} 
                filteredTodos={filteredTodos}
                deleteTodo={deleteTodo} 
                toggleComplete={toggleComplete} 
                editTodo={editTodo}
              />
      { todos.length ? <Statistic todos={todos} /> : null }

    </>
  )
}

export default App
