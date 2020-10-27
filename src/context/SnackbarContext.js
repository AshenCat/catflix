import { Snackbar } from '@material-ui/core'
import React from 'react'

const SnackbarContext = React.useContext();

function SnackbarProvider(props) {
    const [open, setOpen] = React.useState();
    const [anchorOrigin, setAnchorOrigin] = React.useState({vertical: 'bottom', horizontal: 'left'})
    const [message, setMessage] = React.useState('')

    

    return (
        <SnackbarContext.SnackbarProvider>
            {props.children}
            <Snackbar
                open={open}
                anchorOrigin={anchorOrigin}
                message={message}/>
        </SnackbarContext.SnackbarProvider>
    )
}

export default SnackbarContext