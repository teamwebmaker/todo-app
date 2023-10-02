import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/home/HomePage'
import TodoIndex from './pages/todos/TodoIndex'
import TodoCreate from './pages/todos/TodoCreate'

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
  }
])

function App() {
    return (
      <RouterProvider router={router}/>
    )
}

export default App
