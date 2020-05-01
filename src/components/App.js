import React from 'react'

import InputBarContainer from '../container/inputBarContainer'
import TodoListContainer from '../container/todoListContainer'
import FooterContainer from '../container/FooterContainer'

import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#f38630",
            light: "#ffb75f",
            dark: "#bb5800",
            contrastText: "black"
        },
        secondary: {
            main: "#69d2e7",
            light: "#9fffff",
            dark: "#2ca1b5",
            contrastText: "black"
        }
    }
})

const App = () => {
   
    return <ThemeProvider theme = { theme }>
        <Grid container direction = "column" spacing = {3} justify = "center">
            <Grid item xs = {12} ><InputBarContainer /></Grid>
            <Divider variant = "fullWidth"/>
            <Grid item xs = {12} ><TodoListContainer /></Grid>
            <Divider variant = "fullWidth"/>
            <Grid item xs = {12} > <FooterContainer/> </Grid>
        </Grid>
    </ThemeProvider>
}

export default App