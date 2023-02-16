import React, { useEffect, useState } from 'react'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import './App.css'
import { db } from './firebase'
import Todo from './components/Todo'

const App = () => {
  const [todos, setTodos] = useState([])
  const [todoName, setTodoName] = useState('')

  const getTodos = async () => {
    const colect = collection(db, 'todos')
    const response = await getDocs(colect)
    const data = response.docs.map(doc => ({ id: doc.id, ...doc.data() }))

    setTodos(data)
  }

  useEffect(() => {
    getTodos()
  }, [todos])

  const onAddTodo = async (e) => {
    e.preventDefault()

    try {
      const colect = collection(db, 'todos')
      const doc = await addDoc(colect, {
        name: todoName,
        completed: false
      })

      console.log('Document written with ID -> ', doc.id)
    } catch (error) {
      console.error('Error adding document -> ', error)
    }

    setTodoName('')
  }

  return (
    <div className="App">
      <h1>Firebase Demo</h1>

      <form onSubmit={onAddTodo}>
        <input type="text" value={todoName} onChange={e => setTodoName(e.target.value)} />
        <button type="submit">Ajouter la todo</button>
      </form>
  
      {todos.length ? todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      )) : <span>Aucune todo</span>}

    </div>
  )
}

export default App