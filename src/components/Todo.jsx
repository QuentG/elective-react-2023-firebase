import React from 'react'
import { deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'

const Todo = ({ todo }) => {
    const updateTodo = async (id, completed) => {
        try {
            const docToUpdate = doc(db, 'todos', id)
            await updateDoc(docToUpdate, { completed })
        } catch (error) {
            console.error('Error updating document -> ', error)
        }
    }

    const removeTodo = async (id) => {
        try {
            const docToDelete = doc(db, 'todos', id)
            await deleteDoc(docToDelete)
        } catch (error) {
            console.error('Error deleting document -> ', error)
        }
    }

    return (
        <div>
            <h5>{todo.name}</h5> 
            <p>{todo.completed ? 'Oui' : 'Non'}</p>

            <input type="checkbox" checked={todo.completed} onChange={() => updateTodo(todo.id, !todo.completed)} />
            <button onClick={() => removeTodo(todo.id)}>Supprimer</button>

            <hr />
        </div>
    )
}

export default Todo