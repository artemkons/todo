import { connect } from 'react-redux'
import TodoList from '../components/TodoList'

const mapStateToProps = state => ({
    todos: state.todos,
    filter: state.currentfilter
})

export default connect(mapStateToProps, null)(TodoList)