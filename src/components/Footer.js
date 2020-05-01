import React from 'react'

import { FILTER } from '../Redux/actionType'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const Footer = ( {onClick} ) => {
    return <Grid container direction = "row"  justify = "space-between">
            <Grid item xs = {3}> 
                <Button variant = "outlined" color = "secondary" onClick = { () => onClick(FILTER.ALL) } fullWidth> 
                    <Typography  noWrap>ALL</Typography> 
                </Button>
            </Grid>
            <Grid item xs = {3}>
                 <Button variant = "outlined" color = "secondary" onClick = { () => onClick(FILTER.COMPLETED) } fullWidth> 
                    <Typography  noWrap>COMPLETED</Typography>
                </Button>
            </Grid>
            <Grid item xs = {3}>
                 <Button variant = "outlined" color = "secondary" onClick = { () => onClick(FILTER.UNCOMPLETED) } fullWidth> 
                    <Typography noWrap>UNCOMPLETED</Typography>
                </Button>
            </Grid>
        </Grid>
}

export default Footer