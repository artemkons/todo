import { connect } from 'react-redux'
import { completeTodo } from '../Redux/action'
import ToDoItemCheckbox from '../components/ToDoItemCheckbox'

const mapDispatchToProps = dispatch => ({
    onChange: id => dispatch( completeTodo( id ) )
})

export default connect(null, mapDispatchToProps)(ToDoItemCheckbox)