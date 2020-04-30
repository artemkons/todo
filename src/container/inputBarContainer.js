import InputBar from '../components/InputBar'
import { addTodo } from '../Redux/action'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => ({
    onClick: text => dispatch( addTodo(text) )
})

export default connect(null, mapDispatchToProps)(InputBar)