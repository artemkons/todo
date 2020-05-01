import React from "react"


import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from "@material-ui/core/Typography"
import { makeStyles } from '@material-ui/core/styles'
import Grid from "@material-ui/core/Grid"
import Checkbox from '@material-ui/core/Checkbox'

import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const useStyles = makeStyles({
    default: {

    },
    completed: {
        textDecoration: "line-through"
    }
})

const TodoItem = ({text, id, complete, onClick}) => {
    const [checked, setChecked] = React.useState(complete)
    const classes = useStyles()

    const handleChange = () => {
        setChecked(!checked)
        onClick(id)
    }

    return <Grid item xs = {12}>
        <Card variant = "outlined">
            <CardContent>
                <FormControl fullWidth>
                    <FormControlLabel
                        control = { <Checkbox checked = { complete } onChange = { handleChange } /> }
                        label = { <Typography className = { complete ? classes.completed : classes.default }> {text} </Typography> }
                    />
                </FormControl>
            </CardContent>
        </Card>

    </Grid>
}


export default TodoItem