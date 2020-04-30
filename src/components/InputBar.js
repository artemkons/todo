import React from 'react'
import PropTypes from 'prop-types'

import TextField from '@material-ui/core/TextField';

const InputBar = ( {onClick} ) => {
    const [input, setInput] = React.useState('')

    const handleChange = event => {
        setInput(event.target.value);
    }

    return <form className = "" onSubmit = { (e) =>{
        e.preventDefault()
        if(input !== ""){
            onClick(input)
            setInput("");
        } 
    }}>
        <TextField value = {input} onChange = {handleChange} label = "TO DO!" variant = "outlined" fullWidth color = "primary"></TextField>
    </form> 
}

InputBar.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default InputBar