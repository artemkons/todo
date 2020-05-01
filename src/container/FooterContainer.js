import { connect } from 'react-redux'
import { changeFilter } from '../Redux/action'


import Footer from '../components/Footer'

const mapDispatchToProps = dispatch => ({
    onClick: filter => dispatch( changeFilter(filter) )
})

export default connect(null, mapDispatchToProps)(Footer)