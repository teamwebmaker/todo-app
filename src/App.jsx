import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/home/HomePage'
import TodoIndex from './pages/todos/TodoIndex'
import TodoCreate from './pages/todos/TodoCreate'
import TodoShow from './pages/todos/TodoShow'
import TodoEdit from './pages/todos/TodoEdit'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/todos',
    element: <TodoIndex/>
  },
  {
    path: '/todos/create',
    element: <TodoCreate/>
  },
  {
    path: '/todos/:id',
    element: <TodoShow/>
  },
  {
    path: '/todos/:id/edit',
    element: <TodoEdit/>
  }
])

function App() {
    return (
      <RouterProvider router={router} />
    )
}

export default App
