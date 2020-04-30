import React from 'react'
import TodoItem from './TodoItem'
import TodoItemContainer from '../container/ToDoItemContainer' 

import Grid from '@material-ui/core/Grid'

const TodoList = ({ todos }) => {
return <Grid container spacing = {1}>
    { todos.map(e => <TodoItemContainer text = { e.text } id = { e.id } key = { e.id } complete = { e.complete }/>) } 
    </Grid>
}

export default TodoList