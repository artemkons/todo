import { ADD_TODO, CLOSE_TODO, COMPLETE_TODO, CHANGE_FILTER } from './actionType'

let nextid = 1
export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        text,
        id: nextid++
    }
}

export const closeTodo = (id) => {
    return {
        type: CLOSE_TODO,
        id
    }
}

export const completeTodo = (id) => {
    return {
        type: COMPLETE_TODO,
        id
    }
}

export const changeFilter = (filter) => {
    return {
        type: CHANGE_FILTER,
        filter
    }
}