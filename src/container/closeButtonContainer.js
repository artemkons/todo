import { connect } from 'react-redux'
import CloseButton from '../components/CloseButton'
import { closeTodo } from '../Redux/action'

const mapDispatchToProps = (dispatch) => ({
    onClick: (id) => dispatch( closeTodo(id) )
})

export default connect(null, mapDispatchToProps)(CloseButton)

