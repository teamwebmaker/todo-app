import { useState } from 'react'
import './App.css'
import AppForm from './components/appForm'
import EditForm from './components/editForm'
import ViewTodos from './components/view-todos'
import Filter from './components/filter'


function App() {
  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState("")
  const [visibilityEditForm, setVisibilityEditForm] = useState(false)
  const [selectedTodoId, setSelectedTodoId] = useState(null)
  function changeTitleHandler(e) {
    setTitle(e.target.value)
  }

  function createTodo(e){
    e.preventDefault()
    const todo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false
    }
    setTodos([...todos, todo])
    setTitle("")
  }

  function deleteTodo(id) {
    if(confirm('Are you sure delete this todo?')) {
      setTodos(todos.filter((todo) => todo.id !== id))
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
  }
  return (
    <>


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
      <Filter />
      <ViewTodos todos={todos} 
                deleteTodo={deleteTodo} 
                toggleComplete={toggleComplete} 
                editTodo={editTodo}
              />
    </>
  )
}

export default App
