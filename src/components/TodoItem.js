import React from "react"

import ToDoItemCheckboxContainer from '../container/ToDoItemCheckboxContainer'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from "@material-ui/core/Typography"
import { makeStyles } from '@material-ui/core/styles'
import Grid from "@material-ui/core/Grid"
import Checkbox from '@material-ui/core/Checkbox'

const useStyles = makeStyles({
    default: {

    },
    completed: {
        textDecoration: "line-through"
    }
})

const TodoItem = ({text, id, complete, onClick}) => {
    const [checked,setChecked] = React.useState(complete)
    const classes = useStyles()
    
    return <Grid item xs = {12}>
    <Card variant = "outlined" onClick = { ev => {
        setChecked(!checked)
        console.log(checked)
        onClick(id)}}>
        <CardContent>
            <Checkbox value = { checked }/>
            <Typography className = { complete ? classes.completed : classes.default } component = "span"  variant = "body1"> { text } </Typography>
        </CardContent>
    </Card>
    </Grid>
}

export default TodoItem