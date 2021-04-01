import { createMuiTheme } from '@material-ui/core'
import { blueGrey, grey } from '@material-ui/core/colors'

export const CustomMuiTheme = createMuiTheme(({
    palette: {
        primary: {
            main: grey[900],
        },
        secondary: {
            main: blueGrey[800],
        }
    }
}))