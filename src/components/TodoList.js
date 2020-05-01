import React from 'react'
import TodoItemContainer from '../container/ToDoItemContainer' 
import { FILTER } from '../Redux/actionType'

import Grid from '@material-ui/core/Grid'

const TodoList = ({ todos, filter }) => {
let visibletodos

switch(filter){
    case FILTER.ALL:
        visibletodos = todos
        break
    case FILTER.COMPLETED:
        visibletodos = todos.filter( el => el.complete ? true : false)
        break
    case FILTER.UNCOMPLETED:
        visibletodos = todos.filter( el => el.complete ? false : true )
        
}
return <Grid container spacing = {1}>
    { visibletodos.map(e => <TodoItemContainer text = { e.text } id = { e.id } key = { e.id } complete = { e.complete }/>) } 
    </Grid>
}

export default TodoList