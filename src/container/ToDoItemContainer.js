import { connect } from 'react-redux'
import { completeTodo } from '../Redux/action'
import TodoItem from '../components/TodoItem'

const mapDispatchToProps = dispatch => ({
    onClick: id => dispatch( completeTodo( id ) )
})

export default connect(null,mapDispatchToProps)(TodoItem)