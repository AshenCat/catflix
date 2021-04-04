import { createMuiTheme } from '@material-ui/core'
import { blueGrey, grey } from '@material-ui/core/colors'

export const CustomMuiTheme = createMuiTheme(({
    palette: {
        primary: {
            main: grey[900],
        },
        secondary: {
            main: blueGrey[800],
        },
        // text: {
        //     primary: "#ffffff",
        //     secondary: "#c2c2c2"
        // }
    }
}))