import React from 'react'

import Checkbox from '@material-ui/core/Checkbox'

const ToDoItemCheckbox = ( {id, complete, onChange} ) => {
    const [checked, setChecked] = React.useState(complete)
    const handleChange = event => {
        setChecked(event.target.value)
        onChange(id)
    }
    return <Checkbox value = { checked } onChange = { handleChange } color = "primary"/>
}

export default ToDoItemCheckbox