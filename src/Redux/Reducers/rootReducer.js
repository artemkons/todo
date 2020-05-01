import { ADD_TODO, CLOSE_TODO, COMPLETE_TODO, FILTER, CHANGE_FILTER} from "../actionType"


const initialState = {
    todos: [
        {text:"JOPA", id:0, complete: false}
    ],
    currentfilter: FILTER.ALL,
}

function todoApp(state = initialState, action){
    switch(action.type){
        case ADD_TODO:
            return ({...state, 
                todos: [
            ...state.todos, {
                text: action.text,
                id: action.id,
                complete: false
            }
            ]
        })
        case CLOSE_TODO:
            return ({...state,
                todos: state.todos.filter( e => e.id !== action.id)
        })
        case COMPLETE_TODO:
            return ({...state,
                todos: state.todos.map( function(element){
                    if(element.id === action.id){    
                        element.complete = !element.complete;
                    }
                        return element;
                })
            })
        case CHANGE_FILTER:
            return ({...state,
                currentfilter: action.filter
            })
    }
    
    return state
}

export default todoApp